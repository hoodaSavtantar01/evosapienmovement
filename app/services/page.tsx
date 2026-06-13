import type { Metadata } from "next";
import RecoveryRoom from "@/components/RecoveryRoom";

export const metadata: Metadata = {
  title: "EVOSAPIEN MOVEMENT — Services",
  description: "Five disciplines under one roof: strength, climbing, calisthenics, dance, and the Recovery Room.",
};

const bullet = { width: 6, height: 1, background: "rgba(255,255,255,0.6)" } as const;

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section style={{ padding: "80px 0 64px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            <span style={{ display: "inline-block", width: 48, height: 1, background: "rgba(255,255,255,0.4)" }} />
            <span className="eyebrow">Services · 02</span>
          </div>
          <h1 className="display-hero reveal" style={{ maxWidth: 1300 }}>The<br /><span className="outline-text">Disciplines.</span></h1>
          <p className="body-lg reveal" style={{ maxWidth: 640, marginTop: 48 }}>
            Five disciplines under one roof. Strength, climbing, calisthenics, dance, and the
            Recovery Room — the full evolutionary cycle, in 10,000 square feet of dedicated
            movement space.
          </p>
        </div>
      </section>

      {/* Featured rows */}
      <section className="section">
        <div className="container">
          {/* Discipline I — Strength */}
          <article className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.08)", alignItems: "start" }}>
            <div className="row-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }}>
              <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/photos/strength-floor.jpg" alt="Strength floor" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.9)" }} />
              </div>
              <div>
                <span className="eyebrow">Discipline I</span>
                <h2 className="display-h2" style={{ margin: "24px 0 24px" }}>Strength Floor.</h2>
                <p className="body-lg" style={{ marginBottom: 32 }}>
                  A fully equipped, professional strength floor — Olympic platforms, racks,
                  dumbbells to 50 kg, plates, kettlebells, and a full suite of Technogym
                  conditioning machines, the global gold standard in performance equipment.
                  Every member trains alongside certified personal coaches.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 14 }}>
                  <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={bullet} />Certified personal &amp; professional trainers on the floor</li>
                  <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={bullet} />Every machine is Technogym — the world&apos;s premier fitness equipment</li>
                  <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={bullet} />Programs written for hypertrophy, strength, or sport</li>
                </ul>
                <div style={{ display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
                  <span className="powered-by lg">
                    <span className="label">Powered by</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/technogym-badge.png" alt="Technogym" />
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Discipline II — Bouldering */}
          <article className="reveal" style={{ padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="row-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }}>
              <div>
                <span className="eyebrow">Discipline II — Rohtak&apos;s First</span>
                <h2 className="display-h2" style={{ margin: "24px 0 24px" }}>Bouldering<br />Wall.</h2>
                <p className="body-lg" style={{ marginBottom: 32 }}>
                  Rohtak&apos;s first dedicated bouldering wall. Climb it. Problem-solve it. Conquer
                  it. Routes regraded fortnightly so the wall never goes stale, with a full-body
                  strength, grip, and problem-solving discipline available to every member.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 14 }}>
                  <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={bullet} />Rohtak&apos;s first bouldering wall</li>
                  <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={bullet} />Routes regraded every fortnight</li>
                  <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={bullet} />Shoes &amp; chalk available on-site</li>
                </ul>
                <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
                  <span className="meta">60 — 90 min sessions · All levels</span>
                </div>
              </div>
              <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/photos/bouldering-wall.jpg" alt="Climber on the bouldering wall" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.8)" }} />
              </div>
            </div>
          </article>

          {/* Discipline III — Recovery Room (interactive) */}
          <RecoveryRoom />

          {/* Discipline IV — Calisthenics */}
          <article className="reveal" style={{ padding: "48px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="row-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }}>
              <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/photos/calisthenics.jpg" alt="Calisthenics — planche on parallettes" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.85)" }} />
              </div>
              <div>
                <span className="eyebrow">Discipline IV</span>
                <h2 className="display-h2" style={{ margin: "24px 0 24px" }}>Calisthenics.</h2>
                <p className="body-lg" style={{ marginBottom: 32 }}>
                  Master your own bodyweight. Pull, push, lever, and hold — a movement discipline
                  built on raw control, mobility, and strength earned without a single machine.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 14 }}>
                  <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={bullet} />Push, pull, core &amp; skill progressions</li>
                  <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={bullet} />Rings, bars, parallettes &amp; floor work</li>
                  <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={bullet} />Coached from first pull-up to muscle-up</li>
                </ul>
                <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
                  <span className="meta">45 — 60 min · All Levels</span>
                </div>
              </div>
            </div>
          </article>

          {/* Discipline V — Dance */}
          <article className="reveal" style={{ padding: "48px 0" }}>
            <div className="row-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }}>
              <div>
                <span className="eyebrow">Discipline V — Daily, Evenings</span>
                <h2 className="display-h2" style={{ margin: "24px 0 24px" }}>Dance.</h2>
                <p className="body-lg" style={{ marginBottom: 32 }}>
                  Move to the rhythm, every evening. Daily dance classes that train coordination,
                  cardio, and expression — open to every member as the sun goes down.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 14 }}>
                  <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={bullet} />Evening classes, every single day</li>
                  <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={bullet} />Choreography, conditioning &amp; freestyle</li>
                  <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={bullet} />All levels — no experience required</li>
                </ul>
                <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
                  <span className="meta">Daily · 6:30 — 8:30 PM</span>
                </div>
              </div>
              <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/photos/dance.jpg" alt="Dancers in a salsa class" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.85)" }} />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Auxiliary tiles */}
      <section className="section" style={{ borderTop: 0 }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: 48, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
            <div>
              <span className="eyebrow">Auxiliary</span>
              <h2 className="display-h2" style={{ margin: "24px 0 0" }}>Adjacent Disciplines.</h2>
            </div>
            <p className="body" style={{ maxWidth: 340, margin: 0 }}>Modular add-ons available to every tier. Booked per-session.</p>
          </div>
          <div className="tile-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 1 }}>
            {[
              { n: "Aux 01", t: "Personal Training.", d: "One-on-one sessions with certified strength and conditioning coaches. Bespoke programming." },
              { n: "Aux 02", t: "Group Strength.", d: "Small-group barbell & conditioning sessions led by professional coaches. Max six per session." },
              { n: "Aux 03", t: "Climbing Coaching.", d: "Technique sessions on the wall for beginners and intermediates. Footwork, body positioning, route reading." },
              { n: "Aux 04", t: "Contrast Therapy.", d: "Guided Recovery Room cycles for recovery, sleep quality, and nervous-system regulation." },
            ].map((a) => (
              <div key={a.n} className="reveal" style={{ padding: "48px 36px" }}>
                <span className="eyebrow">{a.n}</span>
                <h3 className="display-h3" style={{ margin: "20px 0 16px" }}>{a.t}</h3>
                <p className="body" style={{ margin: 0 }}>{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
