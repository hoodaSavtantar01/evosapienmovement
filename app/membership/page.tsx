import type { Metadata } from "next";
import Link from "next/link";
import { PLANS, formatINR } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "EVOSAPIEN MOVEMENT — Membership",
  description: "One membership, full access to all disciplines. Male, female, and couple rates across monthly, quarterly, half-yearly, and annual plans.",
};

const FAQ = [
  { q: "Do I need experience to join?", a: "No. We work with complete beginners and competitive athletes alike. Every new member starts with a personal assessment so the program meets you where you are." },
  { q: "What does the first week look like?", a: "Your first week includes a movement assessment, baseline strength markers, an introduction to the climbing wall, and a recovery walkthrough. Programming is written the same week and reviewed monthly." },
  { q: "Can I freeze my membership?", a: "Yes — up to 60 days per calendar year for medical, travel, or work reasons. No reactivation fee." },
  { q: "Do you offer corporate or family plans?", a: "Yes. Corporate plans (5+ members) and family plans (2+) receive preferred rates. Contact us directly to discuss." },
];

export default function MembershipPage() {
  return (
    <>
      {/* Page hero */}
      <section style={{ padding: "80px 0 64px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            <span style={{ display: "inline-block", width: 48, height: 1, background: "rgba(255,255,255,0.4)" }} />
            <span className="eyebrow">Membership · 04</span>
          </div>
          <h1 className="display-hero reveal" style={{ maxWidth: 1300 }}>The<br /><span className="outline-text">Investment.</span></h1>
          <p className="body-lg reveal" style={{ maxWidth: 640, marginTop: 48 }}>
            Admission is granted through referral or application. Every member is vetted for
            commitment, not pedigree.
          </p>
        </div>
      </section>

      {/* Pricing tiles */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 56, maxWidth: 680 }}>
            <span className="eyebrow">Commitment</span>
            <h2 className="display-h2" style={{ margin: "24px 0 0" }}>Choose Your Span.</h2>
            <p className="body" style={{ margin: "24px 0 0", maxWidth: 520 }}>One membership. Full access to all six disciplines. Male, female, and couple rates — the longer you commit, the less you pay.</p>
          </div>

          <div className="tier-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 1, background: "rgba(255,255,255,0.06)" }}>
            {PLANS.map((p) => {
              const featured = p.badge === "Best Value";
              return (
                <article key={p.value} className="reveal plan-card" style={{ background: "#000", display: "flex", flexDirection: "column", gap: 32, position: "relative", ...(featured ? { border: "1px solid #fff" } : {}) }}>
                  {p.badge && <div className="plan-badge">{p.badge}</div>}
                  <header>
                    <span className="eyebrow">{p.duration}</span>
                    <h2 className="display-h3 plan-name" style={{ margin: "16px 0 0" }}>{p.name}</h2>
                  </header>
                  <div className="plan-prices">
                    <div className="plan-price-row"><span className="g">Male</span><span className="amt">{formatINR(p.prices.male)}</span></div>
                    <div className="plan-price-row"><span className="g">Female</span><span className="amt">{formatINR(p.prices.female)}</span></div>
                    <div className={`plan-price-row${p.prices.couple == null ? " muted" : ""}`}>
                      <span className="g">Couple</span>
                      <span className="amt">{p.prices.couple != null ? formatINR(p.prices.couple) : "—"}</span>
                    </div>
                  </div>
                  <div style={{ flexGrow: 1 }} />
                  <Link href="/contact" className={`btn ${featured ? "btn-solid" : "btn-ghost"}`} style={{ width: "100%" }}>Apply</Link>
                </article>
              );
            })}
          </div>

          <p className="meta reveal" style={{ textAlign: "center", marginTop: 48 }}>
            All memberships begin with a personal assessment. No joining fee. GST included. Longer
            spans are billed once, up front. Couple rates cover two members on one plan.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <span className="eyebrow">Questions</span>
            <h2 className="display-h2" style={{ margin: "24px 0 0" }}>Frequently Asked.</h2>
          </div>
          <div className="reveal">
            {FAQ.map((f) => (
              <details key={f.q} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "28px 0" }}>
                <summary style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none", gap: 24 }}>
                  <span style={{ fontSize: 22, fontWeight: 400, letterSpacing: "-0.01em" }}>{f.q}</span>
                  <span className="plus-mark" style={{ flexShrink: 0, color: "rgba(255,255,255,0.5)" }} />
                </summary>
                <p className="body" style={{ margin: "20px 0 0", maxWidth: 680 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <div className="reveal" style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}><span className="ornament-star" /></div>
          <h2 className="display-h2 reveal">Cross The Threshold.</h2>
          <p className="body-lg reveal" style={{ margin: "32px auto 40px", maxWidth: 560 }}>Two paths. Same standard.</p>
          <div className="reveal" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-solid">Apply for Membership</Link>
            <Link href="/contact#appointment" className="btn btn-ghost">Book a Tour</Link>
          </div>
        </div>
      </section>
    </>
  );
}
