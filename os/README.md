# Nexus OS

Nexus OS es una imagen live de propósito único para administrar servidores de
Minecraft con Nexus Control integrado. Usa una base Debian Bookworm mínima,
Openbox y Firefox ESR en modo quiosco; el usuario no entra en un escritorio
Debian convencional.

## Qué incluye

- Arranque automático de Nexus Control a pantalla completa.
- Nexus Control servido localmente en `http://127.0.0.1:4173`.
- Backend Python sin dependencias externas para crear y administrar servidores.
- Java 17, Python, Firefox ESR, NetworkManager y agente QEMU.
- Directorios `/srv/minecraft` y `/var/lib/nexus` para datos persistentes.
- Servidores por IP directa o dominio opcional con estado DNS.
- Construcción reproducible dentro de Docker.

## Generar la ISO

Desde la raíz del repositorio:

```bash
./os/build-iso.sh
```

La imagen se generará en:

```text
os/dist/nexus-os-0.1.0-amd64.iso
```

El constructor necesita Docker y utiliza un contenedor privilegiado porque
`live-build` debe crear un sistema de archivos squashfs y una imagen híbrida.

## Crear un servidor Minecraft

Usa `Nuevo servidor` dentro de Nexus Control. La aplicación descarga el JAR
oficial de Mojang si no indicas una URL propia, crea la instancia, solicita la
aceptación de la EULA y permite iniciar, detener, reiniciar, consultar registros
y enviar comandos.

El dominio no se registra automáticamente: debes crear el registro A/AAAA o
SRV en tu proveedor DNS y redirigir el puerto del router a la máquina Nexus OS.
Si no usas dominio, conecta con una IP detectada y el puerto mostrado por la
aplicación.
