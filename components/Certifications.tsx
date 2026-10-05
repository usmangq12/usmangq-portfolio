"use client";

import { Award } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/Section";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <Section id="certifications">
      <Reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Certifications
        </h2>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <RevealItem key={cert.name} className="h-full">
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-6 transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-glow"
            >
              <Award
                className="h-6 w-6 text-accent-light"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-white">{cert.name}</h3>
                <p className="mt-1 text-sm text-secondary">{cert.issuer}</p>
              </div>
              <span className="mt-auto break-all text-xs text-accent-light underline-offset-4 group-hover:underline">
                {cert.credentialLabel}
              </span>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
