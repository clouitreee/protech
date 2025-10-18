import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF8F5",
          color: "#151515",
          fontSize: 72,
          fontWeight: 700,
        }}
      >
        Tech Hilfe Pro NRW
      </div>
    ),
    size
  );
}

