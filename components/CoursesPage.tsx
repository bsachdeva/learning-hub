"use client";
import { useEffect, useMemo, useState } from "react";
import { NavBar } from "@/components/NavBar";
import { CourseCard } from "@/components/CourseCard";
import { FilterList } from "@/components/FilterList";
import type { Course } from "@/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${apiUrl}/api/courses`)
      .then((res) => res.json())
      .then((data) => setCourses(data.courses || []));
  }, []);

  const filtered = useMemo(() => courses.filter((course) => course.name.toLowerCase().includes(query.toLowerCase())), [courses, query]);

  const enroll = async (courseId: number) => {
    const response = await fetch(`${apiUrl}/api/enrollments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId }),
    });
    if (response.ok) {
      setMessage("Enrolled successfully.");
    } else {
      setMessage("Enrollment failed.");
    }
  };

  return (
    <main>
      <NavBar />
      <div className="container">
        <h1>Courses</h1>
        <FilterList onFilter={setQuery} />
        <div className="grid" style={{ marginTop: "1.5rem" }}>
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} onEnroll={() => enroll(course.id)} />
          ))}
        </div>
        {message ? <p className="notice">{message}</p> : null}
      </div>
    </main>
  );
}
