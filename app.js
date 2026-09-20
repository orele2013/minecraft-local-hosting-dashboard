const state = { servers: [], status: null, versions: [], busy: false };
const $ = (selector) => document.querySelector(selector);

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

async function api(path, options = {}) {
  const response = await fetch(path, { headers: { 'Content-Type': 'application/json' }, ...options });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || `Error HTTP ${response.status}`);
  return data;
}

function showMessage(text, kind = 'info') {
  const message = $('#message');
  message.textContent = text;
  message.dataset.kind = kind;
  message.hidden = false;
  window.clearTimeout(showMessage.timer);
  showMessage.timer = window.setTimeout(() => { message.hidden = true; }, 7000);
}

function setBusy(value) {
  state.busy = value;
  document.querySelectorAll('button').forEach((button) => { button.disabled = value; });
}

function connectionMarkup(server) {
  const lines = [];
  if (server.connection.domain) lines.push(`<div class="address-line"><span>Dominio</span><code>${escapeHtml(server.connection.domain)}</code><span class="dns-state ${server.connection.domain_resolves ? 'ok' : 'pending'}">${server.connection.domain_resolves ? 'resuelve' : 'sin DNS'}</span></div>`);
  server.connection.ips.forEach((address) => lines.push(`<div class="address-line"><span>IP</span><code>${escapeHtml(address)}</code></div>`));
  return lines.join('') || '<div class="empty-line">No se ha detectado una dirección.</div>';
}

function serverCard(server) {
  const online = server.status === 'online';
  const ready = server.ready && !online;
  const readiness = !server.jar_present ? 'Falta el JAR' : !server.eula ? 'EULA pendiente' : online ? 'En ejecución' : 'Listo para iniciar';
  return `<article class="server-card"><div class="server-card-head"><div><p class="kicker">${escapeHtml(server.version)}</p><h3>${escapeHtml(server.name)}</h3></div><span class="state ${online ? 'online' : ''}"><i></i>${online ? 'En línea' : 'Apagado'}</span></div><div class="server-meta"><span>Puerto <strong>${escapeHtml(server.port)}</strong></span><span>Memoria <strong>${escapeHtml(server.memory)}</strong></span><span>Estado <strong>${readiness}</strong></span></div><div class="addresses">${connectionMarkup(server)}</div><div class="card-actions">${online ? `<button class="button button-outline" data-action="stop" data-id="${escapeHtml(server.id)}">Detener</button>` : `<button class="button button-white" data-action="start" data-id="${escapeHtml(server.id)}" ${ready ? '' : 'disabled'}>Iniciar</button>`}<button class="button button-outline" data-action="logs" data-id="${escapeHtml(server.id)}">Registro</button><button class="button button-outline" data-action="network" data-id="${escapeHtml(server.id)}">Conexión</button><button class="button button-danger" data-action="delete" data-id="${escapeHtml(server.id)}">Eliminar</button></div></article>`;
}

function render() {
  const servers = state.servers;
  $('#server-count').textContent = servers.length;
  $('#online-count').textContent = servers.filter((server) => server.status === 'online').length;
  $('#local-addresses').textContent = state.status?.local_ips?.join(' · ') || 'Sin detectar';
  $('#system-state').textContent = 'Sistema operativo activo';
  $('#server-grid').innerHTML = servers.length ? servers.map(serverCard).join('') : `<div class="empty-state"><div class="empty-mark">N</div><h3>No hay servidores creados</h3><p>Crea el primero para descargar su JAR, asignar un puerto y elegir si tendrá dominio.</p><button class="button button-white" data-action="new-server">Crear servidor</button></div>`;
}

async function refresh() {
  try {
    const [status, serverData] = await Promise.all([api('/api/status'), api('/api/servers')]);
    state.status = status; state.servers = serverData.servers || []; render();
  } catch (error) { $('#system-state').textContent = 'Controlador no disponible'; showMessage(error.message, 'error'); }
}

function openModal(content) { $('#modal').innerHTML = content; $('#modal-backdrop').hidden = false; }
function closeModal() { $('#modal-backdrop').hidden = true; $('#modal').innerHTML = ''; }

function createServerModal() {
  openModal(`<button class="modal-close" data-action="close-modal" aria-label="Cerrar">×</button><p class="kicker">NUEVA INSTANCIA</p><h2 id="modal-title">Crear servidor</h2><p class="modal-lead">Nexus OS descargará el JAR oficial de Mojang si no proporcionas una URL propia.</p><form id="create-form" class="form-grid"><label>Nombre<input name="name" required maxlength="80" placeholder="Mi servidor" /></label><label>Versión<input name="version" list="version-list" required value="latest" placeholder="latest o 1.21.1" /></label><datalist id="version-list">${state.versions.map((version) => `<option value="${escapeHtml(version)}"></option>`).join('')}</datalist><label>Puerto<input name="port" type="number" min="1024" max="65535" value="25565" required /></label><label>Memoria máxima<input name="memory" value="2G" pattern="[0-9]+[MG]" required /></label><label class="full">Dominio opcional<input name="domain" placeholder="mc.ejemplo.com" /><small>Déjalo vacío para usar solo IP.</small></label><label class="full">URL de JAR opcional<input name="jar_url" type="url" placeholder="https://.../server.jar" /><small>Si queda vacío se usará el manifiesto oficial de Mojang.</small></label><label class="check full"><input name="eula" type="checkbox" required /><span>Acepto la EULA de Minecraft para este servidor.</span></label><div class="modal-actions full"><button type="button" class="button button-outline" data-action="close-modal">Cancelar</button><button class="button button-white" type="submit">Crear y descargar</button></div></form>`);
}

