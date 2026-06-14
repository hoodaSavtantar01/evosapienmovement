import Link from "next/link";
import HyperspeedHero from "@/components/HyperspeedHero";
import { PLANS, formatINR } from "@/lib/pricing";

export default function HomePage() {
  return (
    <>
      <HyperspeedHero />

      {/* ACCESSIBLE CALLOUT */}
      <section
        className="section-light"
        style={{ padding: "96px 0", borderBottom: "1px solid rgba(0,0,0,0.08)" }}
      >
        <div className="container" style={{ maxWidth: 880, textAlign: "center" }}>
          <div className="reveal" style={{ display: "flex", justifyContent: "center", color: "#0a0a0a", marginBottom: 40 }}>
            <span className="ornament-star" />
          </div>
          <h2 className="display-h2 reveal" style={{ color: "#0a0a0a" }}>
            Discipline Should Be<br />Accessible To The Committed.
          </h2>
          <p className="body-lg reveal" style={{ margin: "32px auto 40px", maxWidth: 620 }}>
            Whether you arrive a complete beginner or a seasoned athlete — Evosapien Movement
            matches you with a certified trainer and writes a program around you. The wall, the
            floor, and the recovery suite scale with your training.
          </p>
          <Link href="/contact" className="btn btn-inv-ghost reveal">Begin Application</Link>
        </div>
      </section>

      {/* TRAININGS */}
      <section className="section">
        <div className="container">
          <div
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 64, gap: 32, flexWrap: "wrap" }}
            className="reveal"
          >
            <div>
              <span className="eyebrow">02 — Trainings</span>
              <h2 className="display-h2" style={{ margin: "24px 0 0" }}>The Disciplines.</h2>
            </div>
            <Link href="/services" className="meta" style={{ display: "inline-flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,0.6)" }}>
              See All
              <span style={{ width: 36, height: 36, border: "0.8px solid rgba(255,255,255,0.3)", borderRadius: 9999, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeWidth="1.2" d="M5 12h14m-6-6l6 6-6 6" /></svg>
              </span>
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Link href="/services" className="training-row reveal">
              <div className="bg" style={{ backgroundImage: "url('/assets/photos/strength-floor.jpg')" }} />
              <div className="veil" />
              <div className="content">
                <span className="eyebrow" style={{ color: "rgb(167,168,163)" }}>Discipline I</span>
                <span className="title">Strength Floor</span>
              </div>
              <span className="arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeWidth="1.2" d="M5 12h14m-6-6l6 6-6 6" /></svg></span>
            </Link>

            <Link href="/services" className="training-row reveal">
              <div className="bg" style={{ backgroundImage: "url('/assets/photos/bouldering-wall.jpg')" }} />
              <div className="veil" />
              <div className="content">
                <span className="eyebrow" style={{ color: "rgba(255,255,255,0.4)" }}>Discipline II — Rohtak&apos;s First</span>
                <span className="title">Bouldering Wall</span>
              </div>
              <span className="arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeWidth="1.2" d="M5 12h14m-6-6l6 6-6 6" /></svg></span>
            </Link>

            <Link href="/services" className="training-row reveal">
              <div className="bg" style={{ backgroundImage: "url('/assets/photos/steam-room.jpg')" }} />
              <div className="veil" />
              <div className="content">
                <span className="eyebrow" style={{ color: "rgba(255,255,255,0.4)" }}>Discipline III — Recovery</span>
                <span className="title">Recovery Room</span>
              </div>
              <div className="recovery-pop" aria-hidden="true">
                <span className="recovery-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M8 13c-1.5-1-1.5-3 0-4s1.5-3 0-4" /><path d="M12 14c-1.5-1-1.5-3 0-4s1.5-3 0-4" /><path d="M16 13c-1.5-1-1.5-3 0-4s1.5-3 0-4" /></svg>
                  Steam Room
                </span>
                <span className="recovery-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" /></svg>
                  Cold Plunge
                </span>
              </div>
              <span className="arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeWidth="1.2" d="M5 12h14m-6-6l6 6-6 6" /></svg></span>
            </Link>

            <Link href="/services" className="training-row reveal">
              <div className="bg" style={{ backgroundImage: "url('/assets/photos/calisthenics.jpg')" }} />
              <div className="veil" />
              <div className="content">
                <span className="eyebrow" style={{ color: "rgba(255,255,255,0.4)" }}>Discipline IV</span>
                <span className="title">Calisthenics</span>
              </div>
              <span className="arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeWidth="1.2" d="M5 12h14m-6-6l6 6-6 6" /></svg></span>
            </Link>

            <Link href="/services" className="training-row reveal">
              <div className="bg" style={{ backgroundImage: "url('/assets/photos/dance.jpg')" }} />
              <div className="veil" />
              <div className="content">
                <span className="eyebrow" style={{ color: "rgba(255,255,255,0.4)" }}>Discipline V — Daily, Evenings</span>
                <span className="title">Dance Classes</span>
              </div>
              <span className="arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeWidth="1.2" d="M5 12h14m-6-6l6 6-6 6" /></svg></span>
            </Link>

            <Link href="/services" className="training-row reveal">
              <div className="bg" style={{ backgroundImage: "url('/assets/photos/cardio.jpg')" }} />
              <div className="veil" />
              <div className="content">
                <span className="eyebrow" style={{ color: "rgba(255,255,255,0.4)" }}>Discipline VI — Build Your Engine</span>
                <span className="title">Cardio</span>
              </div>
              <span className="arrow"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeWidth="1.2" d="M5 12h14m-6-6l6 6-6 6" /></svg></span>
            </Link>
          </div>
        </div>
      </section>

      {/* THE CLUB / TIERS */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="reveal" style={{ marginBottom: 48 }}>
            <span className="eyebrow">03 — The Club</span>
          </div>
          <div className="reveal">
            {PLANS.map((p, i) => (
              <Link
                key={p.value}
                href="/membership"
                className="tier-row"
                style={{ display: "grid", textDecoration: "none", ...(i === PLANS.length - 1 ? { borderBottom: "none" } : {}) }}
              >
                <span className="name">
                  {p.name}
                  <span style={{ fontSize: "clamp(14px,1.4vw,18px)", fontWeight: 300, letterSpacing: "0.1em", opacity: 0.4, marginLeft: 24 }}>from {formatINR(p.prices.female)}</span>
                </span>
                <span className="meta" style={{ whiteSpace: "nowrap", ...(p.badge ? { color: "#fff" } : {}) }}>{p.badge ?? p.duration}</span>
                <span className="plus-mark" style={{ color: "rgba(255,255,255,0.5)" }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BODY IS TEMPLE */}
      <section className="section" style={{ position: "relative", overflow: "hidden", border: 0, padding: 0 }}>
        <div style={{ position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/6739958/pexels-photo-6739958.jpeg?w=1920&h=1100&fit=crop"
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.35)", animation: "slow-zoom 25s ease-out forwards" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,0.35) 0%,rgba(0,0,0,0.85) 100%)" }} />
          <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 140, paddingBottom: 140, textAlign: "center" }}>
            <div className="reveal" style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}><span className="ornament-star" /></div>
            <h2 className="display-hero reveal" style={{ maxWidth: 1200, margin: "0 auto" }}>Your Body Is<br />Your Temple.</h2>
            <p className="body-lg reveal" style={{ margin: "32px auto 0", maxWidth: 620 }}>
              The space asks a higher standard than you would set for yourself. That is the work. That is the bargain.
            </p>
            <div className="reveal" style={{ marginTop: 80, display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, background: "rgba(255,255,255,0.12)", maxWidth: 1100, marginLeft: "auto", marginRight: "auto" }}>
              <div style={{ background: "rgba(0,0,0,0.4)", padding: "32px 24px" }}><div className="meta" style={{ fontSize: 11 }}>— Strength · 10,000 sq ft</div></div>
              <div style={{ background: "rgba(0,0,0,0.4)", padding: "32px 24px" }}><div className="meta" style={{ fontSize: 11 }}>— Climbing · Only in Rohtak</div></div>
              <div style={{ background: "rgba(0,0,0,0.4)", padding: "32px 24px" }}><div className="meta" style={{ fontSize: 11 }}>— Recovery Room · Steam &amp; Cold Plunge</div></div>
              <div style={{ background: "rgba(0,0,0,0.4)", padding: "32px 24px" }}><div className="meta" style={{ fontSize: 11 }}>— Dance · Daily Evenings</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION CTA */}
      <section className="section">
        <div className="container" style={{ maxWidth: 880, textAlign: "center" }}>
          <div className="reveal">
            <span className="eyebrow">04 — Threshold</span>
            <h2 className="display-h2" style={{ margin: "24px 0 24px" }}>Your Evolution<br />Begins In The Dark.</h2>
            <p className="body-lg" style={{ margin: "0 auto 40px", maxWidth: 560 }}>
              Apply for a membership or book a tour of the space. We will be in touch within 24 hours.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-solid">Apply for Membership</Link>
              <Link href="/contact#appointment" className="btn btn-ghost">Book a Tour</Link>
            </div>
            <p className="meta" style={{ marginTop: 48 }}>By Appointment Only · +91 92540 12000 · evosapienmovement@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
}
