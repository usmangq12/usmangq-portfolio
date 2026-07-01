"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/Section";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Technical Skills
        </h2>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <RevealItem key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border bg-surface px-3 py-1 text-sm text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
