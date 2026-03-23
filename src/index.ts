import express, { Request, Response } from 'express';
import { SorobanRpcService } from './services/soroban';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

export const sorobanRpcService = new SorobanRpcService();

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'talenttrust-backend' });
});

app.get('/api/v1/contracts', (_req: Request, res: Response) => {
  res.json({ contracts: [] });
});

app.listen(PORT, () => {
  console.log(`TalentTrust API listening on http://localhost:${PORT}`);
});
