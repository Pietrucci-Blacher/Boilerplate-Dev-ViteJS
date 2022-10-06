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
docker-compose exec node npm start
```

### Docker Compose Services Shutdown

```bash
docker-compose down --remove-orphans --volumes --timeout 0
```