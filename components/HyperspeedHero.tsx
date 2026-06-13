"use client";

import Link from "next/link";
import { useEffect } from "react";

// Minimal typings for the global engine exposed by /assets/hyperspeed.js
declare global {
  interface Window {
    THREE?: unknown;
    POSTPROCESSING?: unknown;
    postprocessing?: unknown;
    EvoHyperspeed?: {
      mount: () => void;
      current: { palette: string; distortion: string };
      setPalette: (k: string) => void;
      setDistortion: (k: string) => void;
    };
  }
}

const SCRIPTS = {
  // three 0.137 is the last line that still ships the `linearToRelativeLuminance`
  // GLSL helper that postprocessing 6.25 expects (three renamed it to
  // `luminance` in r139). Pinning here keeps the engine's postprocessing API
  // intact and removes the SMAA/Bloom fragment-shader compile error.
  three: "https://cdn.jsdelivr.net/npm/three@0.137.0/build/three.min.js",
  pp: "https://cdn.jsdelivr.net/npm/postprocessing@6.25.0/build/postprocessing.js",
  engine: "/assets/hyperspeed.js",
};

// Load a script once; resolve when ready (or immediately if already present).
function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[data-hs="${src}"]`
    );
    if (existing) {
      if (existing.dataset.loaded === "1") resolve();
      else existing.addEventListener("load", () => resolve());
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = false; // preserve execution order
    s.dataset.hs = src;
    s.addEventListener("load", () => {
      s.dataset.loaded = "1";
      resolve();
    });
    s.addEventListener("error", () => reject(new Error(`Failed: ${src}`)));
    document.body.appendChild(s);
  });
}

export default function HyperspeedHero() {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        if (!window.THREE) await loadScript(SCRIPTS.three);
        if (!window.POSTPROCESSING && !window.postprocessing)
          await loadScript(SCRIPTS.pp);
        if (!window.EvoHyperspeed) await loadScript(SCRIPTS.engine);
        if (cancelled) return;

        const HS = window.EvoHyperspeed;
        if (HS) {
          // Match the approved design default and (re)mount on this #lights.
          HS.current.palette = "ice";
          HS.current.distortion = "LongRaceDistortion";
          HS.mount();
        }
      } catch (err) {
        // The hero degrades gracefully to a black background if WebGL fails.
        console.warn("[hyperspeed] could not initialise:", err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="hero-warp" data-screen-label="01 Home — Hero">
      <div id="lights" />
      <div className="warp-veil" />
      <div className="warp-grain" />

      <div className="warp-inner">
        <div className="eyebrow warp-eyebrow">— Where humans evolve through movement —</div>
        <h1 className="display-hero">
          Engineered<br />
          <span className="outline-text">To Evolve.</span>
        </h1>
        <p className="warp-lede">
          Five disciplines under one roof in Rohtak. Strength, climbing, calisthenics,
          dance, and the Recovery Room — 10,000 square feet, powered by Technogym.
        </p>
        <div className="warp-cta">
          <Link href="/contact" className="btn btn-solid">Begin Application</Link>
          <Link href="/services" className="btn btn-ghost">Explore Disciplines</Link>
        </div>
      </div>

      <div className="warp-footnote">
        <span className="meta" style={{ color: "rgba(255,255,255,0.45)" }}>
          By Appointment · Rohtak
        </span>
        <span className="warp-hint">Click &amp; hold to warp</span>
      </div>
    </section>
  );
}
