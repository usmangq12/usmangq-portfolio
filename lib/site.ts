export const siteConfig = {
  name: "Muhammad Usman",
  role: "Infrastructure & Platform Engineer",
  title: "Muhammad Usman — Infrastructure & Platform Engineer",
  description:
    "Infrastructure & Platform Engineer with 7+ years experience. Monorepo architecture, CI/CD, auth systems, security hardening, and developer experience tooling.",
  url: "https://usmangq.vercel.app",
  links: {
    github: "https://github.com/usmangq12",
    linkedin: "https://www.linkedin.com/in/muhammad-usman-759b55129",
    email: "usmangq12@gmail.com",
    hackquest: "https://hackquest.io/user/437978",
  },
} as const;

export type SiteConfig = typeof siteConfig;
