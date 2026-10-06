import { Section } from "@/components/ui/Section";
import { socialChannels } from "@/lib/data";

export default function SocialChannels() {
  return (
    <Section id="social">
      <h2 className="text-2xl font-bold text-foreground">Social Channels</h2>

      <ul className="mt-8 space-y-2">
        {socialChannels.map((channel) => (
          <li key={channel.platform} className="text-base">
            <span className="font-semibold text-foreground">
              {channel.platform}
            </span>
            <span className="text-secondary"> — </span>
            <a
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="text-accent-light hover:underline"
            >
              {channel.handle}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
