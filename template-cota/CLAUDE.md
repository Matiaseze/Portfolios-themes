@AGENTS.md

## Docker

El entorno de desarrollo corre en Docker con la config compartida en la carpeta padre (`../docker-compose.yml`, servicio `cota`). Los comandos se ejecutan desde la carpeta padre:

```
docker compose up -d cota                  # dev server en http://localhost:4321
docker compose logs -f cota
docker compose exec cota npx astro add ...
docker compose run --rm cota npm run build
```

No ejecutes `npm install` desde Windows: `node_modules` vive en un volumen Linux del contenedor.
