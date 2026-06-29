import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning Hub",
  description: "A Next.js MERN course discovery app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
