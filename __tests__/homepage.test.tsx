import { fireEvent, render, screen, within } from "@testing-library/react";

import HomePage from "@/app/page";
import { siteConfig } from "@/lib/site";

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

    ["Services", "Industries", "About", "Contact", "Why Canhub", "How We Work"].forEach(
      (label) => {
        expect(screen.getAllByText(new RegExp(label, "i")).length).toBeGreaterThan(0);
      },
    );

    expect(screen.getByRole("link", { name: /let's talk/i })).toBeInTheDocument();
  });

  it("does not show draft, placeholder or illustrative metric content", () => {
    const { container } = render(<HomePage />);
    const text = container.textContent ?? "";

    expect(text).not.toMatch(/draft|placeholder|to be confirmed/i);
    expect(text).not.toMatch(/96%|24\/7|100%/);
    expect(screen.getAllByText(/amazing grace biomedical laboratory|esh services/i).length).toBeGreaterThan(0);
  });

  it("shows the Our Work section and navigation link when approved projects are published", () => {
    const { container } = render(<HomePage />);

    expect(container.querySelector("#work")).not.toBeNull();
    expect(screen.getAllByRole("link", { name: /^our work$/i }).length).toBeGreaterThan(0);
  });

  it("routes key actions to the dedicated contact page instead of stale in-page anchors", () => {
    render(<HomePage />);

    expect(screen.getByRole("link", { name: /discuss your project/i })).toHaveAttribute("href", "/contact");
    expect(screen.getAllByRole("link", { name: /start a conversation/i })[0]).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: /let's talk/i })).toHaveAttribute("href", "/contact");
    expect(screen.getAllByRole("link", { name: /contact/i }).length).toBeGreaterThan(0);
  });

  it("uses the confirmed contact email from central config for the CTA and footer", () => {
    expect(siteConfig.contact.email).toBe("contact@canhubsoftware.com");

    const { container } = render(<HomePage />);

    const contactRouteLinks = Array.from(
      container.querySelectorAll<HTMLAnchorElement>('a[href="/contact"], a[href="mailto:contact@canhubsoftware.com"]'),
    );

    expect(contactRouteLinks.length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: "contact@canhubsoftware.com" })).toHaveAttribute(
      "href",
      "mailto:contact@canhubsoftware.com",
    );
  });

  it("only links to the configured contact address and no provisional addresses", () => {
    const { container } = render(<HomePage />);
    const mailtoLinks = Array.from(container.querySelectorAll<HTMLAnchorElement>('a[href^="mailto:"]'));

    expect(mailtoLinks.length).toBeGreaterThan(0);
    mailtoLinks.forEach((link) => {
      expect(link.getAttribute("href")).toMatch(/^mailto:contact@canhubsoftware\.com(\?|$)/);
    });
    expect(container.textContent).not.toMatch(/hello@canhub\.com/i);
  });

  it("opens, labels and closes the mobile navigation", () => {
    render(<HomePage />);

    const toggle = screen.getByRole("button", { name: /open navigation menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("navigation", { name: /mobile navigation/i })).not.toBeInTheDocument();

    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: /close navigation menu/i })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    const mobileNav = screen.getByRole("navigation", { name: /mobile navigation/i });
    expect(within(mobileNav).getByRole("link", { name: "Industries" })).toHaveAttribute(
      "href",
      "/industries",
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("navigation", { name: /mobile navigation/i })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /open navigation menu/i })).toHaveFocus();
  });
});
