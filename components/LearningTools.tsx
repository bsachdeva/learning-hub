"use client";
import { Accordion } from "@/components/Accordion";
import { Tabs } from "@/components/Tabs";
import { NavBar } from "@/components/NavBar";

export default function LearningTools() {
  return (
    <main>
      <NavBar />
      <div className="container">
        <h1>Learning Tools</h1>
        <div className="grid">
          <div className="card">
            <h2>Curriculum Preview</h2>
            <Accordion items={[
              { id: 1, title: "React Fundamentals", content: "Learn components, hooks, and state." },
              { id: 2, title: "Backend APIs", content: "Build RESTful services with Node and Express." },
              { id: 3, title: "Database Modeling", content: "Persist course enrollments with MongoDB." },
            ]} />
          </div>
          <div className="card">
            <Tabs />
          </div>
        </div>
      </div>
    </main>
  );
}
