import type { ReactNode } from "react";

/** Consistent section wrapper: centered container, horizontal padding, vertical rhythm. */
export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-2xl scroll-mt-16 px-6 py-16 sm:py-20 ${className}`}
    >
      {children}
    </section>
  );
}
