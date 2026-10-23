import { render, screen } from "@testing-library/react";

import ServicesOverviewPage from "@/app/services/page";
import { services } from "@/lib/services";

describe("services overview", () => {
  it("renders all six service cards and a contact CTA", () => {
    render(<ServicesOverviewPage />);

    expect(screen.getByRole("heading", { name: /software engineering capabilities/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /discuss your requirements/i }).length).toBeGreaterThan(0);
    services.forEach((service) => {
      expect(screen.getByRole("link", { name: new RegExp(service.title, "i") })).toBeInTheDocument();
    });
  });
});
