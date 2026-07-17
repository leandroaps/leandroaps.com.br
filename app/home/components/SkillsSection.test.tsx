import { render, screen } from "@testing-library/react";
import type { SectionHeading, SkillGroup } from "@/home/types";
import { SkillsSection } from "./SkillsSection";

const skills: SkillGroup[] = [
  { category: "Frontend", items: ["React", "TypeScript", "CSS3"] },
  { category: "Tools", items: ["Git", "Docker"] },
];

const heading: SectionHeading = { label: "Expertise", title: "Skills" };

describe("SkillsSection", () => {
  it("renders the section heading", () => {
    render(<SkillsSection skills={skills} heading={heading} seeOnLinkedIn="See on LinkedIn →" />);
    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
  });

  it("renders all skill categories", () => {
    render(<SkillsSection skills={skills} heading={heading} seeOnLinkedIn="See on LinkedIn →" />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Tools")).toBeInTheDocument();
  });

  it("renders all skill items", () => {
    render(<SkillsSection skills={skills} heading={heading} seeOnLinkedIn="See on LinkedIn →" />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("CSS3")).toBeInTheDocument();
    expect(screen.getByText("Git")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
  });

  it("renders the section label", () => {
    render(<SkillsSection skills={skills} heading={heading} seeOnLinkedIn="See on LinkedIn →" />);
    expect(screen.getByText("04 — Expertise")).toBeInTheDocument();
  });

  it("renders an empty grid when no skills provided", () => {
    render(<SkillsSection skills={[]} heading={heading} seeOnLinkedIn="See on LinkedIn →" />);
    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument();
    expect(screen.queryByText("Frontend")).not.toBeInTheDocument();
  });
});
