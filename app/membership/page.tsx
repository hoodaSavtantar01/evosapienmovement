import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EVOSAPIEN MOVEMENT — Membership",
  description: "One membership, full access to all disciplines. The longer you commit, the less you pay per month.",
};

const TIERS = [
  { kicker: "Pay Monthly", name: "The Month.", blurb: "Rolling access, no lock-in. Cancel any time.", eff: "Effective ₹9,500 / mo", price: "₹9,500", per: "/ 1 month", cta: "btn-ghost", featured: false },
  { kicker: "Pay Quarterly", name: "The Quarter.", blurb: "A season to build a habit. Billed once for three months.", eff: "Effective ₹9,000 / mo · save 5%", price: "₹27,000", per: "/ 3 months", cta: "btn-ghost", featured: false },
  { kicker: "Pay Half-Yearly", name: "The Half.", blurb: "Six months of momentum. The sweet spot for transformation.", eff: "Effective ₹8,500 / mo · save 11%", price: "₹51,000", per: "/ 6 months", cta: "btn-ghost", featured: false },
  { kicker: "Pay Annually", name: "The Year.", blurb: "A full year of evolution at the lowest rate we offer.", eff: "Effective ₹8,000 / mo · save 16%", price: "₹96,000", per: "/ year", cta: "btn-solid", featured: true },
];

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
            <p className="body" style={{ margin: "24px 0 0", maxWidth: 520 }}>One membership. Full access to all six disciplines. The longer you commit, the less you pay per month.</p>
          </div>

          <div className="tier-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 1, background: "rgba(255,255,255,0.06)" }}>
            {TIERS.map((t) => (
              <article key={t.name} className="reveal" style={{ background: "#000", padding: "44px 36px", display: "flex", flexDirection: "column", gap: 36, position: "relative", ...(t.featured ? { border: "1px solid #fff" } : {}) }}>
                {t.featured && (
                  <div style={{ position: "absolute", top: 0, right: 36, transform: "translateY(-50%)", background: "#fff", color: "#000", padding: "6px 14px", fontSize: 9, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase" }}>Best Value</div>
                )}
                <header>
                  <span className="eyebrow">{t.kicker}</span>
                  <h2 className="display-h3" style={{ margin: "20px 0 16px", fontSize: "clamp(34px,3.4vw,46px)" }}>{t.name}</h2>
                  <p className="body" style={{ margin: 0, maxWidth: 300 }}>{t.blurb}</p>
                </header>
                <div style={{ flexGrow: 1 }} />
                <footer>
                  <div className="meta" style={{ marginBottom: 8, ...(t.featured ? { color: "#fff" } : {}) }}>{t.eff}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 24 }}>
                    <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em" }}>{t.price}</span>
                    <span className="meta">{t.per}</span>
                  </div>
                  <Link href="/contact" className={`btn ${t.cta}`} style={{ width: "100%" }}>Apply</Link>
                </footer>
              </article>
            ))}
          </div>

          <p className="meta reveal" style={{ textAlign: "center", marginTop: 48 }}>
            All memberships begin with a personal assessment. No joining fee. GST included. Longer
            spans are billed once, up front.
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
