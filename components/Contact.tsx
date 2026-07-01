"use client";

import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

const contacts: { Icon: LucideIcon; label: string; handle: string; href: string }[] =
  [
    {
      Icon: Mail,
      label: "Email",
      handle: siteConfig.links.email,
      href: `mailto:${siteConfig.links.email}`,
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      handle: "muhammad-usman",
      href: siteConfig.links.linkedin,
    },
    {
      Icon: Github,
      label: "GitHub",
      handle: "usmangq12",
      href: siteConfig.links.github,
    },
  ];

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Get in Touch
        </h2>
      </Reveal>

      <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-3">
        {contacts.map(({ Icon, label, handle, href }) => {
          const external = !href.startsWith("mailto:");
          return (
            <RevealItem key={label} className="h-full">
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group flex h-full flex-col items-start gap-3 rounded-xl border border-border bg-surface p-6 transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-glow"
              >
                <Icon className="h-6 w-6 text-accent-light" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-white">{label}</span>
                  <span className="mt-1 block break-all text-sm text-secondary">
                    {handle}
                  </span>
                </span>
              </a>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
