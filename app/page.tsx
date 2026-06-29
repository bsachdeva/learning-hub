import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div>Learning Hub</div>
        <div>
          <Link href="/courses">Courses</Link>
          <Link href="/learn">Learn</Link>
        </div>
      </nav>
      <div className="container">
        <section className="card">
          <h1>Learning Hub</h1>
          <p>Browse interactive courses and enroll in curated learning paths.</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link href="/courses" className="button">View Courses</Link>
            <Link href="/learn" className="button secondary">Explore Tools</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
