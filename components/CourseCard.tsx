"use client";
import type { Course } from "@/types";

export function CourseCard({ course, onEnroll }: { course: Course; onEnroll: () => void }) {
  return (
    <article className="card">
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <p>Level: {course.level}</p>
      <p>Duration: {course.duration}</p>
      <button className="button" onClick={onEnroll}>Enroll</button>
    </article>
  );
}
