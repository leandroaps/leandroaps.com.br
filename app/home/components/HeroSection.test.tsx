import { render, screen } from "@testing-library/react";
import type { UIStrings } from "@/home/types";
import { HeroSection } from "./HeroSection";

const hero: UIStrings["hero"] = {
  location: "Campinas · São Paulo · Brazil",
  subtitle: [
    "Senior Front-End Engineer",
    "React & TypeScript · Technical Lead",
    "Agile · 20+ Years of Experience",
  ],
};

describe("HeroSection", () => {
  it("renders the full name heading", () => {
    render(<HeroSection hero={hero} />);
    expect(
      screen.getByRole("heading", { name: "Leandro Aparecido de Siqueira" })
    ).toBeInTheDocument();
  });

  it("renders the location text", () => {
    render(<HeroSection hero={hero} />);
    expect(screen.getByText("Campinas · São Paulo · Brazil")).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<HeroSection hero={hero} />);
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /medium/i })).toBeInTheDocument();
  });

  it("renders profile photo with correct alt text", () => {
    render(<HeroSection hero={hero} />);
    expect(screen.getByAltText("Leandro Aparecido de Siqueira")).toBeInTheDocument();
  });

  it("shows initials fallback when photo fails to load", async () => {
    render(<HeroSection hero={hero} />);
    const img = screen.getByAltText("Leandro Aparecido de Siqueira");

    // Simulate image load error
    img.dispatchEvent(new Event("error"));

    expect(await screen.findByText("LAS")).toBeInTheDocument();
  });
});
