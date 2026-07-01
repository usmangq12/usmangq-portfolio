"use client";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/Section";
import { TerminalCard } from "@/components/TerminalCard";

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <Reveal>
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">About</h2>
            <p className="mt-5 text-base leading-relaxed text-secondary sm:text-lg">
              I build the platform layer that product engineers build on.
              Monorepo foundations, CI/CD pipelines, auth stacks, security
              hardening, observability, developer tooling — the systems that are
              invisible when they work and catastrophic when they do not.
              Currently owning the engineering infrastructure at{" "}
              <span className="text-white">PLYAZ</span>, a Web3 fan-engagement
              platform. Previously embedded in{" "}
              <span className="text-white">Microsoft&apos;s Power BI</span>{" "}
              accessibility team via Akvelon.{" "}
              <span className="text-white">Arbitrum Developer Certified.</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <TerminalCard />
        </Reveal>
      </div>
    </Section>
  );
}
