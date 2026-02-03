import express from "express";
import journeyRoutes from "./routes/journey.route";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use(journeyRoutes);

app.listen(PORT, () => {
  console.log(`Rodando em http://localhost:${PORT}`);
});
