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

# Run tests with coverage
npm test -- --coverage

# Start dev server (with hot reload)
npm run dev

# Start production server
npm start
```

## Scripts

| Script   | Description                    |
|----------|--------------------------------|
| `npm run build` | Compile TypeScript to `dist/`  |
| `npm run start` | Run production server          |
| `npm run dev`   | Run with ts-node-dev           |
| `npm test`      | Run Jest tests                 |
| `npm run lint`  | Run ESLint                     |

## Features

### Audit Log

Immutable, tamper-evident audit logging for all sensitive state changes (contracts, payments, users, auth events).

- Every entry is frozen and hash-chained (SHA-256) — any tampering is detectable
- REST API for querying and integrity verification at `/api/v1/audit`
- Per-request logging helper via `res.locals.audit`

See [docs/backend/audit-log.md](docs/backend/audit-log.md) for full documentation.

## API Endpoints

| Method | Path                      | Description                        |
|--------|---------------------------|------------------------------------|
| GET    | `/health`                 | Health check                       |
| GET    | `/api/v1/contracts`       | List contracts                     |
| GET    | `/api/v1/audit`           | Query audit log entries            |
| GET    | `/api/v1/audit/integrity` | Verify hash chain integrity        |
| GET    | `/api/v1/audit/:id`       | Get single audit entry by ID       |

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
