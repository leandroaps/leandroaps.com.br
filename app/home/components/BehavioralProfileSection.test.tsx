import { render, screen } from "@testing-library/react";
import type { BehavioralProfile } from "@/home/types";
import { BehavioralProfileSection } from "./BehavioralProfileSection";

const behavioralProfile: BehavioralProfile = {
  signals: ["Naturally curious", "Surfaces issues early", "Async-first communicator"],
  topStrengths: [
    { rank: 1, title: "Client Orientation", description: "Stays close to the client." },
    { rank: 2, title: "Growth Mindset", description: "Looks for what to learn next." },
    { rank: 3, title: "Proactiveness", description: "Surfaces issues and moves work forward." },
  ],
  traits: [
    { title: "Reliability", description: "Delivers on what they say." },
    { title: "Communication", description: "Writes clearly and keeps the team aligned." },
    { title: "Ownership", description: "Treats the work as theirs." },
  ],
};

describe("BehavioralProfileSection", () => {
  it("renders the section heading", () => {
    render(<BehavioralProfileSection behavioralProfile={behavioralProfile} />);
    expect(screen.getByRole("heading", { name: "Behavioral Profile" })).toBeInTheDocument();
  });

  it("renders all signals", () => {
    render(<BehavioralProfileSection behavioralProfile={behavioralProfile} />);
    expect(screen.getByText("Naturally curious")).toBeInTheDocument();
    expect(screen.getByText("Surfaces issues early")).toBeInTheDocument();
    expect(screen.getByText("Async-first communicator")).toBeInTheDocument();
  });

  it("renders top strengths with rank numbers", () => {
    render(<BehavioralProfileSection behavioralProfile={behavioralProfile} />);
    expect(screen.getByText("#1")).toBeInTheDocument();
    expect(screen.getByText("#2")).toBeInTheDocument();
    expect(screen.getByText("#3")).toBeInTheDocument();
    expect(screen.getByText("Client Orientation")).toBeInTheDocument();
    expect(screen.getByText("Growth Mindset")).toBeInTheDocument();
    expect(screen.getByText("Proactiveness")).toBeInTheDocument();
  });

  it("renders top strength descriptions", () => {
    render(<BehavioralProfileSection behavioralProfile={behavioralProfile} />);
    expect(screen.getByText("Stays close to the client.")).toBeInTheDocument();
  });

  it("renders all traits", () => {
    render(<BehavioralProfileSection behavioralProfile={behavioralProfile} />);
    expect(screen.getByText("Reliability")).toBeInTheDocument();
    expect(screen.getByText("Communication")).toBeInTheDocument();
    expect(screen.getByText("Ownership")).toBeInTheDocument();
  });

  it("renders trait descriptions", () => {
    render(<BehavioralProfileSection behavioralProfile={behavioralProfile} />);
    expect(screen.getByText("Delivers on what they say.")).toBeInTheDocument();
  });
});
