import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Boris Vicena",
  description:
    "Get in touch. Always happy to chat about creator businesses, tech, or interesting projects.",
};

const socialLinks = [
  { href: "https://instagram.com/borisvicena", label: "Instagram" },
  { href: "https://tiktok.com/@borisvicena", label: "TikTok" },
  { href: "https://github.com/borisvicena", label: "GitHub" },
  { href: "https://linkedin.com/in/borisvicena", label: "LinkedIn" },
];

export default function ContactPage() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-2xl font-medium mb-6">Contact</h1>
      </header>

      <div className="space-y-6 text-secondary leading-relaxed">
        <p>
          I&apos;m always happy to chat about creator businesses, building
          products, or interesting problems.
        </p>

        <p>
          The best way to reach me is email:{" "}
          <a
            href="mailto:boris.vicena@gmail.com"
            className="prose-link text-primary"
          >
            boris.vicena@gmail.com
          </a>
        </p>

        <div className="pt-2">
          <p className="text-sm text-tertiary mb-3">I&apos;m also on:</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="space-y-4 text-secondary leading-relaxed">
        <p>
          If you&apos;re a creator thinking about building something, just send
          a note about what you&apos;re working on. I don&apos;t have a formal
          &quot;process&quot; — we can just talk and see if I can help.
        </p>

        <p>
          For development work or other inquiries, email works too. I respond to
          everything, though sometimes it takes a few days.
        </p>
      </div>
    </article>
  );
}
