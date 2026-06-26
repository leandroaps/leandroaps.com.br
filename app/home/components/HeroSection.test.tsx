import { render, screen } from "@testing-library/react";
import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  it("renders the full name heading", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("heading", { name: "Leandro Aparecido de Siqueira" })
    ).toBeInTheDocument();
  });

  it("renders the location text", () => {
    render(<HeroSection />);
    expect(screen.getByText("Campinas · São Paulo · Brazil")).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<HeroSection />);
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /medium/i })).toBeInTheDocument();
  });

  it("renders profile photo with correct alt text", () => {
    render(<HeroSection />);
    expect(screen.getByAltText("Leandro Aparecido de Siqueira")).toBeInTheDocument();
  });

  it("shows initials fallback when photo fails to load", async () => {
    render(<HeroSection />);
    const img = screen.getByAltText("Leandro Aparecido de Siqueira");

    // Simulate image load error
    img.dispatchEvent(new Event("error"));

    expect(await screen.findByText("LAS")).toBeInTheDocument();
  });
});
