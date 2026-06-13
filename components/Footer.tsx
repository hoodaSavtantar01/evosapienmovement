import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="cols">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo.png" alt="Evosapien Movement" className="brand-logo" />
            <div className="meta" style={{ marginBottom: 24 }}>
              Where humans evolve through movement.
            </div>
            <p className="body" style={{ maxWidth: 320 }}>
              Strength · Climbing · Recovery Room. 10,000 sq ft in Model Town, Rohtak.
            </p>
            <div className="powered-by">
              <span className="label">Powered by</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/technogym-badge.png" alt="Technogym" />
            </div>
          </div>
          <div>
            <h4>Navigate</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Sanctuary</h4>
            <p className="body">
              3rd Floor, Vinayak Complex<br />
              Model Town, Rohtak<br />
              Haryana 124001 · India
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+919254012000">+91 92540 12000</a></li>
              <li><a href="mailto:evosapienmovement@gmail.com">evosapienmovement@gmail.com</a></li>
              <li><Link href="/contact#appointment">Book Appointment</Link></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© 2026 Evosapien Movement · Rohtak</span>
          <div style={{ display: "flex", gap: 32 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="https://www.instagram.com/evosapienmovement/" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
