const offers = [
  { tag: "Frozen", icon: "🧊", name: "Frozen Soup Packs", chinese: "急凍湯包", desc: "Convenient ready-to-heat soup packs. Just boil and enjoy authentic Cantonese soup any time.", benefitIcon: "🌿", benefit: "No preservatives · 無防腐劑 · Stays fresh for 3 months" },
  { tag: "Dried", icon: "🌾", name: "Dried Soup Herb Packets", chinese: "煲湯料包", desc: "Pre-portioned dried herb packets. Just add water and your choice of meat for a perfect soup.", benefitIcon: "🌿", benefit: "Traditional herbs · 傳統草藥 · Easy to prepare" },
  { tag: "Bundle", icon: "🎁", name: "Gift Bundle Set", chinese: "禮品套裝", desc: "A thoughtful gift set containing 4 assorted dried soup packets, beautifully packaged.", benefitIcon: "🎀", benefit: "Perfect for gifting · 送禮自用兩相宜" },
];

export default function SpecialOffer() {
  return (
    <section id="special-offer" style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: "0.85rem", letterSpacing: 3, textTransform: "uppercase", color: "#C41E3A", fontWeight: 600, marginBottom: 12 }}>
            Limited Time · 限時優惠
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#2C1810", marginBottom: 20, fontWeight: 800 }}>
            ✨ Special Offer ✨
          </h2>
          <div style={{ display: "inline-block", background: "#C41E3A", color: "#fff", padding: "12px 32px", borderRadius: 50, fontSize: "1.3rem", fontWeight: 800, letterSpacing: 1 }}>
            $6 each · 2 for $10
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 48 }}>
          {offers.map((o, i) => (
            <div key={i} className="card-hover" style={{
              background: "#fff", borderRadius: 16, padding: "28px 24px",
              boxShadow: "0 2px 16px rgba(196,30,58,0.08)", border: "1px solid #FFE8E8",
            }}>
              <div style={{ display: "inline-block", background: "#FFF0F0", color: "#C41E3A", fontSize: "0.75rem", fontWeight: 700, padding: "4px 12px", borderRadius: 50, marginBottom: 16, letterSpacing: 1, textTransform: "uppercase" }}>{o.tag}</div>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{o.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#2C1810", marginBottom: 4, lineHeight: 1.4 }}>{o.name}</h3>
              <p style={{ fontSize: "0.9rem", color: "#C41E3A", marginBottom: 12, fontWeight: 500 }}>{o.chinese}</p>
              <p style={{ fontSize: "0.85rem", color: "#6B4C3B", lineHeight: 1.5, marginBottom: 16 }}>{o.desc}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#FFF8F0", borderRadius: 8, padding: "10px 14px", fontSize: "0.82rem", color: "#6B4C3B", lineHeight: 1.4 }}>
                <span>{o.benefitIcon}</span><span>{o.benefit}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#6B4C3B", marginBottom: 20, fontSize: "0.95rem" }}>
            Pick up in Downtown Toronto · Free delivery with purchase of $30 (weekend only)
          </p>
          <a href="https://www.instagram.com/yumtong1la" target="_blank" rel="noopener noreferrer" className="btn-red">
            Order Now · 立即落單
          </a>
        </div>
      </div>
    </section>
  );
}
