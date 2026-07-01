"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const NODE_COUNT = 36;
const CONNECT_DIST = 170; // px — nodes closer than this get a line
const MIN_SPEED = 6; // px/s — deliberately slow drift
const MAX_SPEED = 13; // px/s

type Node = { x: number; y: number; vx: number; vy: number };

/**
 * Full-viewport animated network graph rendered behind all content.
 * - One <path> holds every connecting line (cheap DOM), circles are the nodes.
 * - Positions are mutated imperatively via refs so React never re-renders per frame.
 * - Pauses on tab hide, respects prefers-reduced-motion (static single frame).
 */
export default function BackgroundGraph() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const circlesRef = useRef<SVGCircleElement[]>([]);
  const nodesRef = useRef<Node[]>([]);
  const rafRef = useRef<number | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let last = 0;

    const rand = (min: number, max: number) =>
      min + Math.random() * (max - min);

    const applySize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      svg.setAttribute("width", String(width));
      svg.setAttribute("height", String(height));
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    };

    const initNodes = () => {
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => {
        const speed = rand(MIN_SPEED, MAX_SPEED);
        const angle = rand(0, Math.PI * 2);
        return {
          x: rand(0, width),
          y: rand(0, height),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        };
      });
    };

    const render = () => {
      const nodes = nodesRef.current;
      const circles = circlesRef.current;
      for (let i = 0; i < nodes.length; i++) {
        const c = circles[i];
        if (c) {
          c.setAttribute("cx", nodes[i].x.toFixed(1));
          c.setAttribute("cy", nodes[i].y.toFixed(1));
        }
      }
      let d = "";
      const maxSq = CONNECT_DIST * CONNECT_DIST;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (dx * dx + dy * dy < maxSq) {
            d += `M${nodes[i].x.toFixed(1)} ${nodes[i].y.toFixed(1)}L${nodes[
              j
            ].x.toFixed(1)} ${nodes[j].y.toFixed(1)}`;
          }
        }
      }
      pathRef.current?.setAttribute("d", d);
    };

    const step = (t: number) => {
      if (!last) last = t;
      const dt = Math.min((t - last) / 1000, 0.05);
      last = t;
      for (const n of nodesRef.current) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x <= 0) {
          n.x = 0;
          n.vx *= -1;
        } else if (n.x >= width) {
          n.x = width;
          n.vx *= -1;
        }
        if (n.y <= 0) {
          n.y = 0;
          n.vy *= -1;
        } else if (n.y >= height) {
          n.y = height;
          n.vy *= -1;
        }
      }
      render();
      rafRef.current = requestAnimationFrame(step);
    };

    const start = () => {
      if (rafRef.current != null || prefersReduced) return;
      last = 0;
      rafRef.current = requestAnimationFrame(step);
    };

    const stop = () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const onResize = () => {
      applySize();
      for (const n of nodesRef.current) {
        n.x = Math.min(n.x, width);
        n.y = Math.min(n.y, height);
      }
      if (prefersReduced) render();
    };

    applySize();
    initNodes();
    render();
    start();

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, [prefersReduced]);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    >
      <path ref={pathRef} className="fill-none stroke-[#1A56A610]" strokeWidth={1} />
      {Array.from({ length: NODE_COUNT }).map((_, i) => (
        <circle
          key={i}
          r={2}
          className="fill-[#1A56A620]"
          ref={(el) => {
            if (el) circlesRef.current[i] = el;
          }}
        />
      ))}
    </svg>
  );
}
