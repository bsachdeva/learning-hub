"use client";
import { useState } from "react";

const allTopics = ["React", "Node", "MongoDB", "CSS", "HTML", "JavaScript", "TypeScript", "Testing", "Design"];

export function FilterList({ onFilter }: { onFilter: (query: string) => void }) {
  const [value, setValue] = useState("");
  return (
    <div className="card">
      <h2>Find a course</h2>
      <input className="input" value={value} onChange={(event) => { setValue(event.target.value); onFilter(event.target.value); }} placeholder="Search topics" />
      <ul>{allTopics.filter((topic) => topic.toLowerCase().includes(value.toLowerCase())).map((topic) => <li key={topic}>{topic}</li>)}</ul>
    </div>
  );
}
