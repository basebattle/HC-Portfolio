import type { Metadata } from "next";
import ProjectGrid from "@/components/home/ProjectGrid";

export const metadata: Metadata = {
  title: "All Projects — Dr. Piyush Sharma",
  description:
    "10 healthcare AI projects across Clinical Intelligence, Financial Optimization, and Strategic Governance.",
};

export default function ProjectsPage() {
  return (
    <main style={{ backgroundColor: "#0F1923", minHeight: "100vh" }}>
      <ProjectGrid standalone />
    </main>
  );
}
