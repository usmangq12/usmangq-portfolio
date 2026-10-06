const links = [
  { href: "#social", label: "Social" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#missions", label: "Writing" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4 text-sm">
        <a href="#top" className="font-semibold text-foreground">
          Muhammad Usman
        </a>
        <div className="flex gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
