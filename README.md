# Nexus Control

Panel de administración monocromo para una red de servidores de Minecraft.

## Ejecutar localmente

Desde esta carpeta, inicia el controlador real:

```bash
NEXUS_STATIC_ROOT="$PWD" \
NEXUS_DATA_DIR="/tmp/nexus-data" \
MINECRAFT_SERVER_ROOT="/tmp/nexus-servers" \
NEXUS_CONTROL_PORT=4173 \
python3 os/config/includes.chroot/usr/local/bin/nexus-control-server
```

Después abre `http://localhost:4173`.

## Incluye

- Creación de servidores reales con JAR oficial de Mojang o URL propia.
- Aceptación de EULA, memoria, puerto y configuración por servidor.
- Inicio, detención, reinicio, registro y comandos de consola.
- Conexión por IP directa o dominio opcional con comprobación DNS.
- Persistencia local en `/srv/minecraft` y `/var/lib/nexus`.
- UI estrictamente monocroma, sin gradientes ni emojis.

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

Configura el endpoint del controlador Nexus OS desde los ajustes de la aplicación.

## Nexus OS

También incluye Nexus OS, una imagen live de propósito único. Arranca con
autologin y abre únicamente Nexus Control en Firefox ESR a pantalla completa,
sin XFCE ni escritorio visible. El proyecto está en `os/` y puede generar una
ISO con:

```bash
./os/build-iso.sh
```

La imagen integra Openbox como base mínima, Firefox ESR, Java 17, el backend
local y almacenamiento real para servidores Minecraft en `/srv/minecraft`.
