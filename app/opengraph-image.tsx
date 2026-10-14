import { ImageResponse } from "next/og";

export const alt = "Codenefy — Build your next move. Software, ecommerce, and creative services.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ display: "flex", width: "100%", height: "100%", background: "#0b0c0b", color: "white", padding: "65px 75px", flexDirection: "column", justifyContent: "space-between", fontFamily: "sans-serif" }}><div style={{ display: "flex", fontSize: 36, fontWeight: 700 }}>Codenefy<span style={{ color: "#79ff03" }}>_</span></div><div style={{ display: "flex", flexDirection: "column", fontSize: 84, lineHeight: 1.1, fontWeight: 700, letterSpacing: -4 }}><span>Build your next move.</span><span style={{ color: "#79ff03" }}>With Codenefy.</span></div><div style={{ display: "flex", borderTop: "1px solid #30332d", paddingTop: 24, color: "#acb1a7", fontSize: 21 }}>Software engineering · Ecommerce · Creative services</div></div>, { ...size });
}
