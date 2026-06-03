import Image from "next/image";
import soups from "@/data/soups.json";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTHS_ZH = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];

export default function MonthlyMenu() {
  const now = new Date();
  const month = MONTHS[now.getMonth()];
  const monthZh = MONTHS_ZH[now.getMonth()];

  return (
    <section id="monthly-menu" style={{ padding: "80px 24px", backgroundColor: "#FFF8F0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: "0.85rem", letterSpacing: 3, textTransform: "uppercase", color: "#C41E3A", fontWeight: 600, marginBottom: 12 }}>
            This Month&apos;s Selection
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#2C1810", marginBottom: 12, fontWeight: 800 }}>
            {month} Menu {monthZh}湯單
          </h2>
          <p style={{ color: "#6B4C3B", fontSize: "1rem", maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
            Fresh daily · 每日新鮮製造 · Made with love
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginBottom: 48 }}>
          {soups.map((soup) => (
            <div key={soup.id} className="card-hover" style={{
              background: "#fff", borderRadius: 16, overflow: "hidden",
              boxShadow: "0 2px 16px rgba(196,30,58,0.08)", border: "1px solid #FFE8E8",
            }}>
              <div style={{ width: "100%", height: 200, position: "relative" }}>
                <Image src={soup.image} alt={soup.name} fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#2C1810", marginBottom: 4, lineHeight: 1.4 }}>
                  {soup.name}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#C41E3A", marginBottom: 12, fontWeight: 500 }}>
                  {soup.chinese}
                </p>
                <p style={{ fontSize: "0.85rem", color: "#6B4C3B", lineHeight: 1.5, marginBottom: 16 }}>
                  {soup.ingredients}
                </p>
                <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#C41E3A" }}>
                  {soup.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#6B4C3B", marginBottom: 20, fontSize: "0.95rem" }}>
            DM us on Instagram to place your order · 請私訊我們落單
          </p>
          <a href="https://www.instagram.com/yumtong1la" target="_blank" rel="noopener noreferrer" className="btn-red">
            Order Now · 立即落單
          </a>
        </div>
      </div>
    </section>
  );
}
