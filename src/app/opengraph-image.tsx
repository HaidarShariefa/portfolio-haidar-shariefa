import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0E14",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            borderRadius: 16,
            border: "1px solid #232B36",
            background: "#111722",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "20px 28px",
              background: "#161B22",
              borderBottom: "1px solid #232B36",
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 999,
                background: "#FF5F56",
                display: "flex",
              }}
            />
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 999,
                background: "#FFBD2E",
                display: "flex",
              }}
            />
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 999,
                background: "#27C93F",
                display: "flex",
              }}
            />
            <div
              style={{
                marginLeft: 12,
                fontFamily: "monospace",
                fontSize: 20,
                color: "#9AA4B2",
                display: "flex",
              }}
            >
              whoami
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              padding: "0 56px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "monospace",
                fontSize: 26,
                color: "#9AA4B2",
              }}
            >
              {profile.role}
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "sans-serif",
                fontWeight: 700,
                fontSize: 76,
                color: "#E6EDF3",
                marginTop: 12,
              }}
            >
              {profile.name}
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "monospace",
                fontSize: 32,
                color: "#22D3EE",
                marginTop: 20,
              }}
            >
              {profile.tagline}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
