import { Section } from "@/components/ui/Section";
import { socialChannels } from "@/lib/data";

export default function SocialChannels() {
  return (
    <Section id="social">
      <h2 className="text-2xl font-bold text-white">Social Channels</h2>

      <ul className="mt-8 space-y-2">
        {socialChannels.map((channel) => (
          <li key={channel.platform} className="text-sm">
            <span className="font-semibold text-white">
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
