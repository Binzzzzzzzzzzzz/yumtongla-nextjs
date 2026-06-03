const steps = [
  { icon: "📱", title: "DM on Instagram", desc: "Send us a direct message on Instagram @yumtong1la with your order and delivery details · 私訊我們Instagram落單" },
  { icon: "💳", title: "Confirm & Pay", desc: "We'll confirm your order and send payment instructions via e-transfer · 確認訂單後以電子轉帳付款" },
  { icon: "🍲", title: "Receive & Enjoy", desc: "We'll deliver your freshly-made soup right to your door · 新鮮製造，送上門！" },
];

export default function HowToOrder() {
  return (
    <section id="how-to-order" style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: "0.85rem", letterSpacing: 3, textTransform: "uppercase", color: "#C41E3A", fontWeight: 600, marginBottom: 12 }}>
            Simple & Easy
          </p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#2C1810", marginBottom: 12, fontWeight: 800 }}>
            How to Order · 如何落單
          </h2>
          <p style={{ color: "#6B4C3B", fontSize: "1rem", lineHeight: 1.6 }}>
            Ordering is simple — follow these 3 easy steps
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32, marginBottom: 48, position: "relative" }}>
          {steps.map((step, i) => (
            <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <div style={{
                width: 56, height: 56, background: "#C41E3A", color: "#fff", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.3rem", fontWeight: 800, margin: "0 auto 16px", position: "relative", zIndex: 2,
              }}>{i + 1}</div>
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{step.icon}</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#2C1810", marginBottom: 8 }}>{step.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#6B4C3B", lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", background: "#FFF0F0", border: "1px solid #FFD0D0", borderRadius: 12, padding: "20px 32px" }}>
          <p style={{ color: "#C41E3A", fontSize: "0.95rem", lineHeight: 1.6 }}>
            📦 Free delivery on orders over $60 · 訂單滿$60免費送貨 · Delivery available in Toronto area
          </p>
        </div>
      </div>
    </section>
  );
}
