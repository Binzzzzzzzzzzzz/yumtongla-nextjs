"use client";
import { useState, useEffect } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = document.cookie.includes("yumtongla_announcement=dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    setVisible(false);
    const exp = new Date();
    exp.setDate(exp.getDate() + 7);
    document.cookie = `yumtongla_announcement=dismissed; expires=${exp.toUTCString()}; path=/`;
  };

  if (!visible) return null;

  return (
    <div style={{
      backgroundColor: "#C41E3A", color: "#fff",
      display: "flex", justifyContent: "center", alignItems: "center",
      padding: "10px 24px", position: "relative", fontSize: "0.9rem", fontWeight: 500,
    }}>
      <p>🚚 Free delivery on orders over $60 · 訂單滿$60免費送貨 · Toronto area only</p>
      <button onClick={dismiss} aria-label="Close" style={{
        position: "absolute", right: 16, background: "none", border: "none",
        color: "#fff", fontSize: "1rem", cursor: "pointer", opacity: 0.7, lineHeight: 1,
      }}>✕</button>
    </div>
  );
}
