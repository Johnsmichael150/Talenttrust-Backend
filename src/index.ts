import express, { Request, Response } from "express";
import { buildHealthRouter } from "./health";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/health", buildHealthRouter());

app.get("/api/v1/contracts", (_req: Request, res: Response) => {
  res.json({ contracts: [] });
});

app.listen(PORT, () => {
  console.log(`TalentTrust API listening on http://localhost:${PORT}`);
});
