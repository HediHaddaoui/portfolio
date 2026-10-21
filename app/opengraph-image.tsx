import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#07090e",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, color: "#67e8f9" }}>{profile.title}</div>
        <div style={{ fontSize: 72, fontWeight: 650, marginTop: 16 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 28, color: "#94a3b8", marginTop: 24, maxWidth: 900 }}>
          {profile.shortBio}
        </div>
      </div>
    ),
    size,
  );
}
