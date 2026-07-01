"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/Section";
import { expertiseDomains } from "@/lib/data";

export default function Expertise() {
  return (
    <Section id="expertise">
      <Reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ownership Domains
        </h2>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {expertiseDomains.map(({ icon: Icon, title, description }) => (
          <RevealItem key={title} className="h-full">
            <div className="group h-full rounded-xl border border-border bg-surface p-5 transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-glow">
              <Icon className="h-6 w-6 text-accent-light" aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {description}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
