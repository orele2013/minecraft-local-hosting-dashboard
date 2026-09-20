# Nexus OS Preview

Nexus OS es una imagen live de Debian para administrar servidores de Minecraft
con el panel Nexus Control integrado. La primera edición usa Debian Bookworm,
XFCE y Firefox ESR para mantenerla ligera, estable y fácil de modificar.

## Qué incluye

- Escritorio XFCE con una configuración visual monocroma.
- Nexus Control servido localmente en `http://127.0.0.1:4173`.
- Firefox ESR configurado para abrir el panel al iniciar sesión.
- Java 17, Python, Git, curl y utilidades de administración.
- Directorio `/srv/minecraft` para alojar los servidores.
- Plantilla systemd `nexus-minecraft@.service` para iniciar instancias Minecraft.
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

## Iniciar un servidor Minecraft

Coloca el jar y los archivos del servidor en `/srv/minecraft/<nombre>` y crea
un servicio con:

```bash
sudo systemctl enable --now nexus-minecraft@survival.service
```

La plantilla espera `server.jar` dentro del directorio de la instancia y usa
los parámetros configurables en `/etc/nexus/server.env`.

Esta edición es una ISO live de preview. Todavía no incluye un jar de Minecraft
ni un backend remoto; eso debe añadirse según el servidor, versión y política
de acceso que se quiera utilizar.
