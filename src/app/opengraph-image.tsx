import { ImageResponse } from "next/og";

export const alt = "King Eventos — Organização de eventos em Sorocaba - SP";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0B",
          color: "#F6F1E7",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 28,
            right: 28,
            bottom: 28,
            left: 28,
            border: "1px solid #C7A250",
            opacity: 0.55,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 14,
            textTransform: "uppercase",
            color: "#C7A250",
          }}
        >
          Sorocaba &nbsp;•&nbsp; SP
        </div>
        <div style={{ display: "flex", fontSize: 104, fontWeight: 700, marginTop: 8 }}>
          KING EVENTOS
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            marginTop: 10,
            color: "rgba(246,241,231,0.75)",
          }}
        >
          Transformamos momentos em experiências inesquecíveis
        </div>
      </div>
    ),
    { ...size },
  );
}
