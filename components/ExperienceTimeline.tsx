"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/Section";
import { experiences, type ExperienceEntry } from "@/lib/data";

function TimelineEntry({
  entry,
  index,
  reduce,
}: {
  entry: ExperienceEntry;
  index: number;
  reduce: boolean;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      className="relative"
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.1 }}
    >
      <span
        className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-background"
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-3 rounded-lg text-left"
      >
        <span className="min-w-0">
          <span className="block font-semibold text-white">{entry.role}</span>
          <span className="mt-0.5 block text-sm">
            <span className="text-accent-light">{entry.company}</span>
            <span className="text-secondary"> · {entry.companyDescription}</span>
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <time className="whitespace-nowrap text-xs text-secondary">
            {entry.period}
          </time>
          <ChevronDown
            className={`h-4 w-4 text-secondary transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : 0.3, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <ul className="mt-3 space-y-2 pt-1">
          {entry.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm text-secondary">
              <span aria-hidden="true" className="text-accent-light">
                –
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const reduce = !!useReducedMotion();

  return (
    <Section id="experience">
      <Reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Experience</h2>
      </Reveal>

      <div className="relative mt-10 pl-8">
        <div
          className="absolute bottom-2 left-[7px] top-2 w-px bg-border"
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-accent"
          aria-hidden="true"
          initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        <div className="space-y-6">
          {experiences.map((entry, i) => (
            <TimelineEntry
              key={entry.company}
              entry={entry}
              index={i}
              reduce={reduce}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
