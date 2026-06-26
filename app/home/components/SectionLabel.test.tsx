import { render, screen } from "@testing-library/react";
import { SectionLabel } from "./SectionLabel";

describe("SectionLabel", () => {
  it("renders the section number and label", () => {
    render(<SectionLabel n="01" label="About" />);
    expect(screen.getByText("01 — About")).toBeInTheDocument();
  });

  it("renders with different values", () => {
    render(<SectionLabel n="05" label="Soft Skills" />);
    expect(screen.getByText("05 — Soft Skills")).toBeInTheDocument();
  });
});
