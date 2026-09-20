FROM debian:bookworm

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get -o Acquire::ForceIPv4=true -o Acquire::Retries=10 -o Acquire::http::Timeout=60 update \
    && apt-get -o Acquire::ForceIPv4=true -o Acquire::Retries=10 -o Acquire::http::Timeout=60 install -y --no-install-recommends \
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
    && printf '%s\n' \
       'Acquire::ForceIPv4 "true";' \
       'Acquire::Retries "10";' \
       'Acquire::http::Timeout "60";' \
       'Acquire::https::Timeout "60";' \
       'Acquire::http::Pipeline-Depth "0";' \
       > /etc/apt/apt.conf.d/99nexus-network \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /build
COPY os /build/os
COPY index.html styles.css app.js /build/dashboard/

RUN chmod +x /build/os/build-in-container.sh /build/os/auto/*

ENTRYPOINT ["/build/os/build-in-container.sh"]
