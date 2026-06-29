import dynamic from "next/dynamic";

const LearningTools = dynamic(() => import("@/components/LearningTools"), { ssr: false });

export default function LearnRoute() {
  return <LearningTools />;
}
