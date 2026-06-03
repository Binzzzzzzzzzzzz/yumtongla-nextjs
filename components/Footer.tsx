import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Monthly Menu", href: "#monthly-menu" },
  { label: "How to Order", href: "#how-to-order" },
  { label: "Special Offers", href: "#special-offer" },
  { label: "About Us", href: "#about-us" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#2C1810", color: "#fff", padding: "48px 32px 24px", marginTop: "auto" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 40, marginBottom: 40, flexWrap: "wrap" }}>

          <div style={{ maxWidth: 300 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <Image src="/assets/yumtongla_logo.jpg" alt="Yum Tong'La" width={48} height={48}
                style={{ borderRadius: "50%", objectFit: "cover" }} />
              <span style={{ fontWeight: 800, fontSize: "1.1rem" }}>飲湯啦 Yum Tong&apos;La</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: 1.6 }}>
              重拾家的味道 · Delicious Healthy Chinese Soup<br />Freshly made daily in Toronto 🍲
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 16, fontWeight: 600 }}>Quick Links</h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {links.map(l => (
                <li key={l.label}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 16, fontWeight: 600 }}>Follow Us</h3>
            <a href="https://www.instagram.com/yumtong1la" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              @yumtong1la
            </a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24 }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
            &copy; {new Date().getFullYear()} 飲湯啦 Yum Tong&apos;La. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
