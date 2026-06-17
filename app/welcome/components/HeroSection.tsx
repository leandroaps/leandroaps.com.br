import { useState } from "react";
import { ChevronDownIcon, GitHubIcon, MediumIcon } from "../icons";

export function HeroSection() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen pt-20 px-6 bg-cover bg-center bg-no-repeat text-center"
      style={{
        backgroundImage: "url('/damien-dufour-BUm3ke-GfPQ-unsplash.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#222222]/60" />

      <div className="relative z-10 mb-8 w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-lg shrink-0">
        {photoError ? (
          <div className="w-full h-full flex items-center justify-center bg-[#222222] text-white text-3xl font-semibold select-none">
            LAS
          </div>
        ) : (
          <img
            src="/photo.jpg"
            alt="Leandro Aparecido de Siqueira"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
            onError={() => setPhotoError(true)}
          />
        )}
      </div>

      <p className="relative z-10 text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-4">
        Campinas · São Paulo · Brazil
      </p>

      <h1 className="relative z-10 text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
        Leandro Aparecido de Siqueira
      </h1>

      <div
        className="hero-subtitle relative z-10 text-left mb-10 max-w-sm"
        style={{ borderLeftColor: "rgba(255,255,255,0.4)" }}
      >
        <p className="text-lg text-white/70 leading-relaxed">
          Senior Front-End Engineer
          <br />
          React &amp; TypeScript · Technical Lead
          <br />
          Agile · 20+ Years of Experience
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://github.com/leandroaps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#222222] text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
        >
          <GitHubIcon /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/leandroaps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://medium.com/@leandroaps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white/70 text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
        >
          <MediumIcon /> Medium
        </a>
      </div>

      <div className="scroll-caret absolute bottom-10 left-1/2 z-10 text-white/60">
        <ChevronDownIcon />
      </div>
    </section>
  );
}
