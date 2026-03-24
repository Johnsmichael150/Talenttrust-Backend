# TalentTrust Backend

Express API for the TalentTrust decentralized freelancer escrow protocol. Handles contract metadata, reputation, and integration with Stellar/Soroban.

## Prerequisites

- Node.js 18+
- npm or yarn

## Setup

```bash
# Clone and enter the repo
git clone <your-repo-url>
cd talenttrust-backend

# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test

# Start dev server (with hot reload)
npm run dev

# Start production server
npm start
```

## Scripts

| Script          | Description                   |
| --------------- | ----------------------------- |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run start` | Run production server         |
| `npm run dev`   | Run with ts-node-dev          |
| `npm test`      | Run Jest tests                |
| `npm run lint`  | Run ESLint                    |

## Health Endpoint

`GET /health` returns structured diagnostics for the service and its dependencies.

| Field           | Description                                  |
| --------------- | -------------------------------------------- |
| `status`        | `"ok"` (HTTP 200) or `"degraded"` (HTTP 503) |
| `service`       | Always `"talenttrust-backend"`               |
| `timestamp`     | ISO-8601 time of the check                   |
| `uptimeSeconds` | Process uptime in seconds                    |
| `probes`        | Array of dependency probe results            |

See [docs/backend/health.md](docs/backend/health.md) for full documentation.

### Environment Variables

| Variable            | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `STELLAR_RPC_URL`   | Soroban/Horizon RPC base URL to probe                 |
| `REQUIRED_ENV_VARS` | Comma-separated list of env var names to assert exist |

````

---

## 6. Install Dependencies

The router tests use `supertest`. Install it:

```bash
npm install --save-dev supertest @types/supertest


## Contributing

1. Fork the repo and create a branch from `main`.
2. Install deps, run tests and build: `npm install && npm test && npm run build`.
3. Open a pull request. CI runs build (and tests when present) on push/PR to `main`.

## CI/CD

GitHub Actions runs on push and pull requests to `main`:

- Install dependencies
- Build the project (`npm run build`)

Keep the build passing before merging.

## License

MIT
````
