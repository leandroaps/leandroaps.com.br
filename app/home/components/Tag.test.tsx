import { render, screen } from "@testing-library/react";
import { Tag } from "./Tag";

describe("Tag", () => {
  it("renders the label", () => {
    render(<Tag label="React" />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Tag label="TypeScript" className="custom-class" />);
    expect(screen.getByText("TypeScript")).toHaveClass("custom-class");
  });

  it("uses default styling without className", () => {
    render(<Tag label="Vitest" />);
    const tag = screen.getByText("Vitest");
    expect(tag).toHaveClass("rounded-full", "text-xs");
  });
});
