"use client";
import { useState } from "react";

export function Accordion({ items }: { items: { id: number; title: string; content: string }[] }) {
  const [activeId, setActiveId] = useState<number | null>(null);
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="card" style={{ marginBottom: "1rem" }}>
          <button className="button secondary" style={{ width: "100%", textAlign: "left" }} onClick={() => setActiveId(activeId === item.id ? null : item.id)}>
            {item.title}
          </button>
          {activeId === item.id ? <p style={{ marginTop: "1rem" }}>{item.content}</p> : null}
        </div>
      ))}
    </div>
  );
}
