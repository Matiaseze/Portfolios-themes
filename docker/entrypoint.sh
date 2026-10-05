#!/bin/sh
set -e

if [ -f package.json ]; then
  # Reinstala dependencias solo cuando cambian package.json / package-lock.json
  deps_hash=$(cat package.json package-lock.json 2>/dev/null | sha256sum | cut -d' ' -f1)
  if [ ! -f node_modules/.deps-hash ] || [ "$(cat node_modules/.deps-hash)" != "$deps_hash" ]; then
    echo "[entrypoint] Instalando dependencias..."
    npm install
    echo "$deps_hash" > node_modules/.deps-hash
  fi
elif [ "$1" = "npm" ] && [ "$2" = "run" ]; then
  exec sleep infinity
fi

exec "$@"
