import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dipendra Bhatta - CTO & Co-founder at AIPrep",
    short_name: "Dipendra Bhatta",
    description:
      "Portfolio of Dipendra Bhatta (Dipen) - CTO & Co-founder at AIPrep. AI Infrastructure Engineer, Full Stack Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#00ffcc",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