function networkModal(server) {
  openModal(`<button class="modal-close" data-action="close-modal" aria-label="Cerrar">×</button><p class="kicker">CONEXIÓN</p><h2 id="modal-title">${escapeHtml(server.name)}</h2><p class="modal-lead">El dominio no es obligatorio. El puerto debe estar abierto en el router para conexiones desde Internet.</p><form id="network-form" class="form-grid"><label>Puerto<input name="port" type="number" min="1024" max="65535" value="${escapeHtml(server.port)}" required /></label><label>Dominio opcional<input name="domain" value="${escapeHtml(server.domain || '')}" placeholder="mc.ejemplo.com" /></label><div class="address-preview full">${connectionMarkup(server)}</div><div class="modal-actions full"><button type="button" class="button button-outline" data-action="close-modal">Cancelar</button><button class="button button-white" type="submit">Guardar conexión</button></div></form>`);
  $('#network-form').dataset.id = server.id;
}

async function showLogs(server) {
  const data = await api(`/api/servers/${encodeURIComponent(server.id)}/logs`);
  openModal(`<button class="modal-close" data-action="close-modal" aria-label="Cerrar">×</button><p class="kicker">REGISTRO</p><h2 id="modal-title">${escapeHtml(server.name)}</h2><pre class="log-output">${escapeHtml((data.lines || []).join('\n') || 'Sin salida todavía.')}</pre><div class="modal-actions"><button class="button button-white" data-action="close-modal">Cerrar</button></div>`);
}

async function perform(action, id) {
  setBusy(true);
  try { await api(`/api/servers/${encodeURIComponent(id)}/${action}`, { method: 'POST', body: JSON.stringify({}) }); await refresh(); showMessage(action === 'start' ? 'Servidor iniciado.' : 'Servidor detenido.'); }
  catch (error) { showMessage(error.message, 'error'); }
  finally { setBusy(false); }
}

document.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-action]');
  if (!button || state.busy) return;
  const action = button.dataset.action;
  if (action === 'new-server') return createServerModal();
  if (action === 'close-modal') return closeModal();
  if (action === 'refresh') return refresh();
  const server = state.servers.find((item) => item.id === button.dataset.id);
  if (!server) return;
  if (action === 'start' || action === 'stop') return perform(action, server.id);
  if (action === 'logs') { try { await showLogs(server); } catch (error) { showMessage(error.message, 'error'); } return; }
  if (action === 'network') return networkModal(server);
  if (action === 'delete') {
    if (!window.confirm(`¿Eliminar ${server.name} y todos sus archivos?`)) return;
    setBusy(true);
    try { await api(`/api/servers/${encodeURIComponent(server.id)}`, { method: 'POST', body: JSON.stringify({}) }); await refresh(); showMessage('Servidor eliminado.'); }
    catch (error) { showMessage(error.message, 'error'); }
    finally { setBusy(false); }
  }
});

document.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.target;
  if (form.id === 'create-form') {
    setBusy(true);
    try { const data = Object.fromEntries(new FormData(form).entries()); data.port = Number(data.port); data.eula = form.eula.checked; await api('/api/servers', { method: 'POST', body: JSON.stringify(data) }); closeModal(); await refresh(); showMessage('Servidor creado y JAR descargado.'); }
    catch (error) { showMessage(error.message, 'error'); }
    finally { setBusy(false); }
  }
  if (form.id === 'network-form') {
    setBusy(true);
    try { const data = Object.fromEntries(new FormData(form).entries()); data.port = Number(data.port); await api(`/api/servers/${encodeURIComponent(form.dataset.id)}/network`, { method: 'POST', body: JSON.stringify(data) }); closeModal(); await refresh(); showMessage('Conexión guardada.'); }
    catch (error) { showMessage(error.message, 'error'); }
    finally { setBusy(false); }
  }
});

$('#modal-backdrop').addEventListener('click', (event) => { if (event.target.id === 'modal-backdrop') closeModal(); });
async function loadVersions() { try { state.versions = (await api('/api/versions')).versions || []; } catch (_) { state.versions = []; } }
refresh(); loadVersions(); window.setInterval(refresh, 5000);
