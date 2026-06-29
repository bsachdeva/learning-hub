"use client";
import { useState } from "react";

export function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabData = [
    { title: "Overview", content: "Track your learning progress in one place." },
    { title: "Path", content: "Follow a guided path from beginner to advanced." },
    { title: "Support", content: "Access mentors, community sessions, and FAQs." },
  ];
  return (
    <div>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        {tabData.map((tab, index) => (
          <button key={tab.title} className="button secondary" onClick={() => setActiveTab(index)}>{tab.title}</button>
        ))}
      </div>
      <p>{tabData[activeTab].content}</p>
    </div>
  );
}
