import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-between gap-3 px-6 py-10 text-sm text-secondary">
        <span>© 2026 {siteConfig.name}</span>
        <a
          href={`mailto:${siteConfig.links.email}`}
          className="text-accent-light hover:underline"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
