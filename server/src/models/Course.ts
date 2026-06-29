import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  level: String,
  duration: String,
});

export const CourseModel = mongoose.models.Course || mongoose.model("Course", courseSchema);
