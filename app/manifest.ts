import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name, short_name: "R. Andriamandimby", description: SITE.description, start_url: "/", display: "standalone",
    background_color: "#2a2c2f", theme_color: "#2a2c2f", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
