const iconPaths = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect>',
  server: '<rect x="3" y="4" width="18" height="6" rx="1"></rect><rect x="3" y="14" width="18" height="6" rx="1"></rect><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"></path>',
  terminal: '<path d="m5 7 4 4-4 4M12 16h7"></path>',
  users: '<path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20"></path><circle cx="10" cy="8" r="3"></circle><path d="M17 11a3 3 0 0 0 0-6M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35"></path>',
  folder: '<path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H10l2 2h7.5A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z"></path>',
  archive: '<path d="M4 7h16v13H4zM3 4h18v3H3zM9 11h6"></path>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M16 3v4M8 3v4M3 10h18"></path>',
  sliders: '<path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h10M18 18h2"></path><circle cx="16" cy="6" r="2"></circle><circle cx="8" cy="12" r="2"></circle><circle cx="16" cy="18" r="2"></circle>',
  activity: '<path d="M3 12h4l2-7 4 14 2-7h6"></path>',
  help: '<circle cx="12" cy="12" r="9"></circle><path d="M9.8 9a2.4 2.4 0 1 1 3.86 1.9c-.9.67-1.66 1.1-1.66 2.6M12 16.5h.01"></path>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 4.5 4.5"></path>',
  bell: '<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"></path>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"></path>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.8-4L3 10M3 5v5h5M4 13a8 8 0 0 0 14.8 4L21 14M21 19v-5h-5"></path>',
  plus: '<path d="M12 5v14M5 12h14"></path>',
  play: '<path d="m8 5 11 7-11 7z"></path>',
  shield: '<path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6zM8.5 12l2.2 2.2 4.8-5"></path>',
  database: '<ellipse cx="12" cy="5.5" rx="8" ry="3"></ellipse><path d="M4 5.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6M4 11.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"></path>',
  pulse: '<path d="M3 12h4l2-7 4 14 2-7h6"></path>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 20h16"></path>',
  upload: '<path d="M12 15V3M7 8l5-5 5 5M4 20h16"></path>',
  file: '<path d="M6 3h8l4 4v14H6zM14 3v5h5"></path>',
  more: '<circle cx="5" cy="12" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle>',
  check: '<path d="m5 12 4 4L19 6"></path>',
  clock: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path>',
  edit: '<path d="m4 16-.8 4.8L8 20l12-12-4-4zM13 6l4 4"></path>',
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.file}</svg>`;
}

document.querySelectorAll('[data-icon]').forEach((node) => {
  node.innerHTML = icon(node.dataset.icon);
});

const servers = [
  { id: 'comet', name: 'Comet SMP', type: 'Survival · Public', version: '1.21.1', players: '14 / 60', cpu: 36, memory: '5.2 / 12 GB', status: 'online', uptime: '18d 04h' },
  { id: 'borealis', name: 'Borealis Creative', type: 'Creative · Private', version: '1.21.1', players: '8 / 30', cpu: 24, memory: '3.1 / 8 GB', status: 'online', uptime: '42d 11h' },
  { id: 'ashfall', name: 'Ashfall Events', type: 'Events · Whitelist', version: '1.20.6', players: '5 / 100', cpu: 61, memory: '8.6 / 16 GB', status: 'online', uptime: '6d 19h' },
  { id: 'lobby', name: 'Northstar Lobby', type: 'Proxy · Public', version: 'Velocity 3.3', players: '0 / 500', cpu: 0, memory: '—', status: 'offline', uptime: '—' },
];

const players = [
  ['Asteria', 'Comet SMP', 'AS'], ['Buildsmith', 'Borealis Creative', 'BS'], ['cobalt_', 'Comet SMP', 'CO'], ['Duskfall', 'Ashfall Events', 'DU'], ['ElytraFox', 'Comet SMP', 'EF'], ['Frostbyte', 'Borealis Creative', 'FR'],
  ['Gravitas', 'Comet SMP', 'GR'], ['Holloway', 'Ashfall Events', 'HO'], ['IvyLane', 'Comet SMP', 'IL'], ['JunoPrime', 'Borealis Creative', 'JP'], ['Kairox', 'Comet SMP', 'KA'], ['Lumen', 'Ashfall Events', 'LU'],
];

const activities = [
  { icon: 'refresh', title: 'Comet SMP restarted', detail: 'Automatic update completed', time: '8m ago' },
  { icon: 'archive', title: 'Backup created', detail: 'comet-smp / 2.4 GB', time: '34m ago' },
  { icon: 'users', title: 'New player joined', detail: 'Asteria joined Comet SMP', time: '1h ago' },
  { icon: 'sliders', title: 'Server settings updated', detail: 'View distance changed to 12', time: '3h ago' },
];

const consoleLines = [
  ['12:48:02', 'INFO', 'Done (0.743s)! For help, type "help"'],
  ['12:48:08', 'INFO', 'Asteria joined the game'],
  ['12:48:17', 'INFO', 'Saving the game (this may take a moment!)'],
  ['12:48:18', 'INFO', 'Saved the game'],
  ['12:49:03', 'INFO', '<Asteria> does anyone have spare iron?'],
  ['12:49:21', 'INFO', 'cobalt_ joined the game'],
  ['12:50:00', 'INFO', 'Automatic backup started'],
  ['12:50:08', 'INFO', 'Automatic backup finished in 8.21s'],
];

const state = { currentView: 'overview', selectedServer: 'comet', consoleLines: [...consoleLines], searchTerm: '' };

function renderServerRows(compact = false) {
  return servers.map((server) => `
    <div class="server-row" data-searchable="${server.name} ${server.type} ${server.version}">
      <div class="server-identity"><span class="server-glyph">${icon('server')}</span><span class="server-name"><strong>${server.name}</strong><span>${server.type}</span></span></div>
      <div class="server-state ${server.status === 'offline' ? 'muted' : ''}"><i class="status-dot"></i>${server.status === 'online' ? 'Online' : 'Offline'}</div>
      <div class="server-stat"><label>PLAYERS</label><span>${server.players}</span></div>
      <div class="server-stat"><label>CPU LOAD</label><span>${server.cpu}%</span><div class="server-progress"><i style="width: ${server.cpu}%"></i></div></div>
      <div class="server-action"><button class="row-action" type="button" data-action="open-console" data-server="${server.id}">${compact ? 'Manage' : 'Console'} <span>→</span></button></div>
    </div>
  `).join('');
}

function renderActivity() {
  return activities.map((item) => `
    <div class="activity-item" data-searchable="${item.title} ${item.detail}">
      <span class="activity-icon">${icon(item.icon)}</span>
      <span class="activity-copy"><strong>${item.title}</strong><span>${item.detail}</span></span>
      <span class="activity-time">${item.time}</span>
    </div>
  `).join('');
}

function renderConsoleLines(lines = state.consoleLines, full = false) {
  return lines.map(([time, type, text]) => `<div class="console-line"><span class="time">[${time}]</span> <span class="info">[${type}]</span> <span class="${text.startsWith('>') ? 'command' : 'dim'}">${text}</span></div>`).join('');
}

function renderPlayers(limit = players.length) {
  return players.slice(0, limit).map(([name, server, initials]) => `
    <div class="player-chip" data-searchable="${name} ${server}"><span class="player-chip-avatar">${initials}</span><span class="player-chip-copy"><strong>${name}</strong><span>${server}</span></span></div>
  `).join('');
}

function renderChart() {
  const heights = [29, 35, 31, 43, 38, 47, 54, 45, 61, 53, 49, 67, 58, 45, 51, 39, 41, 48, 63, 55, 69, 62, 73, 64, 57, 75, 68, 71, 59, 52, 57, 66, 79, 62, 58, 65, 73, 68, 81, 63, 56, 61, 49, 54, 44, 39, 48, 43];
  return heights.map((height) => `<i style="height:${height}%"></i>`).join('');
}

function renderOverview() {
  document.querySelector('#server-list').innerHTML = renderServerRows(true);
  document.querySelector('#activity-list').innerHTML = renderActivity();
  document.querySelector('#console-preview-window').innerHTML = renderConsoleLines(consoleLines.slice(0, 6));
  document.querySelector('#bar-chart').innerHTML = renderChart();
  document.querySelector('#player-preview-grid').innerHTML = renderPlayers(12);
}

const viewTemplates = {
  servers: () => `
    <div class="subview-heading"><div><p class="eyebrow">OPERATE / SERVERS</p><h1 id="servers-title">Server fleet</h1><p>Monitor, control and configure every instance from one place.</p></div><div class="heading-actions"><button class="button button-secondary" data-action="refresh"><span data-icon="refresh"></span>Refresh data</button><button class="button button-primary" data-action="add-server"><span data-icon="plus"></span>Add server</button></div></div>
    <div class="view-grid"><section class="panel table-panel"><div class="table-tools"><span>4 registered servers</span><div class="filter-group"><button class="filter-chip active" type="button">All</button><button class="filter-chip" type="button">Online</button><button class="filter-chip" type="button">Offline</button></div></div><table class="data-table"><thead><tr><th>SERVER</th><th>STATUS</th><th>PLAYERS</th><th>CPU / MEMORY</th><th></th></tr></thead><tbody>${servers.map((server) => `<tr data-searchable="${server.name} ${server.type}"><td><span class="server-table-icon">${icon('server')}</span><span class="cell-main"><span>${server.name}</span><small>${server.type} · ${server.version}</small></span></td><td><span class="state-label ${server.status === 'offline' ? 'offline' : ''}"><i class="status-dot"></i>${server.status === 'online' ? 'Online' : 'Offline'}</span></td><td class="muted">${server.players}</td><td><span class="cell-main"><span>${server.cpu}% <span class="muted">· ${server.memory}</span></span><span class="server-progress"><i style="width:${server.cpu}%"></i></span></span></td><td><button class="table-action" type="button" data-action="open-console" data-server="${server.id}">Manage</button></td></tr>`).join('')}</tbody></table></section><div class="side-stack"><div class="mini-panel"><p class="eyebrow">NETWORK CAPACITY</p><h3>Resource allocation</h3><div class="quota-meter"><i></i></div><div class="quota-caption"><span>1.8 TB used</span><span>4 TB</span></div><div class="detail-list" style="margin-top:16px"><div class="detail-row"><span>CPU reserved</span><strong>68 / 128 vCPU</strong></div><div class="detail-row"><span>Memory reserved</span><strong>29 / 64 GB</strong></div><div class="detail-row"><span>Active instances</span><strong>3 / 4</strong></div></div></div><div class="mini-panel"><p class="eyebrow">QUICK ACTIONS</p><div class="detail-list"><button class="row-action" style="justify-content:space-between" data-action="backup"><span>Run network backup</span><span>→</span></button><button class="row-action" style="justify-content:space-between" data-action="maintenance"><span>Plan maintenance window</span><span>→</span></button><button class="row-action" style="justify-content:space-between" data-view="settings"><span>Open network settings</span><span>→</span></button></div></div></div></div>
  `,
  console: () => `
    <div class="subview-heading"><div><p class="eyebrow">OPERATE / CONSOLE</p><h1 id="console-title">Live console</h1><p>See output, send commands and keep every process under control.</p></div><div class="heading-actions"><button class="button button-secondary" data-action="clear-console">Clear output</button><button class="button button-primary" data-action="restart-server"><span data-icon="refresh"></span>Restart server</button></div></div>
    <div class="console-layout"><section class="console-full-panel"><div class="console-toolbar"><div class="console-select"><span class="server-glyph">${icon('server')}</span><span id="console-server-name">Comet SMP</span><span class="chevron">⌄</span></div><span class="console-status"><i class="status-dot"></i>Live connection · TPS 20.0</span></div><div class="console-full-window" id="console-full-window">${renderConsoleLines()}</div><form class="console-input" id="console-form"><span>&gt;</span><input id="console-command" type="text" autocomplete="off" placeholder="Type a server command…" /><button class="icon-button" type="submit" aria-label="Send command">${icon('upload')}</button></form></section><div class="side-stack"><div class="mini-panel"><p class="eyebrow">CONNECTED SERVER</p><h3>Comet SMP</h3><div class="detail-list"><div class="detail-row"><span>Address</span><strong>play.northstar.io</strong></div><div class="detail-row"><span>Version</span><strong>1.21.1</strong></div><div class="detail-row"><span>Players</span><strong>14 / 60</strong></div><div class="detail-row"><span>Uptime</span><strong>18d 04h</strong></div></div></div><div class="mini-panel"><p class="eyebrow">OTHER CONSOLES</p><div class="console-side-list">${servers.slice(1).map((server) => `<button type="button" data-action="open-console" data-server="${server.id}"><span>${server.name}</span><span>${server.status === 'online' ? 'Online' : 'Offline'}</span></button>`).join('')}</div></div></div></div>
  `,
  players: () => `
    <div class="subview-heading"><div><p class="eyebrow">OPERATE / PLAYERS</p><h1 id="players-title">Players</h1><p>Review activity, permissions and presence across the network.</p></div><div class="heading-actions"><button class="button button-secondary" data-action="export-players"><span data-icon="download"></span>Export list</button><button class="button button-primary" data-action="invite"><span data-icon="plus"></span>Invite player</button></div></div>
    <div class="view-grid"><section class="panel table-panel"><div class="table-tools"><span>27 players online</span><div class="filter-group"><button class="filter-chip active">All servers</button><button class="filter-chip">Operators</button><button class="filter-chip">Guests</button></div></div><table class="data-table"><thead><tr><th>PLAYER</th><th>SERVER</th><th>SESSION</th><th>ROLE</th><th></th></tr></thead><tbody>${players.map(([name, server, initials], index) => `<tr data-searchable="${name} ${server}"><td><span class="server-table-icon" style="border-radius:50%">${initials}</span><span class="cell-main"><span>${name}</span><small>Last seen ${index + 2}m ago</small></span></td><td class="muted">${server}</td><td class="muted">${index + 1}h ${index * 4 + 12}m</td><td><span class="status-pill ${index === 0 ? 'dark' : ''}">${index === 0 ? 'Operator' : 'Member'}</span></td><td><button class="table-action" data-action="player-menu">···</button></td></tr>`).join('')}</tbody></table></section><div class="side-stack"><div class="mini-panel"><p class="eyebrow">NETWORK PRESENCE</p><h3>Where players are</h3><div class="detail-list"><div class="detail-row"><span>Comet SMP</span><strong>14 players</strong></div><div class="detail-row"><span>Borealis Creative</span><strong>8 players</strong></div><div class="detail-row"><span>Ashfall Events</span><strong>5 players</strong></div></div></div><div class="mini-panel"><p class="eyebrow">MOST ACTIVE THIS WEEK</p><div class="detail-list"><div class="detail-row"><span>Asteria</span><strong>18h 42m</strong></div><div class="detail-row"><span>Buildsmith</span><strong>16h 08m</strong></div><div class="detail-row"><span>cobalt_</span><strong>12h 54m</strong></div></div></div></div></div>
  `,
  files: () => `
    <div class="subview-heading"><div><p class="eyebrow">MANAGE / WORLDS & FILES</p><h1 id="files-title">Worlds & files</h1><p>Browse, edit and move server files without leaving the control panel.</p></div><div class="heading-actions"><button class="button button-secondary" data-action="upload"><span data-icon="upload"></span>Upload files</button><button class="button button-primary" data-action="new-folder"><span data-icon="plus"></span>New folder</button></div></div>
    <div class="file-layout"><section class="panel folder-nav"><button class="active"><span data-icon="folder"></span>All files</button><button><span data-icon="folder"></span>Comet SMP</button><button><span data-icon="folder"></span>Borealis Creative</button><button><span data-icon="folder"></span>Ashfall Events</button><button><span data-icon="archive"></span>Shared storage</button></section><section class="panel"><div class="file-toolbar"><div class="path"><span>Comet SMP</span><span>/</span><strong>root</strong></div><button class="icon-button" data-action="file-menu" aria-label="File menu">${icon('more')}</button></div><div class="file-grid"><div class="file-card folder-card"><div class="file-card-top"><span class="file-card-icon">${icon('folder')}</span><small>DIR</small></div><div><strong>world</strong><span class="file-kind">World folder · 1.2 TB</span></div></div><div class="file-card folder-card"><div class="file-card-top"><span class="file-card-icon">${icon('folder')}</span><small>DIR</small></div><div><strong>plugins</strong><span class="file-kind">Folder · 214 MB</span></div></div>${[['server.properties','CONFIG','4 KB'],['whitelist.json','JSON','1 KB'],['ops.json','JSON','2 KB'],['banned-players.json','JSON','3 KB'],['paper.yml','YAML','7 KB'],['eula.txt','TEXT','1 KB']].map(([name, type, size]) => `<div class="file-card"><div class="file-card-top"><span class="file-card-icon">${icon('file')}</span><small>${type}</small></div><div><strong>${name}</strong><span class="file-kind">${size} · Updated today</span></div></div>`).join('')}</div></section></div>
  `,
  backups: () => `
    <div class="subview-heading"><div><p class="eyebrow">MANAGE / BACKUPS</p><h1 id="backups-title">Backups</h1><p>Reliable restore points for worlds, settings and player data.</p></div><div class="heading-actions"><button class="button button-secondary" data-action="backup"><span data-icon="refresh"></span>Run backup now</button><button class="button button-primary" data-action="backup-schedule"><span data-icon="calendar"></span>Schedule backup</button></div></div>
    <div class="view-grid"><section class="panel table-panel"><div class="table-tools"><span>18 restore points · 240 GB available</span><div class="filter-group"><button class="filter-chip active">All backups</button><button class="filter-chip">Comet SMP</button><button class="filter-chip">Borealis</button></div></div><div class="backup-list">${[['Comet SMP · Full backup','Today, 12:50','2.4 GB','Completed'],['Borealis Creative · Full backup','Today, 06:00','1.8 GB','Completed'],['Ashfall Events · World only','Yesterday, 23:00','6.2 GB','Completed'],['Comet SMP · Full backup','Yesterday, 12:50','2.4 GB','Completed'],['Comet SMP · Pre-update snapshot','Sep 18, 12:50','2.3 GB','Completed']].map(([name,date,size,status]) => `<div class="backup-row"><span class="backup-icon">${icon('archive')}</span><span class="backup-name"><strong>${name}</strong><span>${date} · ${status}</span></span><span>${size}</span><button class="row-action" data-action="restore">Restore <span>↗</span></button></div>`).join('')}</div></section><div class="side-stack"><div class="mini-panel"><p class="eyebrow">BACKUP HEALTH</p><h3>Protected and ready</h3><div class="detail-list"><div class="detail-row"><span>Last successful</span><strong>8 min ago</strong></div><div class="detail-row"><span>Next scheduled</span><strong>in 5h 52m</strong></div><div class="detail-row"><span>Retention</span><strong>30 days</strong></div></div></div><div class="mini-panel"><p class="eyebrow">STORAGE</p><h3>240 GB available</h3><div class="quota-meter"><i style="width: 64%"></i></div><div class="quota-caption"><span>426 GB used</span><span>666 GB</span></div></div></div></div>
  `,
  schedules: () => `
    <div class="subview-heading"><div><p class="eyebrow">MANAGE / SCHEDULES</p><h1 id="schedules-title">Schedules</h1><p>Automate maintenance, backups and server commands with confidence.</p></div><div class="heading-actions"><button class="button button-primary" data-action="new-schedule"><span data-icon="plus"></span>New schedule</button></div></div>
    <div class="view-grid"><section class="panel table-panel"><div class="table-tools"><span>4 active schedules</span><div class="filter-group"><button class="filter-chip active">All</button><button class="filter-chip">Active</button><button class="filter-chip">Paused</button></div></div><div class="schedule-list">${[['Nightly full backup','Every day at 03:00','All servers',true],['Restart idle lobby','Every 6 hours','Northstar Lobby',true],['Weekly server updates','Sunday at 04:00','All servers',true],['Clear old logs','Every Monday at 05:00','All servers',false]].map(([name,when,target,active]) => `<div class="schedule-row"><span class="schedule-icon">${icon('calendar')}</span><span class="schedule-meta"><strong>${name}</strong><span>${when} · ${target}</span></span><span class="status-pill">${active ? 'Next in 5h' : 'Paused'}</span><button class="toggle ${active ? '' : 'off'}" data-action="toggle-schedule" aria-label="Toggle schedule"></button></div>`).join('')}</div></section><div class="side-stack"><div class="mini-panel"><p class="eyebrow">AUTOMATION HEALTH</p><h3>Nothing needs attention</h3><div class="detail-list"><div class="detail-row"><span>Successful runs</span><strong>128 this month</strong></div><div class="detail-row"><span>Failed runs</span><strong>0 this month</strong></div><div class="detail-row"><span>Next run</span><strong>in 5h 52m</strong></div></div></div><div class="mini-panel"><p class="eyebrow">SUGGESTED</p><h3>Keep backups current</h3><p style="margin:0;color:var(--muted);font-size:10px;line-height:1.6">Your network is growing. A second daily restore point would reduce recovery time.</p><button class="button button-secondary" style="width:100%;margin-top:15px" data-action="backup-schedule">Review suggestion</button></div></div></div>
  `,
  settings: () => `
    <div class="subview-heading"><div><p class="eyebrow">SYSTEM / SETTINGS</p><h1 id="settings-title">Settings</h1><p>Shape the network, access rules and alerts to fit your operation.</p></div><div class="heading-actions"><button class="button button-primary" data-action="save-settings">Save changes</button></div></div>
    <div class="settings-layout"><section class="panel settings-nav"><button class="active">General</button><button>Access & roles</button><button>Notifications</button><button>Billing & usage</button><button>API access</button></section><section class="panel settings-content"><div class="settings-section"><h3>General preferences</h3><p>Default behavior for this Northstar Network workspace.</p><div class="setting-row"><span class="setting-copy"><strong>Maintenance mode</strong><span>Show a maintenance banner to players before scheduled work.</span></span><button class="switch off" data-action="toggle-switch" aria-label="Toggle maintenance mode"></button></div><div class="setting-row"><span class="setting-copy"><strong>Require confirmation for destructive actions</strong><span>Ask before stopping a server or deleting a restore point.</span></span><button class="switch" data-action="toggle-switch" aria-label="Toggle confirmation"></button></div><div class="setting-row"><span class="setting-copy"><strong>Default server region</strong><span>New servers will use this region by default.</span></span><select class="select-wide" aria-label="Default server region"><option>Frankfurt · eu-central</option><option>London · eu-west</option><option>New York · us-east</option></select></div></div><div class="settings-section"><h3>Notifications</h3><p>Choose when Nexus should contact the admin team.</p><div class="setting-row"><span class="setting-copy"><strong>Failed backup alerts</strong><span>Notify the team immediately if an automated backup fails.</span></span><button class="switch" data-action="toggle-switch" aria-label="Toggle failed backup alerts"></button></div><div class="setting-row"><span class="setting-copy"><strong>Weekly network summary</strong><span>Receive a compact performance summary every Monday.</span></span><button class="switch" data-action="toggle-switch" aria-label="Toggle weekly summary"></button></div></div><div class="settings-section"><h3>Android server controller</h3><p>Connect the APK to the service that starts and stops your Minecraft instances.</p><div class="setting-row"><span class="setting-copy"><strong>Control endpoint</strong><span>POST /api/servers/{id}/start and /stop</span></span><button class="button button-secondary" data-action="configure-controller">Configure endpoint</button></div></div><div class="settings-section"><h3>Danger zone</h3><p>Actions here affect the entire workspace.</p><button class="button button-secondary" data-action="rotate-key">Rotate API keys</button></div></section></div>
  `,
  audit: () => `
    <div class="subview-heading"><div><p class="eyebrow">SYSTEM / AUDIT LOG</p><h1 id="audit-title">Audit log</h1><p>A clear record of everything your team changes across the network.</p></div><div class="heading-actions"><button class="button button-secondary" data-action="export-audit"><span data-icon="download"></span>Export log</button></div></div>
    <div class="view-grid single"><section class="panel table-panel"><div class="table-tools"><span>Showing the latest 20 events</span><div class="filter-group"><button class="filter-chip active">All activity</button><button class="filter-chip">Server changes</button><button class="filter-chip">Access</button></div></div><div class="audit-list">${[['AM','Alex Morgan','Restarted Comet SMP','Server control','8 minutes ago'],['AM','Alex Morgan','Created a full backup for Comet SMP','Backup','34 minutes ago'],['SY','System','Asteria joined Comet SMP','Player activity','1 hour ago'],['AM','Alex Morgan','Updated view distance to 12','Settings','3 hours ago'],['JK','Jamie Kim','Changed Borealis access policy','Access','Yesterday, 18:42'],['SY','System','Automatic update completed on 3 servers','Maintenance','Yesterday, 04:00']].map(([initials,who,what,tag,when]) => `<div class="audit-row" data-searchable="${who} ${what} ${tag}"><span class="audit-avatar">${initials}</span><span class="audit-copy"><strong>${what}</strong><span>by ${who}</span></span><span>${when}</span><span class="audit-tag">${tag}</span></div>`).join('')}</div></section></div>
  `,
};

function setView(viewName) {
  if (!viewName) return;
  state.currentView = viewName;
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.view === viewName));
  document.querySelectorAll('.view').forEach((view) => view.classList.toggle('active-view', view.dataset.page === viewName));
  const view = document.querySelector(`.view[data-page="${viewName}"]`);
  if (viewName !== 'overview' && view && view.innerHTML.trim() === '') {
    view.innerHTML = viewTemplates[viewName] ? viewTemplates[viewName]() : '';
    view.querySelectorAll('[data-icon]').forEach((node) => { node.innerHTML = icon(node.dataset.icon); });
  }
  const current = document.querySelector('#breadcrumb-current');
  if (current) current.textContent = viewName.replace('-', ' ').toUpperCase();
  document.querySelector('#sidebar')?.classList.remove('mobile-open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  applySearch();
}

function showToast(message, iconName = 'check') {
  const stack = document.querySelector('#toast-stack');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `${icon(iconName)}<span>${message}</span>`;
  stack.appendChild(toast);
  window.setTimeout(() => { toast.classList.add('fade'); window.setTimeout(() => toast.remove(), 250); }, 3000);
}

function openModal(content) {
  const backdrop = document.querySelector('#modal-backdrop');
  document.querySelector('#modal').innerHTML = content;
  backdrop.hidden = false;
  document.querySelector('#modal input, #modal select')?.focus();
}

function closeModal() { document.querySelector('#modal-backdrop').hidden = true; }

function nativeBridge() {
  return window.NexusBridge && typeof window.NexusBridge.startServer === 'function' ? window.NexusBridge : null;
}

function requestServerStart(server) {
  const bridge = nativeBridge();
  if (bridge) {
    bridge.startServer(server.id);
    showToast(`Solicitud enviada para iniciar ${server.name}`, 'play');
    return;
  }
  server.status = 'online';
  server.cpu = 4;
  server.players = '0 / 500';
  renderOverview();
  showToast(`${server.name} iniciado en modo demo`, 'check');
}

function applySearch() {
  const query = state.searchTerm.trim().toLowerCase();
  document.querySelectorAll('.view.active-view [data-searchable]').forEach((item) => {
    item.hidden = Boolean(query) && !item.dataset.searchable.toLowerCase().includes(query);
  });
}

function openConsole(serverId = 'comet') {
  state.selectedServer = serverId;
  setView('console');
  const server = servers.find((item) => item.id === serverId);
  if (server) {
    const name = document.querySelector('#console-server-name');
    if (name) name.textContent = server.name;
    showToast(`Console abierta: ${server.name}`);
  }
}

document.addEventListener('click', (event) => {
  const viewButton = event.target.closest('[data-view]');
  if (viewButton) { setView(viewButton.dataset.view); return; }

  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;
  const action = actionButton.dataset.action;

  if (action === 'mobile-menu') { document.querySelector('#sidebar').classList.toggle('mobile-open'); return; }
  if (action === 'open-console') { openConsole(actionButton.dataset.server || 'comet'); return; }
  if (action === 'refresh') { showToast('Datos actualizados hace un momento', 'refresh'); return; }
  if (action === 'notifications') { showToast('No hay notificaciones pendientes', 'bell'); return; }
  if (action === 'help') { showToast('Centro de ayuda disponible en docs.nexus.local', 'help'); return; }
  if (action === 'profile' || action === 'workspace') { showToast(action === 'profile' ? 'Perfil de administrador' : 'Espacio de producción activo'); return; }
  if (action === 'view-status') { setView('servers'); return; }
  if (action === 'start-server') {
    const server = servers.find((item) => item.status === 'offline') || servers[0];
    openModal(`<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><h2 id="modal-title">Start a server</h2><p class="modal-lead">The selected server will be started using the connected Northstar control endpoint.</p><div class="mini-panel" style="margin-bottom:16px"><div class="detail-row"><span>Server</span><strong>${server.name}</strong></div><div class="detail-row"><span>Address</span><strong>play.northstar.io</strong></div><div class="detail-row"><span>Version</span><strong>${server.version}</strong></div></div><div class="modal-actions"><button class="button button-secondary" type="button" data-action="close-modal">Cancel</button><button class="button button-primary" type="button" data-action="confirm-start-server" data-server="${server.id}"><span data-icon="play"></span>Start ${server.name}</button></div>`);
    document.querySelectorAll('#modal [data-icon]').forEach((node) => { node.innerHTML = icon(node.dataset.icon); });
    return;
  }
  if (action === 'confirm-start-server') {
    const server = servers.find((item) => item.id === actionButton.dataset.server);
    if (server) requestServerStart(server);
    closeModal();
    return;
  }
  if (action === 'activity-filter') { showToast('Actividad filtrada: todos los eventos'); return; }
  if (action === 'resource-period') { showToast('Periodo disponible: últimas 24 horas'); return; }
  if (action === 'add-server') {
    openModal(`<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><h2 id="modal-title">Add a server</h2><p class="modal-lead">Connect a new Minecraft instance to the Northstar Network workspace.</p><form class="modal-form" id="add-server-form"><label class="form-label">SERVER NAME<input name="name" required placeholder="e.g. Redwood SMP" /></label><label class="form-label">SERVER ADDRESS<input name="address" required placeholder="play.example.net" /></label><label class="form-label">SERVER TYPE<select name="type"><option>Survival</option><option>Creative</option><option>Events</option><option>Proxy</option></select></label><div class="modal-actions"><button class="button button-secondary" type="button" data-action="close-modal">Cancel</button><button class="button button-primary" type="submit">Connect server</button></div></form>`);
    return;
  }
  if (action === 'close-modal') { closeModal(); return; }
  if (action === 'backup') { showToast('Backup iniciado para toda la red', 'archive'); return; }
  if (action === 'backup-schedule') { showToast('Programador de backups abierto', 'calendar'); return; }
  if (action === 'maintenance') { showToast('Ventana de mantenimiento preparada'); return; }
  if (action === 'restart-server') { showToast('Reinicio programado para Comet SMP', 'refresh'); return; }
  if (action === 'clear-console') { state.consoleLines = []; const target = document.querySelector('#console-full-window'); if (target) target.innerHTML = '<div class="console-line"><span class="dim">Output cleared. Waiting for new logs…</span></div>'; showToast('Salida de consola limpiada'); return; }
  if (action === 'export-players' || action === 'export-audit') { showToast('Exportación preparada para descargar', 'download'); return; }
  if (action === 'invite') { showToast('Enlace de invitación copiado'); return; }
  if (action === 'upload') { showToast('Selecciona los archivos que quieres subir', 'upload'); return; }
  if (action === 'new-folder') { showToast('Formulario de nueva carpeta listo'); return; }
  if (action === 'file-menu' || action === 'player-menu') { showToast('Más acciones disponibles próximamente', 'more'); return; }
  if (action === 'restore') { showToast('Selecciona un destino para restaurar este backup', 'archive'); return; }
  if (action === 'new-schedule') { showToast('Nuevo flujo programado listo para configurar', 'calendar'); return; }
  if (action === 'toggle-schedule') { actionButton.classList.toggle('off'); showToast(`Schedule ${actionButton.classList.contains('off') ? 'paused' : 'activated'}`); return; }
  if (action === 'toggle-switch') { actionButton.classList.toggle('off'); return; }
  if (action === 'save-settings') { showToast('Ajustes guardados correctamente'); return; }
  if (action === 'configure-controller') {
    const bridge = nativeBridge();
    const endpoint = bridge && typeof bridge.getEndpoint === 'function' ? bridge.getEndpoint() : '';
    const safeEndpoint = String(endpoint).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    openModal(`<button class="modal-close" data-action="close-modal" aria-label="Close">×</button><h2 id="modal-title">Configure controller</h2><p class="modal-lead">Use the Android app to securely connect this dashboard to your Minecraft control service.</p><form class="modal-form" id="controller-config-form"><label class="form-label">CONTROL ENDPOINT<input name="endpoint" required value="${safeEndpoint}" placeholder="https://panel.example.com" /></label><label class="form-label">BEARER TOKEN<input name="token" type="password" placeholder="Optional API token" /></label><div class="modal-actions"><button class="button button-secondary" type="button" data-action="close-modal">Cancel</button><button class="button button-primary" type="submit">Save endpoint</button></div></form>`);
    return;
  }
  if (action === 'rotate-key') { showToast('Rotación de claves requiere confirmación'); return; }
});

document.addEventListener('submit', (event) => {
  if (event.target.id === 'console-form') {
    event.preventDefault();
    const input = event.target.querySelector('input');
    const command = input.value.trim();
    if (!command) return;
    const timestamp = new Date().toTimeString().slice(0, 8);
    state.consoleLines.push([timestamp, 'CMD', `> ${command}`]);
    state.consoleLines.push([timestamp, 'INFO', 'Command sent to Comet SMP']);
    const target = document.querySelector('#console-full-window');
    if (target) { target.innerHTML = renderConsoleLines(); target.scrollTop = target.scrollHeight; }
    input.value = '';
    showToast('Comando enviado', 'terminal');
  }
  if (event.target.id === 'add-server-form') {
    event.preventDefault();
    const name = new FormData(event.target).get('name');
    closeModal();
    showToast(`${name} añadido a la red`, 'server');
  }
  if (event.target.id === 'controller-config-form') {
    event.preventDefault();
    const values = new FormData(event.target);
    const bridge = nativeBridge();
    if (bridge && typeof bridge.configure === 'function') {
      bridge.configure(values.get('endpoint'), values.get('token'));
      closeModal();
      showToast('Control endpoint saved');
    } else {
      closeModal();
      showToast('Esta configuración está disponible en la APK', 'activity');
    }
  }
});

document.querySelector('#global-search').addEventListener('input', (event) => { state.searchTerm = event.target.value; applySearch(); });
document.addEventListener('keydown', (event) => {
  if (event.key === '/' && document.activeElement.tagName !== 'INPUT') { event.preventDefault(); document.querySelector('#global-search').focus(); }
  if (event.key === 'Escape') closeModal();
});
document.querySelector('#modal-backdrop').addEventListener('click', (event) => { if (event.target.id === 'modal-backdrop') closeModal(); });

window.addEventListener('nexus-native-status', (event) => {
  const detail = event.detail || {};
  if (detail.status === 'success') showToast(detail.message || 'Server action completed', 'check');
  if (detail.status === 'error') showToast(detail.message || 'Could not reach the server control endpoint', 'activity');
});

renderOverview();
