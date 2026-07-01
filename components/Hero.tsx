"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useTypingEffect } from "@/lib/useTypingEffect";

const ROLES = [
  "Infrastructure & Platform Engineer",
  "Monorepo Architect",
  "CI/CD Specialist",
  "Auth & Security Engineer",
];

const socials = [
  { href: siteConfig.links.github, label: "GitHub", Icon: Github },
  { href: siteConfig.links.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${siteConfig.links.email}`, label: "Email", Icon: Mail },
];

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const typed = useTypingEffect(ROLES, { enabled: !prefersReduced });

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item: Variants = prefersReduced
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 14 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: "easeOut" },
        },
      };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="hero-radial pointer-events-none absolute inset-0 -z-10"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl px-6"
      >
        <motion.h1
          variants={item}
          className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 flex min-h-[1.75rem] items-center font-mono text-lg text-accent sm:min-h-[2.25rem] sm:text-2xl"
        >
          <span>{typed}</span>
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[0.1em] bg-accent animate-blink"
          />
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-base text-secondary sm:text-lg"
        >
          Building the systems that make engineering teams fast, safe, and
          consistent.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="group inline-flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-secondary transition-colors hover:border-border hover:bg-accent-glow hover:text-white"
            >
              <Icon
                className="h-4 w-4 text-secondary transition-colors group-hover:text-accent"
                aria-hidden="true"
              />
              {label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
