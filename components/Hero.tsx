import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-2xl px-6 pb-4 pt-16 sm:pt-24">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {siteConfig.name}
      </h1>

      <p className="mt-3 font-mono text-base text-foreground sm:text-lg">
        {siteConfig.role}
      </p>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground sm:text-lg">
        I build the infrastructure layer engineering teams stand on —
        monorepos, CI/CD, auth, security, developer tooling. In the age of
        AI-assisted development, that&apos;s the layer that matters most: the
        guardrails that let teams ship fast without shipping broken systems.
        Currently owning engineering infrastructure at{" "}
        <span className="font-semibold">PLYAZ</span>, a Web3 fan-engagement
        platform; previously embedded in{" "}
        <span className="font-semibold">Microsoft&apos;s Power BI</span>{" "}
        accessibility team via Akvelon.{" "}
        <span className="font-semibold">Arbitrum Developer Certified.</span> See
        my{" "}
        <a href="#experience" className="text-accent-light hover:underline">
          experience
        </a>
        ,{" "}
        <a href="#skills" className="text-accent-light hover:underline">
          skills
        </a>
        , and{" "}
        <a href="#missions" className="text-accent-light hover:underline">
          writing
        </a>{" "}
        below.
      </p>
    </section>
  );
}
