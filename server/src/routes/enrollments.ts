import { Router } from "express";
import { EnrollmentModel } from "../models/Enrollment";

const router = Router();

router.post("/", async (req, res) => {
  const { courseId } = req.body;
  if (!courseId) return res.status(400).json({ error: "courseId is required" });
  await EnrollmentModel.create({ courseId });
  res.status(201).json({ status: "enrolled" });
});

export default router;
