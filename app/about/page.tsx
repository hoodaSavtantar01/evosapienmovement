import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EVOSAPIEN MOVEMENT — About",
  description: "A 10,000 square-foot training space in Rohtak — a single roof for strength, climbing, and recovery.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/4775196/pexels-photo-4775196.jpeg?w=1920&h=1100&fit=crop"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.45)", animation: "slow-zoom 25s ease-out forwards" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,0.55) 0%,rgba(0,0,0,0.85) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 120, paddingBottom: 120 }}>
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            <span style={{ display: "inline-block", width: 48, height: 1, background: "rgba(255,255,255,0.4)" }} />
            <span className="eyebrow">About · 03</span>
          </div>
          <h1 className="display-hero reveal" style={{ maxWidth: 1400 }}>Beyond<br /><span className="outline-text">The Physical.</span></h1>
          <p className="body-lg reveal" style={{ maxWidth: 640, marginTop: 48 }}>
            Evosapien Movement is a 10,000 square-foot training space in Rohtak — a single roof
            for serious strength, climbing, and recovery. Built for people who treat training as a
            craft, not a chore.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 64, maxWidth: 1300 }}>
            <div className="reveal">
              <span className="eyebrow">Origin</span>
              <h2 className="display-h2" style={{ margin: "24px 0 0" }}>Built In<br />Rohtak.</h2>
              <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 24 }}>
                <div className="powered-by" style={{ margin: 0 }}>
                  <span className="label">Powered by</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/technogym-badge.png" alt="Technogym" />
                </div>
              </div>
            </div>
            <div className="reveal" style={{ maxWidth: 540 }}>
              <p className="body-lg" style={{ margin: "0 0 24px" }}>
                Evosapien Movement was founded by lifters and climbers in Rohtak who could not find
                a single room that took both seriously. We built one. A professional strength floor,
                the city&apos;s only in-gym climbing wall, and a full Recovery Room — all under one roof.
              </p>
              <p className="body" style={{ margin: "0 0 24px" }}>
                We are open to everyone — beginners who want guidance, lifters who want better
                equipment, climbers who finally have a wall, and athletes recovering from real
                loads. Memberships are limited so the floor never feels crowded.
              </p>
              <p className="body" style={{ margin: 0 }}>
                Every new member begins with a one-on-one assessment with a certified trainer. Your
                first program is written that week. The work is slow at the start. It does not slow
                down again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ borderTop: 0, padding: 0 }}>
        <div className="stats">
          {[
            { v: "06", l: "Disciplines Under One Roof" },
            { v: "01", l: "Climbing Wall in Rohtak" },
            { v: "10k", l: "Sq Ft Sanctuary" },
            { v: "94%", l: "Retention Rate" },
          ].map((s) => (
            <div className="stat reveal" key={s.l}>
              <div className="stat-value">{s.v}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy mosaic */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 64, maxWidth: 720 }}>
            <span className="eyebrow">01 — Core Purpose</span>
            <h2 className="display-h2" style={{ margin: "24px 0 24px" }}>Engineering<br />Human Peak.</h2>
            <p className="body-lg" style={{ margin: 0 }}>Our purpose is to help people improve their bodies and minds through movement.</p>
          </div>

          <div className="reveal" style={{ margin: "96px 0 48px", maxWidth: 720 }}>
            <span className="eyebrow">02 — Core Values</span>
            <h2 className="display-h2" style={{ margin: "24px 0 0" }}>The<br />Standard.</h2>
          </div>

          <div className="tile-grid cols2" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 1 }}>
            {[
              { n: "01 — Value", t: <>Movement First.</>, d: "We believe movement is the foundation of a better body and mind. Every protocol, every room, every coaching decision starts there." },
              { n: "02 — Value", t: <>Premium Experience.</>, d: "We create an environment that feels inspiring, comfortable, and premium. The space respects the work — and the people doing it." },
              { n: "03 — Value", t: <>Right People,<br />Right Culture.</>, d: "We welcome people who respect the environment, the practice, and the culture we are building. Memberships are intentional, not transactional." },
              { n: "04 — Value", t: <>Real Transformation.</>, d: "We stand for real transformation in body, mind, and habits. Show up. Train hard. Stay consistent — progress begins the moment you step in." },
            ].map((v, i) => (
              <div key={i} className="reveal" style={{ padding: "64px 48px" }}>
                <span className="eyebrow">{v.n}</span>
                <h3 className="display-h3" style={{ margin: "20px 0 16px" }}>{v.t}</h3>
                <p className="body" style={{ margin: 0, maxWidth: 520 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <div className="reveal" style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}><span className="ornament-star" /></div>
          <h2 className="display-h2 reveal">The Floor Is Open.</h2>
          <p className="body-lg reveal" style={{ margin: "32px auto 40px", maxWidth: 560 }}>
            Apply for membership or book a tour of the space. We respond within 24 hours.
          </p>
          <div className="reveal" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-solid">Apply for Membership</Link>
            <Link href="/contact#appointment" className="btn btn-ghost">Book a Tour</Link>
          </div>
        </div>
      </section>
    </>
  );
}
