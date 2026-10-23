import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("homepage", () => {
  it("renders the core hero content and primary CTA", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /software engineered for what\'s next/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /discuss your project/i,
      }),
    ).toBeInTheDocument();
  });

  it("includes the full service and industry overview", () => {
    render(<HomePage />);

    [
      "Web & Application Development",
      "Salesforce & CRM Engineering",
      "Banking & nCino Solutions",
      "Enterprise Integrations & APIs",
      "Cloud & Data Engineering",
      "Technical Consulting & Support",
    ].forEach((service) => {
      expect(
        screen.getByRole("heading", {
          name: new RegExp(service, "i"),
        }),
      ).toBeInTheDocument();
    });

    [
      "Financial Services",
      "Insurance",
      "Healthcare & Life Sciences",
      "Growing Businesses",
    ].forEach((industry) => {
      expect(
        screen.getByRole("heading", {
          name: new RegExp(industry, "i"),
        }),
      ).toBeInTheDocument();
    });
  });

  it("renders the key sections and navigation labels", () => {
    render(<HomePage />);

    [
      "Services",
      "Industries",
      "Our Work",
      "About",
      "Contact",
      "Why Canhub",
      "How We Work",
    ].forEach((label) => {
      expect(
        screen.getAllByText(new RegExp(label, "i")).length,
      ).toBeGreaterThan(0);
    });

    expect(
      screen.getByRole("link", {
        name: /let's talk/i,
      }),
    ).toBeInTheDocument();
  });
});
