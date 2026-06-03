"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "#monthly-menu" },
  { label: "How to Order", href: "#how-to-order" },
  { label: "About Us", href: "#about-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      height: "5rem", display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 32px",
      background: "#fff", boxShadow: "0 2px 8px rgba(44,24,16,0.06)",
      position: "sticky", top: 0, zIndex: 100,
    }}>
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", fontWeight: 800, fontSize: "1.1rem", color: "#2C1810" }}>
        <Image src="/assets/yumtongla_logo.jpg" alt="Yum Tong'La" width={60} height={60}
          style={{ borderRadius: "50%", objectFit: "cover" }} />
        yumtongla
      </Link>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
        style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 4 }}
        className="nav-toggle">
        <span style={{ display: "block", width: 24, height: 2, background: "#2C1810", borderRadius: 2 }} />
        <span style={{ display: "block", width: 24, height: 2, background: "#2C1810", borderRadius: 2 }} />
        <span style={{ display: "block", width: 24, height: 2, background: "#2C1810", borderRadius: 2 }} />
      </button>

      {/* Nav */}
      <nav>
        <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          {navLinks.map(l => (
            <li key={l.label}>
              <Link href={l.href} style={{ color: "#2C1810", fontWeight: 500, fontSize: "0.95rem", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C41E3A")}
                onMouseLeave={e => (e.currentTarget.style.color = "#2C1810")}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Instagram */}
      <a href="https://www.instagram.com/yumtong1la" target="_blank" rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", gap: 6, color: "#C41E3A", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
        @yumtong1la
      </a>
    </header>
  );
}
