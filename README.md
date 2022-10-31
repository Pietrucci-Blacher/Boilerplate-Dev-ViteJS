## Requirements

- Docker
- Docker Compose

## Usage

### Docker Compose Services Startup

```bash
docker-compose up --detach
```

### Node Packages Installation

```bash
docker-compose exec node npm install
```

### Development Server Startup

```bash
docker-compose exec node npm run dev
```

### Production Build Startup

```bash
docker-compose exec node npm run build
```

### Visualize Bundled site /Ready for Production

```bash
docker-compose exec node npm run preview 
```

### Docker Compose Services Shutdown

```bash
docker-compose down --remove-orphans --volumes --timeout 0
```
