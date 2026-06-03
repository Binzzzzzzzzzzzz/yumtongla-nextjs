import Link from "next/link";

export default function HeroBanner() {
  return (
    <section style={{
      minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "60px 24px", backgroundColor: "#FFF8F0",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C41E3A' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <p style={{ fontSize: "1rem", letterSpacing: 3, textTransform: "uppercase", color: "#C41E3A", marginBottom: 16, fontWeight: 600 }}>
          多倫多 Toronto · 每日新鮮製造
        </p>
        <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 3.5rem)", color: "#2C1810", marginBottom: 20, lineHeight: 1.2, fontWeight: 800 }}>
          飲湯啦 Yum Tong&apos;La
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#6B4C3B", marginBottom: 40, lineHeight: 1.6 }}>
          重拾家的味道 · Delicious Healthy Chinese Soup · 老火湯
        </p>
        <Link href="#monthly-menu" className="btn-red">
          View This Month&apos;s Menu
        </Link>
      </div>
    </section>
  );
}
