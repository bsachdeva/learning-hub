import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connect } from "../lib/mongodb";
import coursesRouter from "./routes/courses";
import enrollmentsRouter from "./routes/enrollments";

dotenv.config();
const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());
app.use("/api/courses", coursesRouter);
app.use("/api/enrollments", enrollmentsRouter);
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

connect()
  .then(() => app.listen(port, () => console.log(`Learning Hub API running on http://localhost:${port}`)))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
