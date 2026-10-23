import { render, screen } from "@testing-library/react";

import AboutPage from "@/app/about/page";
import IndustryDetailPage from "@/app/industries/[slug]/page";
import IndustriesOverviewPage from "@/app/industries/page";
import WorkPage from "@/app/work/page";
import { caseStudies, getPublishedCaseStudies } from "@/lib/case-studies";
import { industries } from "@/lib/industries";
import { siteConfig } from "@/lib/site";

describe("milestone 4 pages", () => {
  it("renders the about page", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { name: /about canhub/i })).toBeInTheDocument();
    expect(screen.getByText(/software engineering and technology consultancy/i)).toBeInTheDocument();
  });

  it("renders the industries overview and all four sectors", () => {
    render(<IndustriesOverviewPage />);

    industries.forEach((industry) => {
      expect(screen.getByRole("link", { name: new RegExp(industry.title, "i") })).toBeInTheDocument();
    });
  });

  it("renders the financial services industry detail page", () => {
    render(<IndustryDetailPage params={{ slug: "financial-services" }} />);

    expect(screen.getByRole("heading", { name: /financial services/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /banking & nCino solutions/i })).toBeInTheDocument();
  });

  it("renders the work page with the approved public case studies", () => {
    render(<WorkPage />);

    expect(screen.getByRole("heading", { name: /our work/i })).toBeInTheDocument();
    expect(getPublishedCaseStudies(caseStudies)).toHaveLength(2);
    expect(screen.getAllByText(/amazing grace biomedical laboratory/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/esh services/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/discuss your requirements/i)).toBeInTheDocument();
  });

  it("uses the central contact email", () => {
    expect(siteConfig.contact.email).toBe("contact@canhubsoftware.com");
  });
});
