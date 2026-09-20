FROM debian:bookworm

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       ca-certificates \
       debootstrap \
       live-build \
       live-config \
       live-boot \
       mtools \
       rsync \
       squashfs-tools \
       xorriso \
       xz-utils \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /build
COPY os /build/os
COPY index.html styles.css app.js /build/dashboard/

RUN chmod +x /build/os/build-in-container.sh /build/os/auto/*

ENTRYPOINT ["/build/os/build-in-container.sh"]
