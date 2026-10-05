# Entorno de desarrollo: Node LTS para Astro (Vite viene incluido con Astro),
# Tailwind, GSAP y PhotoSwipe. Imagen Debian (glibc) para que binarios nativos
# como sharp, esbuild o rollup usen sus builds precompilados sin sorpresas.
FROM node:24-bookworm-slim

ENV NODE_ENV=development \
    ASTRO_TELEMETRY_DISABLED=1 \
    npm_config_update_notifier=false \
    npm_config_fund=false \
    # Los bind mounts desde Windows no propagan eventos de inotify: forzamos polling
    CHOKIDAR_USEPOLLING=true

RUN apt-get update \
    && apt-get install -y --no-install-recommends git ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
# sed: por si el archivo llega con CRLF desde Windows
RUN sed -i 's/\r$//' /usr/local/bin/entrypoint.sh \
    && chmod +x /usr/local/bin/entrypoint.sh

WORKDIR /app
# node_modules debe existir con dueño "node" para que el volumen nombrado herede los permisos
RUN mkdir -p /app/node_modules && chown -R node:node /app

USER node

EXPOSE 4321

ENTRYPOINT ["entrypoint.sh"]
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
