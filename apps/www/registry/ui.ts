import { Registry } from "@/registry/schema"

export const ui: Registry = [
  {
    name: "text-animate",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["ui/text-animate.tsx"],
  },
  {
    name: "texture-button",
    type: "components:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui/texture-button.tsx"],
  },
  {
    name: "texture-card",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/texture-card.tsx"],
  },
  {
    name: "shift-card",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/shift-card.tsx"],
  },
  {
    name: "minimal-card",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/minimal-card.tsx"],
  },
  {
    name: "dynamic-island",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["ui/dynamic-island.tsx"],
  },
  {
    name: "direction-aware-tabs",
    type: "components:ui",
    dependencies: ["framer-motion", "react-use-measure"],
    files: ["ui/direction-aware-tabs.tsx"],
  },
  {
    name: "bg-animate-button",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/bg-animate-button.tsx"],
  },
  {
    name: "family-button",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/family-button.tsx"],
  },
  {
    name: "side-panel",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/side-panel.tsx"],
  },
  {
    name: "bg-media",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/bg-media.tsx"],
  },
  {
    name: "three-d-carousel",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/three-d-carousel.tsx"],
  },
  {
    name: "tweet-grid",
    type: "components:ui",
    dependencies: [""],
    files: ["ui/tweet-grid.tsx"],
  },
  {
    name: "gradient-heading",
    type: "components:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui/gradient-heading.tsx"],
  },
  {
    name: "typewriter",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["ui/typewriter.tsx"],
  },
  {
    name: "animated-number",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["ui/animated-number.tsx"],
  },
]
