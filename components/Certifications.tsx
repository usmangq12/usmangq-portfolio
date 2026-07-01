"use client";

import { Award } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export default function Certifications() {
  return (
    <Section id="certifications">
      <Reveal className="mx-auto max-w-md">
        <div className="rounded-xl border border-accent/40 bg-surface p-8 text-center shadow-glow">
          <Award
            className="mx-auto h-10 w-10 text-accent-light"
            aria-hidden="true"
          />
          <h2 className="mt-4 text-xl font-bold text-white">
            Arbitrum Developer Certified
          </h2>
          <p className="mt-2 text-sm text-secondary">
            Verified profile:{" "}
            <a
              href={siteConfig.links.hackquest}
              target="_blank"
              rel="noreferrer"
              className="text-accent-light underline-offset-4 hover:underline"
            >
              hackquest.io/user/437978
            </a>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
