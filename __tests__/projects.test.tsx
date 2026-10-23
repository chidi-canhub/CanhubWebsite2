import { render, screen } from "@testing-library/react";

import { WorkSection } from "@/components/home/work-section";
import { getPublishedProjects, projects, type Project } from "@/lib/projects";
import { getNavItems } from "@/lib/site";

const approved: Project = {
  slug: "example-approved",
  title: "Example Approved Project",
  status: "approved",
  summary: "Verified summary supplied for this test.",
  sector: "Example sector",
  capabilities: ["Integration"],
};

const draft: Project = {
  slug: "example-draft",
  title: "Example Draft Project",
  status: "draft",
  summary: "Unapproved summary.",
};

describe("portfolio data", () => {
  it("keeps the intended portfolio entries as unpublished drafts", () => {
    expect(projects.map((project) => project.title)).toEqual([
      "Amazing Grace Biomedical Laboratory",
      "ESH Services",
    ]);
    expect(getPublishedProjects()).toEqual([]);
  });

  it("only publishes approved projects", () => {
    expect(getPublishedProjects([approved, draft])).toEqual([approved]);
  });

  it("renders approved projects and never renders drafts", () => {
    render(<WorkSection projects={getPublishedProjects([approved, draft])} />);

    expect(screen.getByRole("heading", { name: "Example Approved Project" })).toBeInTheDocument();
    expect(screen.getByText("Verified summary supplied for this test.")).toBeInTheDocument();
    expect(screen.queryByText(/example draft project/i)).not.toBeInTheDocument();
  });

  it("renders nothing when there are no approved projects", () => {
    const { container } = render(<WorkSection projects={getPublishedProjects([draft])} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("includes the Our Work navigation item only when approved work exists", () => {
    expect(getNavItems([draft]).some((item) => item.label === "Our Work")).toBe(false);
    expect(getNavItems([approved]).some((item) => item.label === "Our Work")).toBe(true);
  });
});
