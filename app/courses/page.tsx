import dynamic from "next/dynamic";

const CoursesPage = dynamic(() => import("@/components/CoursesPage"), { ssr: false });

export default function CoursesRoute() {
  return <CoursesPage />;
}
