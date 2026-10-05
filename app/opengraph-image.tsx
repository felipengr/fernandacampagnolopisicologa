import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { defaultContent } from "@/lib/content/default-content";

// Imagem que aparece ao compartilhar o link (WhatsApp, Instagram, Facebook…).
export const alt = "Maria Fernanda Campagnolo, psicóloga online – CRP 06/213950";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  cream: "#f5f2ec",
  forest: "#3b5a4a",
  plum: "#4a3450",
  ink: "#2e2a30",
  muted: "#66626a",
  sand: "#e9e6dd",
};

export default async function OpengraphImage() {
  const [serif, sans, portrait] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/CormorantGaramond-500.ttf")),
    readFile(join(process.cwd(), "assets/fonts/DMSans-500.ttf")),
    readFile(join(process.cwd(), "public/images/fernanda-retrato.jpg")),
  ]);
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;
  const { profile } = defaultContent;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: colors.cream, padding: 56 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, paddingRight: 48 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                background: colors.sand,
                color: colors.ink,
                borderRadius: 999,
                padding: "10px 22px",
                fontFamily: "DM Sans",
                fontSize: 24,
              }}
            >
              {`${profile.role} • ${profile.crp}`}
            </div>
            <div
              style={{
                marginTop: 36,
                fontFamily: "Cormorant",
                fontSize: 86,
                lineHeight: 1,
                color: colors.ink,
              }}
            >
              {profile.name}
            </div>
            <div style={{ marginTop: 28, fontFamily: "DM Sans", fontSize: 30, lineHeight: 1.4, color: colors.muted }}>
              Atendimento psicológico online, olhar especial para a terceira idade e palestras sobre saúde mental.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: colors.forest,
              color: "white",
              borderRadius: 999,
              padding: "16px 30px",
              fontFamily: "DM Sans",
              fontSize: 26,
            }}
          >
            Agende sua conversa pelo WhatsApp
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portraitSrc}
          alt=""
          width={430}
          height={518}
          style={{ borderRadius: 36, objectFit: "cover", objectPosition: "50% 20%" }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: serif, style: "normal", weight: 500 },
        { name: "DM Sans", data: sans, style: "normal", weight: 500 },
      ],
    },
  );
}
