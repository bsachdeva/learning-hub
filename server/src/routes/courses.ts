import { Router } from "express";
import { CourseModel } from "../models/Course";

const router = Router();
const seed = [
  { id: 1, name: "React UI Patterns", description: "Build reusable interfaces using React and hooks.", level: "Beginner", duration: "4 weeks" },
  { id: 2, name: "Node & Express APIs", description: "Create scalable backend services with Express.", level: "Intermediate", duration: "3 weeks" },
  { id: 3, name: "MongoDB Data Modeling", description: "Design and persist application data with MongoDB.", level: "Beginner", duration: "2 weeks" },
  { id: 4, name: "Testing with Vitest", description: "Write reliable unit and integration tests for React apps.", level: "Intermediate", duration: "2 weeks" },
];

router.get("/", async (_req, res) => {
  const existing = await CourseModel.find().lean();
  if (existing.length === 0) {
    await CourseModel.insertMany(seed);
    return res.json({ courses: seed });
  }
  res.json({ courses: existing });
});

export default router;
