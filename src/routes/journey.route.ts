import { Router, Request, Response } from "express";
import readXlsx from "../modules/readsXLSX";
import journeyService from "../services/journey.service";
import { IJourneyDataBase } from "../interfaces/IJourneys-interface";

const router = Router();

router.get("/journeys", (_req: Request, res: Response) => {
  const data = readXlsx("data/Nemu.xlsx");
  const journeys = journeyService(data as IJourneyDataBase[]);
  res.json(journeys);
});

export default router;
