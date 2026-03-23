import express, { Request, Response } from 'express';
import { auditMiddleware } from './audit/middleware';
import { auditRouter } from './audit/router';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Attach per-request audit helper to res.locals
app.use(auditMiddleware);

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'talenttrust-backend' });
});

app.get('/api/v1/contracts', (_req: Request, res: Response) => {
  res.json({ contracts: [] });
});

// Audit log query endpoints (protect with auth middleware in production)
app.use('/api/v1/audit', auditRouter);

app.listen(PORT, () => {
  console.log(`TalentTrust API listening on http://localhost:${PORT}`);
});

export { app };
