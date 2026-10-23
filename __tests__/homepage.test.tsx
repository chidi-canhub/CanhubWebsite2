import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("homepage", () => {
  it("renders the core brand message and CTA", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /strategic digital experiences/i,
      }),
    ).toBeInTheDocument();

    const ctaLinks = screen.getAllByRole("link", {
      name: /book a discovery call/i,
    });

    expect(ctaLinks.length).toBeGreaterThan(0);
    expect(ctaLinks[0]).toBeInTheDocument();
  });
});
