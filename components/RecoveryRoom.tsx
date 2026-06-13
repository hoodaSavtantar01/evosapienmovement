"use client";

import { useState } from "react";

type Target = "steam" | "cold";

export default function RecoveryRoom() {
  const [active, setActive] = useState<Target>("steam");

  return (
    <article
      className="reveal"
      style={{ padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
      onMouseEnter={() => setActive("cold")}
      onMouseLeave={() => setActive("steam")}
    >
      <div className="row-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }}>
        <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/photos/steam-room.jpg"
            alt="Steam room"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.95)", transition: "opacity 0.6s ease", opacity: active === "steam" ? 1 : 0 }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/photos/cold-plunge.jpg"
            alt="Cold plunge"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.85)", transition: "opacity 0.6s ease", opacity: active === "cold" ? 1 : 0 }}
          />
        </div>

        <div>
          <span className="eyebrow">Discipline III</span>
          <h2 className="display-h2" style={{ margin: "24px 0 20px" }}>Recovery Room.</h2>
          <p className="body" style={{ margin: "0 0 24px", maxWidth: 480, opacity: 0.6 }}>
            Steam Room &amp; Cold Plunge — two protocols, one room. Hover or select to explore each.
          </p>

          <div style={{ display: "flex", border: "1px solid rgba(255,255,255,0.12)", width: "fit-content", marginBottom: 28 }}>
            <button
              className={`rec-pill${active === "steam" ? " active" : ""}`}
              onClick={() => setActive("steam")}
              type="button"
            >
              Steam Room
            </button>
            <button
              className={`rec-pill${active === "cold" ? " active" : ""}`}
              onClick={() => setActive("cold")}
              type="button"
            >
              Cold Plunge
            </button>
          </div>

          <div style={{ position: "relative", minHeight: 185 }}>
            <div
              style={{
                transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease",
                transform: active === "steam" ? "translateY(0)" : "translateY(-40px)",
                opacity: active === "steam" ? 1 : 0,
                position: active === "steam" ? "relative" : "absolute",
                inset: active === "steam" ? undefined : 0,
                pointerEvents: active === "steam" ? "auto" : "none",
              }}
            >
              <p className="body-lg" style={{ marginBottom: 18 }}>
                A clinical-grade steam suite for post-training thermotherapy. Open circulation,
                deep recovery, and the kind of stillness that returns more than it costs.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px", display: "flex", flexDirection: "column", gap: 10 }}>
                <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={{ width: 6, height: 1, background: "rgba(255,255,255,0.6)" }} />Eucalyptus &amp; mint infused cycles</li>
                <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={{ width: 6, height: 1, background: "rgba(255,255,255,0.6)" }} />15 — 20 minute protocols · Open Access</li>
              </ul>
            </div>
            <div
              style={{
                transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease",
                transform: active === "cold" ? "translateY(0)" : "translateY(40px)",
                opacity: active === "cold" ? 1 : 0,
                position: active === "cold" ? "relative" : "absolute",
                inset: active === "cold" ? undefined : 0,
                pointerEvents: active === "cold" ? "auto" : "none",
              }}
            >
              <p className="body-lg" style={{ marginBottom: 18 }}>
                Cold plunge held between 1 — 7°C. The fastest path to nervous-system reset — used
                in contrast with the steam room or as a standalone protocol.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px", display: "flex", flexDirection: "column", gap: 10 }}>
                <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={{ width: 6, height: 1, background: "rgba(255,255,255,0.6)" }} />Maintained between 1 — 7°C</li>
                <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={{ width: 6, height: 1, background: "rgba(255,255,255,0.6)" }} />Included in all memberships as part of Recovery Room</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
