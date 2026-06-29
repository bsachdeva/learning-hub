import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  courseId: Number,
  enrolledAt: { type: Date, default: Date.now },
});

export const EnrollmentModel = mongoose.models.Enrollment || mongoose.model("Enrollment", enrollmentSchema);
