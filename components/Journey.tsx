"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/Section";
import { experiences } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const APPROACH =
  "Platform engineering in the age of AI-assisted development: I build the CI/CD, auth, and security foundations that let teams ship fast with AI-generated code without shipping broken systems.";

type Node = {
  period: string;
  role: string;
  company: string;
  tags: string[];
  isToday?: boolean;
};

export default function Journey() {
  const reduce = !!useReducedMotion();

  const nodes: Node[] = [
    ...[...experiences].reverse().map((e) => ({
      period: e.period.split(" – ")[0],
      role: e.startRole ?? e.role,
      company: e.company,
      tags: e.tags,
    })),
    {
      period: "Today",
      role: siteConfig.role,
      company: "PLYAZ",
      tags: [],
      isToday: true,
    },
  ];

  const inset = 100 / (2 * nodes.length);

  return (
    <Section id="journey">
      <Reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Journey</h2>
        <p className="mt-2 text-secondary">
          Seven years, five roles, one throughline: making other engineers
          faster.
        </p>
        <p className="mt-1 text-xs text-secondary/70 md:hidden">
          Swipe to explore →
        </p>
      </Reveal>

      <div className="relative mt-12 overflow-x-auto pb-2">
        <div className="relative flex min-w-[820px] md:min-w-0">
          <div
            aria-hidden="true"
            className="absolute top-[7px] h-px bg-border"
            style={{ left: `${inset}%`, right: `${inset}%` }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute top-[7px] h-px origin-left bg-accent"
            style={{ left: `${inset}%`, right: `${inset}%` }}
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {nodes.map((node, i) => (
            <motion.div
              key={`${node.company}-${node.period}`}
              className="flex-1 px-2"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: reduce ? 0 : i * 0.08 }}
            >
              <div className="flex justify-center">
                <span
                  className={`h-3.5 w-3.5 rounded-full ring-4 ring-background ${
                    node.isToday
                      ? "animate-pulse bg-terminal"
                      : "bg-accent"
                  }`}
                />
              </div>
              <div className="mt-4 text-center">
                <time className="text-xs text-secondary">{node.period}</time>
                <h3 className="mt-1 text-sm font-semibold text-white">
                  {node.role}
                </h3>
                <p className="text-xs text-accent-light">{node.company}</p>
                {node.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {node.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-border bg-surface px-2 py-0.5 text-[11px] text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-secondary sm:text-base">
          {APPROACH}
        </p>
      </Reveal>
    </Section>
  );
}
