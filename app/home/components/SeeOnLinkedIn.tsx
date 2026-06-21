import { LinkedInButton } from "./LinkedInButton.tsx.js";

export function SeeOnLinkedIn({ url }: { url: string }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <LinkedInButton url={url} />
    </div>
  );
}
