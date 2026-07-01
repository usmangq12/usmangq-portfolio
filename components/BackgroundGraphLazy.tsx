"use client";

import dynamic from "next/dynamic";

// Client-only + lazy: keeps the SVG out of the server HTML so it never blocks
// the hero's LCP. The chunk loads and mounts after hydration.
const BackgroundGraph = dynamic(() => import("./BackgroundGraph"), {
  ssr: false,
});

export default function BackgroundGraphLazy() {
  return <BackgroundGraph />;
}
