import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Boxes,
  Cloud,
  Fingerprint,
  ScanFace,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";

export type ExpertiseDomain = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const expertiseDomains: ExpertiseDomain[] = [
  {
    icon: Boxes,
    title: "Build System",
    description:
      "Turborepo/pnpm monorepo architecture. Build graph design, workspace linking, dependency normalization.",
  },
  {
    icon: Workflow,
    title: "CI/CD",
    description:
      "Reusable GitHub Actions workflows across 20+ packages. Semantic-release, preview environments, quality gates.",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Vercel, Supabase, Docker. Migration-gated startup, PWA cache versioning, multi-environment pipelines.",
  },
  {
    icon: Fingerprint,
    title: "Auth & Identity",
    description:
      "Stateless session architecture. 2FA/TOTP, OAuth, RBAC, GDPR controls. Clerk to better-auth migration.",
  },
  {
    icon: ScanFace,
    title: "KYC Platform",
    description:
      "Provider-agnostic identity verification. Stripe Identity and Paystack BVN routing by region and tier.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Cloudflare Turnstile, CSPRNG OTP, SQL injection defense, rate limiting, CSP headers, brute-force lockout.",
  },
  {
    icon: Activity,
    title: "Observability",
    description:
      "Isomorphic logging with browser and Node transports. Typed error framework. Tamper-evident audit logging.",
  },
  {
    icon: Wrench,
    title: "Developer Experience",
    description:
      "Shared ESLint/TS/Vitest configs, plop code-generation, golden-path templates, translation CLI.",
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  companyDescription: string;
  period: string;
  bullets: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    role: "Infrastructure & Platform Engineer",
    company: "PLYAZ",
    companyDescription: "Web3 fan-engagement platform",
    period: "May 2025 – Present",
    bullets: [
      "Migrated 15+ repos into a pnpm + Turborepo monorepo (22 packages, 7 apps).",
      "Standardized CI/CD across 20+ packages with reusable GitHub Actions workflows.",
      "Led the Clerk to better-auth migration with 2FA, OAuth, RBAC, and GDPR controls.",
      "Architected a provider-agnostic KYC platform (Stripe Identity + Paystack BVN).",
      "Hardened the platform: Cloudflare Turnstile, CSPRNG OTP, SQL injection defense, rate limiting.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "Akvelon / Microsoft Power BI",
    companyDescription: "Enterprise BI & analytics, embedded via Akvelon",
    period: "Oct 2023 – Apr 2025",
    bullets: [
      "Resolved WCAG 2.1 failures across Power BI dashboards.",
      "Fixed ARIA labelling, tab order, and focus-indicator regressions.",
      "Established keyboard-only regression testing protocols with QA.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Antisocial Labs",
    companyDescription: "Web3 & mobile product studio",
    period: "Apr 2022 – Sep 2023",
    bullets: [
      "Built the antisocialapeclub NFT marketplace on NEAR Protocol.",
      "Delivered 4 React Native apps: sports tracker, disaster-response map, food journal, movement journal.",
    ],
  },
  {
    role: "Middle Frontend Developer",
    company: "SHARE Mobility",
    companyDescription: "Ride-hailing & mobility platform",
    period: "Jul 2020 – Mar 2022",
    bullets: [
      "Built the ride-hailing core module.",
      "Implemented Google Maps route management.",
      "Built a Twilio AI auto-response system.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Curiato",
    companyDescription: "Healthcare IoT & clinical analytics",
    period: "Oct 2018 – Jun 2020",
    bullets: [
      "Built real-time D3.js patient-condition charts from IoT feeds.",
      "Built Power BI clinical dashboards.",
    ],
  },
];

export type PackageBadge = "Solo" | "Collaborated" | "Architecture";

export type PlatformPackage = {
  name: string;
  description: string;
  tags: string[];
  badge: PackageBadge;
};

export const platformPackages: PlatformPackage[] = [
  {
    name: "@plyaz/devtools",
    description:
      "Shared ESLint, TypeScript, Vitest, Vite, and Tailwind configs. One enforced standard across every package.",
    tags: ["ESLint", "TypeScript", "Vitest", "Vite"],
    badge: "Solo",
  },
  {
    name: "@plyaz/logger",
    description:
      "Isomorphic logging API with browser and Node transports, adapters, and field-level redaction.",
    tags: ["TypeScript", "Node", "Browser"],
    badge: "Solo",
  },
  {
    name: "@plyaz/errors",
    description:
      "Typed error classes, NestJS exception filters, and secure non-leaking responses.",
    tags: ["TypeScript", "NestJS"],
    badge: "Solo",
  },
  {
    name: "@plyaz/e2e",
    description:
      "Playwright Page Object Model framework with fixtures, path aliases, and API/token helpers.",
    tags: ["Playwright", "POM", "TypeScript"],
    badge: "Solo",
  },
  {
    name: "@plyaz/translations",
    description:
      "TypeScript-parser-to-JSON CLI. 6 locales, 32 locale files kept in lockstep.",
    tags: ["TypeScript", "CLI", "i18n"],
    badge: "Solo",
  },
  {
    name: "@plyaz/core (KYC module)",
    description:
      "Provider-agnostic KYC platform. Stripe Identity + Paystack BVN adapter pattern, HMAC webhook verification, Redis idempotent dedup.",
    tags: ["Stripe Identity", "Paystack", "Redis", "HMAC"],
    badge: "Architecture",
  },
];

export type SkillGroup = { title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Monorepo & Build",
    skills: ["Turborepo", "pnpm workspaces", "Vite", "tsup", "semantic-release", "Changesets"],
  },
  {
    title: "CI/CD",
    skills: ["GitHub Actions", "Lighthouse CI", "Chromatic", "Docker", "docker-compose"],
  },
  {
    title: "Cloud & Infra",
    skills: ["Vercel", "Supabase", "Railway", "AWS"],
  },
  {
    title: "Auth & Security",
    skills: ["better-auth", "OAuth", "2FA/TOTP", "Cloudflare Turnstile", "RBAC", "GDPR"],
  },
  {
    title: "Languages",
    skills: ["TypeScript", "Node.js", "SQL", "Solidity"],
  },
  {
    title: "Frameworks",
    skills: ["NestJS", "Next.js", "React", "React Native"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Redis", "MongoDB", "Firebase"],
  },
  {
    title: "Testing",
    skills: ["Playwright", "Vitest", "Storybook", "Chromatic"],
  },
  {
    title: "Blockchain",
    skills: ["Arbitrum", "Solana", "NEAR Protocol", "ethers.js"],
  },
];
