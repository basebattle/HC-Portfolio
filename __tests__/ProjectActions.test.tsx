import { render, screen } from "@testing-library/react";
import ProjectActions from "@/components/projects/ProjectActions";

describe("ProjectActions Component", () => {
    it("renders all three buttons when metadata is fully populated", () => {
        const project = {
            idx: "01",
            name: "Test Project",
            slug: "test-project",
            category: "Clinical Intelligence",
            status: "Deployed",
            phase: 1,
            oneLiner: "A test project",
            metric: "Test Metric",
            metricType: "financial",
            problem: "Test Problem",
            evolution: ["Before", "After"],
            stack: ["React"],
            kpis: ["KPI 1"],
            veteran: "Veteran text",
            github: "test/repo",
            live: "https://test.com",
            simulation: "https://test.com/sim",
        } as any;

        render(<ProjectActions project={project} />);
        expect(screen.getByText(/Code/i)).toBeInTheDocument();
        expect(screen.getByText(/Live Demo/i)).toBeInTheDocument();
        expect(screen.getByText(/Simulation/i)).toBeInTheDocument();
    });

    it("disables the Live Demo button when URL is missing", () => {
        const project = {
            github: "test/repo",
            live: null,
            simulation: "https://test.com/sim",
        } as any;

        render(<ProjectActions project={project} />);
        const liveDemoParent = screen.getByText(/Coming Soon/i).closest("span");
        expect(liveDemoParent).toHaveClass("cursor-not-allowed");
    });

    it("hides the Simulation button when URL is missing", () => {
        const project = {
            github: "test/repo",
            live: "https://test.com",
            // simulationUrl is omitted
        } as any;

        render(<ProjectActions project={project} />);
        expect(screen.queryByText(/Simulation/i)).not.toBeInTheDocument();
    });
});
