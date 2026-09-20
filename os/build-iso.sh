#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
IMAGE_NAME="nexus-os-builder"
OUTPUT_DIR="$ROOT_DIR/os/dist"

mkdir -p "$OUTPUT_DIR"

docker build --tag "$IMAGE_NAME" --file "$ROOT_DIR/os/Dockerfile" "$ROOT_DIR"
docker run --rm --privileged \
  --volume "$OUTPUT_DIR:/out" \
  "$IMAGE_NAME"

printf '\nISO ready: %s\n' "$OUTPUT_DIR/nexus-os-0.1.0-amd64.iso"
