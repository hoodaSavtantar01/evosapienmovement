// Single source of truth for membership pricing.
// Change the numbers here and they update everywhere: the membership page,
// the home-page teaser, and the application + tour forms.

export type Audience = "male" | "female" | "couple";

export interface Plan {
  value: string; // stable id sent with form submissions
  name: string; // display name
  duration: string; // human-readable length
  badge?: string; // optional ribbon, e.g. "Most Popular"
  prices: { male: number; female: number; couple?: number };
}

export const PLANS: Plan[] = [
  { value: "monthly", name: "Monthly", duration: "1 month", prices: { male: 9000, female: 7000 } },
  { value: "3-months", name: "3 Months", duration: "3 months", prices: { male: 20000, female: 16000, couple: 34000 } },
  { value: "6-months", name: "6 Months", duration: "6 months", badge: "Most Popular", prices: { male: 30000, female: 26000, couple: 54000 } },
  { value: "12-months", name: "12 Months", duration: "12 months", badge: "Best Value", prices: { male: 40000, female: 38000, couple: 76000 } },
];

export const AUDIENCES: { value: Audience; label: string }[] = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "couple", label: "Couple" },
];

// 9000 -> "₹9,000" (Indian digit grouping)
export const formatINR = (n: number) => "₹" + n.toLocaleString("en-IN");
