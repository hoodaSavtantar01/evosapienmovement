import type { Metadata } from "next";
import ApplyForm from "@/components/ApplyForm";
import TourForm from "@/components/TourForm";

export const metadata: Metadata = {
  title: "EVOSAPIEN MOVEMENT — Contact & Application",
  description: "Apply for membership or book a private tour of the sanctuary. Responses within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section style={{ padding: "80px 0 64px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            <span style={{ display: "inline-block", width: 48, height: 1, background: "rgba(255,255,255,0.4)" }} />
            <span className="eyebrow">Contact · 05</span>
          </div>
          <h1 className="display-hero reveal" style={{ maxWidth: 1300 }}>Cross The<br /><span className="outline-text">Threshold.</span></h1>
          <p className="body-lg reveal" style={{ maxWidth: 640, marginTop: 48 }}>
            Two paths. Apply for membership, or book a private tour of the sanctuary. Responses
            within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="section">
        <div className="container">
          <div className="tile-grid" id="channel-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 1 }}>
            <div className="reveal" style={{ padding: "48px 40px" }}>
              <span className="eyebrow">Direct Line</span>
              <a href="tel:+919254012000" className="display-h3" style={{ display: "block", margin: "20px 0 16px", whiteSpace: "nowrap" }}>+91 92540 12000</a>
              <p className="body" style={{ margin: 0 }}>By appointment only. Monday — Friday, 07:00 — 21:00.</p>
            </div>
            <div className="reveal" style={{ padding: "48px 40px" }}>
              <span className="eyebrow">Application</span>
              <a href="mailto:evosapienmovement@gmail.com" className="display-h3" style={{ display: "block", margin: "20px 0 16px" }}>evosapienmovement@gmail.com</a>
              <p className="body" style={{ margin: 0 }}>For new membership inquiries, referrals, or returning member access.</p>
            </div>
            <div className="reveal" style={{ padding: "48px 40px" }}>
              <span className="eyebrow">Sanctuary</span>
              <h3 className="display-h3" style={{ margin: "20px 0 16px" }}>Vinayak Complex.</h3>
              <p className="body" style={{ margin: 0 }}>3rd Floor, Vinayak Complex<br />Model Town, Rohtak<br />Haryana 124001 · India<br />Visits by appointment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Application */}
      <section id="apply" className="section">
        <div className="container">
          <div className="apply-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 64 }}>
            <div className="reveal">
              <span className="eyebrow">Form 01 — Membership Application</span>
              <h2 className="display-h2" style={{ margin: "24px 0 24px" }}>Apply To<br />Evolve.</h2>
              <p className="body-lg" style={{ margin: "0 0 32px", maxWidth: 420 }}>
                Submit your details. Our receptionist will reach out to you within 24 hours to
                confirm your membership.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 18 }}>
                <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={{ width: 24, height: 1, background: "rgba(255,255,255,0.4)" }} />Seven-day welcome phase included</li>
                <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={{ width: 24, height: 1, background: "rgba(255,255,255,0.4)" }} />Referrals reviewed in 24 hours</li>
                <li className="meta" style={{ display: "flex", alignItems: "center", gap: 14 }}><span style={{ width: 24, height: 1, background: "rgba(255,255,255,0.4)" }} />All applications confidential</li>
              </ul>
            </div>
            <ApplyForm />
          </div>
        </div>
      </section>

      {/* Appointment / Tour */}
      <section id="appointment" className="section section-light">
        <div className="container">
          <div className="apply-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 64 }}>
            <div className="reveal">
              <span className="eyebrow eyebrow-dark">Form 02 — Book an Appointment</span>
              <h2 className="display-h2" style={{ margin: "24px 0 24px", color: "#0a0a0a" }}>Reserve A<br /><span className="outline-text-dark">Private Tour.</span></h2>
              <p className="body-lg" style={{ margin: "0 0 32px", maxWidth: 420 }}>
                Walk the sanctuary with our receptionist. By reservation, no walk-ins.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 360 }}>
                <div>
                  <div className="meta eyebrow-dark">Tour Hours</div>
                  <p className="body" style={{ margin: "8px 0 0", color: "rgba(0,0,0,0.7)" }}>Tue — Sat · 10:00 — 16:00</p>
                </div>
                <div>
                  <div className="meta eyebrow-dark">Format</div>
                  <p className="body" style={{ margin: "8px 0 0", color: "rgba(0,0,0,0.7)" }}>Private, with our receptionist. No press.</p>
                </div>
              </div>
            </div>
            <TourForm />
          </div>
        </div>
      </section>

      {/* Map / location */}
      <section className="section" style={{ padding: 0, border: 0 }}>
        <div style={{ position: "relative", aspectRatio: "21 / 9", width: "100%", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?w=1920&h=820&fit=crop" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) brightness(0.4)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.7) 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
            <div style={{ textAlign: "center", maxWidth: 680 }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}><span className="ornament-star" /></div>
              <h2 className="display-h2" style={{ margin: "0 0 16px" }}>Vinayak Complex.</h2>
              <p className="body-lg" style={{ margin: 0 }}>3rd Floor, Vinayak Complex, Model Town, Rohtak, Haryana 124001 — India.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
