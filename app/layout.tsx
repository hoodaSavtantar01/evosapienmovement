import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteMotion from "@/components/SiteMotion";

export const metadata: Metadata = {
  title: "EVOSAPIEN MOVEMENT — Engineering Human Peak",
  description:
    "Six disciplines under one roof in Rohtak. Strength, cardio, climbing, calisthenics, dance, and the Recovery Room — 10,000 square feet, powered by Technogym.",
  icons: { icon: "/assets/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <SiteMotion />
      </body>
    </html>
  );
}
