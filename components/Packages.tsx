"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/Section";
import { platformPackages, type PackageBadge } from "@/lib/data";

const badgeStyles: Record<PackageBadge, string> = {
  Solo: "border-terminal/40 bg-terminal/10 text-terminal",
  Collaborated: "border-accent-light/40 bg-accent/10 text-accent-light",
  Architecture: "border-orange-400/40 bg-orange-400/10 text-orange-400",
};

export default function Packages() {
  return (
    <Section id="packages">
      <Reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Platform Packages
        </h2>
        <p className="mt-2 text-secondary">
          Internal packages built and maintained at PLYAZ
        </p>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {platformPackages.map((pkg) => (
          <RevealItem key={pkg.name} className="h-full">
            <div className="group flex h-full flex-col rounded-xl border border-border bg-surface p-5 transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-glow">
              <div className="flex items-start justify-between gap-3">
                <h3 className="break-all font-mono text-sm text-accent-light">
                  {pkg.name}
                </h3>
                <span
                  className={`shrink-0 rounded-full border px-2 py-0.5 text-xs ${badgeStyles[pkg.badge]}`}
                >
                  {pkg.badge}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-secondary">
                {pkg.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {pkg.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-border bg-background px-2 py-0.5 text-xs text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
