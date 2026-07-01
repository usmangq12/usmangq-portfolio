import { useEffect, useState } from "react";

type Options = {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseEnd?: number;
  pauseStart?: number;
  enabled?: boolean;
};

/**
 * Cycles through `words` with a typewriter type/delete effect.
 * When `enabled` is false (e.g. prefers-reduced-motion) it renders the first
 * word in full and schedules no timers.
 */
export function useTypingEffect(
  words: string[],
  {
    typeSpeed = 85,
    deleteSpeed = 40,
    pauseEnd = 1600,
    pauseStart = 400,
    enabled = true,
  }: Options = {},
) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled || words.length === 0) return;

    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseEnd);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, pauseStart);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(t);
  }, [
    subIndex,
    deleting,
    index,
    words,
    typeSpeed,
    deleteSpeed,
    pauseEnd,
    pauseStart,
    enabled,
  ]);

  if (!enabled) return words[0] ?? "";
  return words[index % words.length].substring(0, subIndex);
}
