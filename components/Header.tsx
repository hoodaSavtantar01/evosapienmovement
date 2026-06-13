"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="site-header">
        <div className="inner">
          <div className="header-brand">
            <Link href="/" className="brand-logo" aria-label="Evosapien Movement — Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo.png" alt="Evosapien Movement" className="brand-logo" />
            </Link>
            <span className="powered-by header-powered">
              <span className="label">Powered by</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/technogym-badge.png" alt="Technogym" />
            </span>
          </div>

          <nav className="site-nav">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "active" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-right">
            <span className="member-pill">
              <span className="dot pulse-soft" /> Member Access
            </span>
            <Link href="/contact" className="btn btn-ghost" style={{ padding: "14px 28px" }}>
              Join Today
            </Link>
            <button
              className="menu-toggle"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth="1.2" d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <aside className={`drawer${open ? " is-open" : ""}`}>
        <div className="drawer-header">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="Evosapien Movement" className="brand-logo" />
          <button className="menu-toggle" aria-label="Close menu" onClick={() => setOpen(false)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="1.2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="drawer-footer">
          <Link href="/contact" className="btn btn-solid" onClick={() => setOpen(false)}>
            Join Today
          </Link>
        </div>
      </aside>
    </>
  );
}
