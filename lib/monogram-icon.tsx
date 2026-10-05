import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Ícone "MF" (aba do navegador, resultados do Google e tela inicial do celular).
export async function monogramIcon(size: number, rounded: boolean) {
  const serif = await readFile(join(process.cwd(), "assets/fonts/CormorantGaramond-500.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#3b5a4a",
          borderRadius: rounded ? size * 0.22 : 0,
          color: "#f5f2ec",
          fontFamily: "Cormorant",
          fontSize: size * 0.56,
          letterSpacing: -size * 0.02,
          paddingBottom: size * 0.06,
        }}
      >
        MF
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: "Cormorant", data: serif, style: "normal", weight: 500 }],
    },
  );
}
