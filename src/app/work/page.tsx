import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Boris Vicena",
  description:
    "What I spend my time on. Building for creators, development work, and content.",
};

export default function WorkPage() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-2xl font-medium mb-6">Work</h1>
        <p className="text-secondary">I focus on a few things:</p>
      </header>

      <div className="divider" />

      {/* Building for creators */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Building for creators</h2>
        <div className="space-y-4 text-secondary leading-relaxed">
          <p>
            I help people with audiences (usually 50k–100k followers) turn their
            expertise into products. This means building course platforms,
            setting up payment systems, creating automation that runs without
            them — the unsexy infrastructure that makes digital products work.
          </p>
          <p>
            I&apos;m technical, so I actually build these systems rather than
            just advising. No agencies, no outsourcing, just me writing code.
          </p>
          <p className="text-primary">
            If you&apos;re a creator thinking about this, feel free to{" "}
            <a href="mailto:boris.vicena@gmail.com" className="prose-link">
              reach out
            </a>
            . I&apos;m selective but always happy to chat.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Development work */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Development work</h2>
        <div className="space-y-4 text-secondary leading-relaxed">
          <p>
            By day, I&apos;m an application developer at Lenovo. Before that, I
            built web applications and automation systems at GoSocial.
          </p>
          <p>I work primarily with:</p>
          <ul className="space-y-1.5 pl-4">
            <li className="relative before:content-['–'] before:absolute before:-left-4 before:text-tertiary">
              Vue.js and React/Next.js for frontend
            </li>
            <li className="relative before:content-['–'] before:absolute before:-left-4 before:text-tertiary">
              Laravel and Node for backend
            </li>
            <li className="relative before:content-['–'] before:absolute before:-left-4 before:text-tertiary">
              Tailwind for styling
            </li>
            <li className="relative before:content-['–'] before:absolute before:-left-4 before:text-tertiary">
              Various tools for automation and integration
            </li>
          </ul>
          <p>
            I occasionally take on interesting freelance projects if the fit is
            right.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Content */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Content</h2>
        <div className="space-y-4 text-secondary leading-relaxed">
          <p>
            I share developer tips and behind-the-scenes building content on{" "}
            <a
              href="https://tiktok.com/@borisvicena"
              target="_blank"
              rel="noopener noreferrer"
              className="prose-link text-primary"
            >
              TikTok
            </a>{" "}
            (@borisvicena). It&apos;s more casual than what I&apos;d write here
            — short videos about debugging, VS Code tricks, and occasional
            career thoughts.
          </p>
        </div>
      </section>
    </article>
  );
}
