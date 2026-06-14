"use client";

import { useState } from "react";
import PlanSelector from "@/components/PlanSelector";

const WEB3FORMS_KEY = "4b6ab8d8-c1f8-47b4-ab6e-7d014f71a72a";

export default function ApplyForm() {
  const [fileName, setFileName] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (!data.get("membership_type") || !data.get("membership_span")) {
      alert("Please choose who the membership is for and a plan.");
      return;
    }
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
    <form data-form="apply" onSubmit={handleSubmit} className="reveal" style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "48px 40px" }}>
      <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="New Membership Application — Evosapien Movement" />
      <input type="hidden" name="from_name" value="Evosapien Movement" />
      <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

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

          <div style={{ gridColumn: "span 2", marginTop: 8 }}>
            <PlanSelector theme="dark" />
          </div>

          <div>
            <label className="meta" style={{ display: "block", marginBottom: 8 }}>Referred By</label>
            <input className="field" type="text" name="referral" placeholder="Member name or n/a" />
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <label className="meta" style={{ display: "block", marginBottom: 8 }}>Instagram Handle</label>
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.35)", fontSize: 13, pointerEvents: "none" }}>@</span>
              <input className="field" type="text" name="instagram" placeholder="yourhandle" style={{ paddingLeft: 16 }} />
            </div>
          </div>
          <div style={{ gridColumn: "span 2", marginTop: 16 }}>
            <label className="meta" style={{ display: "block", marginBottom: 8 }}>Why Evosapien Movement?</label>
            <textarea className="field" name="note" placeholder="Tell us what you're training toward." />
          </div>

          <div style={{ gridColumn: "span 2", marginTop: 8 }}>
            <label className="meta" style={{ display: "block", marginBottom: 10 }}>
              ID Proof <span style={{ opacity: 0.4, fontWeight: 300 }}>(Aadhaar · Driver&apos;s Licence · Passport)</span>
            </label>
            <label style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, border: "1px dashed rgba(255,255,255,0.18)", padding: "28px 24px", cursor: "pointer" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
              <span className="meta" style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, textAlign: "center", lineHeight: 1.7 }}>
                {fileName || (<>Click to upload or drag &amp; drop<br /><span style={{ opacity: 0.5 }}>JPG, PNG or PDF · Max 5 MB</span></>)}
              </span>
              <input type="file" name="id_proof" accept="image/jpeg,image/png,application/pdf" style={{ display: "none" }} onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} />
            </label>
          </div>

          <div style={{ gridColumn: "span 2", marginTop: 32, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
            <span className="meta" style={{ fontSize: 10 }}>By submitting, you agree to a confidential intake call.</span>
            <button type="submit" className="btn btn-solid" disabled={submitting}>{submitting ? "Sending…" : "Submit Application"}</button>
          </div>
        </div>
      ) : (
        <div data-confirm style={{ textAlign: "left", padding: "32px 0" }}>
          <div style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 14 }}>
            <span className="ornament-star" />
            <span className="eyebrow">Application Received</span>
          </div>
          <h3 className="display-h3" style={{ margin: "0 0 16px" }}>You&apos;re in the queue.</h3>
          <p className="body" style={{ marginBottom: 16 }}>We&apos;ve received your application. Our receptionist will call you within 24 hours to complete your membership.</p>
          <p className="meta" style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, lineHeight: 1.6 }}>Payment is collected at the gym — no online payment required. Bring cash or card on your first visit.</p>
        </div>
      )}
    </form>
  );
}
