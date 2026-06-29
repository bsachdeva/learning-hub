"use client";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="navbar">
      <div>Learning Hub</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/learn">Learn</Link>
      </div>
    </nav>
  );
}
