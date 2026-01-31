import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "https://tiktok.com/@borisvicena", label: "TikTok" },
  { href: "https://github.com/borisvicena", label: "GitHub" },
  { href: "https://linkedin.com/in/borisvicena", label: "LinkedIn" },
  { href: "mailto:boris.vicena@gmail.com", label: "Email" },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Intro */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/47193955?v=4"
            alt="Boris Vicena"
            width={56}
            height={56}
            className="rounded-full"
            priority
          />
          <div>
            <h1 className="text-lg font-medium">Boris Vicena</h1>
            <p className="text-sm text-secondary">Developer, Slovakia</p>
          </div>
        </div>

        <p className="text-secondary leading-relaxed">
          Developer building tools for creators. Currently at{" "}
          <span className="text-primary">Lenovo</span>, previously ran{" "}
          <span className="text-primary">GoSocial</span>.
        </p>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Now */}
      <section className="space-y-4">
        <h2 className="text-sm font-medium text-tertiary uppercase tracking-wide">
          Now
        </h2>
        <div className="space-y-4 text-secondary leading-relaxed">
          <p>
            Working on helping creators turn their expertise into products —
            courses, templates, digital tools. I like the intersection of
            building things and helping people ship.
          </p>
          <p>
            When I&apos;m not coding, I&apos;m probably making dev tips for{" "}
            <a
              href="https://tiktok.com/@borisvicena"
              target="_blank"
              rel="noopener noreferrer"
              className="prose-link text-primary"
            >
              TikTok
            </a>{" "}
            or figuring out what to eat for dinner.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Featured Resource */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm font-medium text-tertiary uppercase tracking-wide">
            Free Resource
          </h2>
          <Link
            href="/resources"
            className="text-xs text-tertiary hover:text-secondary transition-colors"
          >
            View all →
          </Link>
        </div>

        <p className="text-secondary leading-relaxed">Coming soon</p>
        {/* <ResourceCard
          id="tech-stack-guide"
          title="Creator Tech Stack Guide"
          description="A breakdown of the exact tools needed to launch an info product — what to use, what to skip, and why."
        /> */}
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Elsewhere */}
      <section className="space-y-4">
        <h2 className="text-sm font-medium text-tertiary uppercase tracking-wide">
          Elsewhere
        </h2>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
