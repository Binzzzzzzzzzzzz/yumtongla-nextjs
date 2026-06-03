import Image from "next/image";

const badges = [
  { icon: "✅", text: "No Preservatives" },
  { icon: "🍃", text: "Fresh Daily" },
  { icon: "❤️", text: "Made with Love" },
  { icon: "🏡", text: "Toronto Made" },
  { icon: "🌿", text: "Traditional Recipe" },
];

export default function AboutUs() {
  return (
    <section id="about-us" style={{ padding: "80px 24px", background: "#FFF8F0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 64, alignItems: "center", flexWrap: "wrap" }}>

        {/* Image */}
        <div style={{ flex: 1, minWidth: 280, display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 340, height: 340, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#C41E3A", opacity: 0.08 }} />
            <div style={{ position: "absolute", top: 40, left: 40, width: 260, height: 260, borderRadius: "50%", background: "#F2A65A", opacity: 0.06 }} />
            <div style={{ position: "absolute", top: 80, left: 80, width: 180, height: 180, borderRadius: "50%", background: "#C41E3A", opacity: 0.05 }} />
            <Image src="/assets/yumtongla_logo.jpg" alt="Yum Tong'La" width={220} height={220}
              style={{ borderRadius: "50%", objectFit: "cover", position: "relative", zIndex: 2, boxShadow: "0 8px 32px rgba(196,30,58,0.25)" }} />
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ fontSize: "0.85rem", letterSpacing: 3, textTransform: "uppercase", color: "#C41E3A", fontWeight: 600, marginBottom: 12 }}>
            Our Story · 我們的故事
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#2C1810", marginBottom: 24, fontWeight: 800, lineHeight: 1.3 }}>
            重拾家的味道 · Taste of Home
          </h2>
          <p style={{ color: "#6B4C3B", lineHeight: 1.8, marginBottom: 16, fontSize: "1rem" }}>
            Yum Tong&apos;La was born from a simple belief — that a good bowl of soup can bring you home, no matter where you are. Our soups are inspired by traditional Cantonese recipes passed down through generations.
          </p>
          <p style={{ color: "#6B4C3B", lineHeight: 1.8, marginBottom: 32, fontSize: "1rem" }}>
            Every soup is freshly made daily using quality ingredients, slow-cooked the traditional way. No shortcuts, no preservatives — just pure, nourishing goodness made with love in Toronto.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {badges.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, background: "#FFF0F0", border: "1px solid #FFD0D0", borderRadius: 50, padding: "8px 16px" }}>
                <span style={{ fontSize: "1.1rem" }}>{b.icon}</span>
                <span style={{ fontSize: "0.85rem", color: "#C41E3A", fontWeight: 600 }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
