"use client";

import { useState } from "react";
import PlanSelector from "@/components/PlanSelector";

const WEB3FORMS_KEY = "4b6ab8d8-c1f8-47b4-ab6e-7d014f71a72a";

export default function TourForm() {
  const [fileName, setFileName] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fileInput = form.querySelector<HTMLInputElement>('input[type="file"]');
    if (fileInput?.files?.[0] && fileInput.files[0].size > 5 * 1024 * 1024) {
      alert("ID proof file is too large. Please upload a file under 5 MB.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setSubmitting(false);
        alert("Something went wrong — please email us directly at evosapienmovement@gmail.com");
      }
    } catch {
      setSubmitting(false);
      alert("Network error. Please call us on +91 92540 12000 or email evosapienmovement@gmail.com");
    }
  }

  return (
    <form data-form="appointment" onSubmit={handleSubmit} className="reveal" style={{ border: "1px solid rgba(0,0,0,0.12)", padding: "48px 40px", background: "#fff" }}>
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="New Tour Appointment — Evosapien Movement" />
      <input type="hidden" name="from_name" value="Evosapien Movement" />
      <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <style>{`
        #appointment .field { color:#0a0a0a;border-bottom-color:rgba(0,0,0,0.2) }
        #appointment .field::placeholder { color:rgba(0,0,0,0.45) }
        #appointment .field:focus { border-bottom-color:#0a0a0a }
        #appointment .meta { color:rgba(0,0,0,0.55) }
        #appointment select.field {
          background-image:linear-gradient(45deg,transparent 50%,rgba(0,0,0,0.55) 50%),linear-gradient(135deg,rgba(0,0,0,0.55) 50%,transparent 50%);
        }
      `}</style>

      {!sent ? (
        <div data-fields style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
          <div style={{ gridColumn: "span 2" }}>
            <label className="meta" style={{ display: "block", marginBottom: 8 }}>Full Name</label>
            <input className="field" type="text" name="name" placeholder="Your full name" required />
          </div>
          <div>
            <label className="meta" style={{ display: "block", marginBottom: 8 }}>Email</label>
            <input className="field" type="email" name="email" placeholder="you@domain.com" required />
          </div>
          <div>
            <label className="meta" style={{ display: "block", marginBottom: 8 }}>Phone</label>
            <input className="field" type="tel" name="phone" placeholder="+91 92540 12000" required />
          </div>
          <div>
            <label className="meta" style={{ display: "block", marginBottom: 8 }}>Preferred Date</label>
            <input className="field" type="date" name="date" required />
          </div>
          <div>
            <label className="meta" style={{ display: "block", marginBottom: 8 }}>Preferred Time</label>
            <select className="field" name="time" required defaultValue="">
              <option value="">Select a slot</option>
              <option>10:00</option>
              <option>11:30</option>
              <option>13:00</option>
              <option>14:30</option>
              <option>16:00</option>
            </select>
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <label className="meta" style={{ display: "block", marginBottom: 8 }}>Instagram Handle</label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", color: "rgba(0,0,0,0.35)", fontSize: 13, pointerEvents: "none" }}>@</span>
              <input className="field" type="text" name="instagram" placeholder="yourhandle" style={{ paddingLeft: 16 }} />
            </div>
          </div>
          <div style={{ gridColumn: "span 2", marginTop: 24 }}>
            <label className="meta" style={{ display: "block", marginBottom: 16, color: "#0a0a0a" }}>
              Plan of interest <span style={{ opacity: 0.4, fontWeight: 300 }}>(optional — helps us prepare)</span>
            </label>
            <PlanSelector theme="light" />
          </div>

          <div style={{ gridColumn: "span 2", marginTop: 24 }}>
            <label className="meta" style={{ display: "block", marginBottom: 8 }}>Notes</label>
            <textarea className="field" name="note" placeholder="Anything we should know in advance." />
          </div>

          <div style={{ gridColumn: "span 2", marginTop: 8 }}>
            <label className="meta" style={{ display: "block", marginBottom: 10, color: "#0a0a0a" }}>
              ID Proof <span style={{ opacity: 0.4, fontWeight: 300 }}>(Aadhaar · Driver&apos;s Licence · Passport)</span>
            </label>
            <label style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, border: "1px dashed rgba(0,0,0,0.2)", padding: "28px 24px", cursor: "pointer" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.28)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
              <span className="meta" style={{ color: "rgba(0,0,0,0.38)", fontSize: 11, textAlign: "center", lineHeight: 1.7 }}>
                {fileName || (<>Click to upload or drag &amp; drop<br /><span style={{ opacity: 0.5 }}>JPG, PNG or PDF · Max 5 MB</span></>)}
              </span>
              <input type="file" name="id_proof" accept="image/jpeg,image/png,application/pdf" style={{ display: "none" }} onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
            </label>
          </div>

          <div style={{ gridColumn: "span 2", marginTop: 32, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <span className="meta" style={{ fontSize: 10 }}>Held seats expire after 24 hours without confirmation.</span>
            <button type="submit" className="btn btn-inv-ghost" style={{ background: "#000", color: "#fff", borderColor: "#000" }} disabled={submitting}>{submitting ? "Sending…" : "Confirm Appointment"}</button>
          </div>
        </div>
      ) : (
        <div data-confirm style={{ textAlign: "left", padding: "32px 0", color: "#0a0a0a" }}>
          <div style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 14 }}>
            <span className="ornament-star" style={{ color: "#0a0a0a" }} />
            <span className="meta eyebrow-dark">Tour Booked</span>
          </div>
          <h3 className="display-h3" style={{ margin: "0 0 16px", color: "#0a0a0a" }}>Your tour is confirmed.</h3>
          <p className="body" style={{ color: "rgba(0,0,0,0.65)", marginBottom: 16 }}>A confirmation has been sent to your email. The receptionist will text you the morning of your visit with arrival details.</p>
          <p className="meta" style={{ color: "rgba(0,0,0,0.4)", fontSize: 11, lineHeight: 1.6 }}>If you decide to join after your tour, membership payment is collected at the gym — no online payment required.</p>
        </div>
      )}
    </form>
  );
}
