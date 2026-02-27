import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Volo — Pilot Companion",
    short_name: "Volo",
    description:
      "Aviation assistant for Turkish Airlines pilots. Calculators, weather suitability, crew rest planning, and bilingual cabin briefings.",
    start_url: "/",
    display: "standalone",
    background_color: "#050810",
    theme_color: "#050810",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
