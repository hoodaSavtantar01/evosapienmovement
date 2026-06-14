"use client";

import { useState } from "react";
import { PLANS, AUDIENCES, formatINR, type Audience } from "@/lib/pricing";

// Audience (Male / Female / Couple) + plan picker that shows the matching
// price live and submits the choice via hidden fields. Used on a dark
// background by default; pass theme="light" for the white tour form.
export default function PlanSelector({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const [audience, setAudience] = useState<Audience | "">("");
  const [plan, setPlan] = useState("");

  const selectedPlan = PLANS.find((p) => p.value === plan);
  const price =
    selectedPlan && audience ? selectedPlan.prices[audience] : undefined;
  const audienceLabel = AUDIENCES.find((a) => a.value === audience)?.label ?? "";

  return (
    <div className={`plan-selector${theme === "light" ? " ps-light" : ""}`}>
      {/* Submitted with the form so the gym sees the visitor's choice. */}
      <input type="hidden" name="membership_type" value={audienceLabel} />
      <input type="hidden" name="membership_span" value={selectedPlan?.name ?? ""} />
      <input type="hidden" name="membership_price" value={price != null ? formatINR(price) : ""} />

      <label className="meta ps-label">Who is this for?</label>
      <div className="ps-audience">
        {AUDIENCES.map((a) => (
          <button
            key={a.value}
            type="button"
            className={`ps-aud-opt${audience === a.value ? " selected" : ""}`}
            onClick={() => setAudience(a.value)}
          >
            {a.label}
          </button>
        ))}
      </div>

      <label className="meta ps-label" style={{ marginTop: 22 }}>Choose your plan</label>
      <div id="planPicker" className="ps-plans">
        {PLANS.map((p) => {
          const unavailable = audience === "couple" && p.prices.couple == null;
          const amt = audience ? p.prices[audience] : undefined;
          return (
            <button
              key={p.value}
              type="button"
              className={`span-opt${plan === p.value ? " selected" : ""}`}
              disabled={unavailable}
              onClick={() => setPlan(p.value)}
            >
              <span className="span-label">
                {p.name}
                {p.badge ? ` · ${p.badge}` : ""}
              </span>
              <span className="span-price">
                {!audience ? p.duration : unavailable ? "N/A" : formatINR(amt!)}
              </span>
              <span className="span-sub">
                {!audience
                  ? "Pick a type above"
                  : unavailable
                  ? "Couples: 3 months & up"
                  : p.duration}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
