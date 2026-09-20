# Nexus Control

Panel de administración monocromo para una red de servidores de Minecraft.

## Ejecutar localmente

Desde esta carpeta:

```bash
python3 -m http.server 4173
```

Después abre `http://localhost:4173`.

## Incluye

- Dashboard con métricas de servidores, jugadores, almacenamiento y uptime.
- Fleet view con estado, CPU, memoria, jugadores y acciones por servidor.
- Consola en vivo simulada con envío de comandos.
- Vistas de jugadores, archivos, backups, schedules, ajustes y audit log.
- Búsqueda global y navegación responsive.
- Modales, toasts y acciones simuladas para probar el flujo sin backend.
- UI estrictamente monocroma, sin gradientes ni emojis.

Los datos de ejemplo viven en `app.js` y están listos para conectarse a una API real cuando exista el backend.

## Android APK

El proyecto Android está en `android/` y el APK debug generado está en
`NexusControl-debug.apk`.

```bash
cd android
./gradlew assembleDebug
```

La APK incorpora el dashboard en un WebView y un puente nativo para enviar:

```text
POST {endpoint}/api/servers/{id}/start
POST {endpoint}/api/servers/{id}/stop
```

Configura el endpoint desde `Settings → Android server controller`. Sin endpoint,
la app funciona en modo demo para poder revisar toda la interfaz.

## Nexus OS

También incluye una distribución Linux live basada en Debian para usar el panel
como estación de administración. El proyecto está en `os/` y puede generar una
ISO con:

```bash
./os/build-iso.sh
```

La primera edición integra XFCE, Firefox ESR, Java 17, el dashboard local y una
plantilla systemd para instancias Minecraft en `/srv/minecraft`.
