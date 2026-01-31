import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | Boris Vicena",
  description: "Thoughts on building, creating, and figuring things out.",
};

export default function WritingPage() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-2xl font-medium mb-6">Writing</h1>
      </header>

      <div className="space-y-4 text-secondary leading-relaxed">
        <p>
          I&apos;m working on writing more publicly. For now, you can find my
          shorter thoughts on{" "}
          <a
            href="https://tiktok.com/@borisvicena"
            target="_blank"
            rel="noopener noreferrer"
            className="prose-link text-primary"
          >
            TikTok
          </a>{" "}
          or{" "}
          <a
            href="mailto:boris.vicena@gmail.com"
            className="prose-link text-primary"
          >
            reach out directly
          </a>{" "}
          if you want to discuss something.
        </p>
        <p>
          Check back later — I have a few pieces in progress about creator
          businesses and building products.
        </p>
      </div>

      {/* Placeholder for future posts */}
      {/* <div className="divider" />

      <section className="space-y-6">
        <article className="group">
          <a href="/writing/post-slug" className="block space-y-1">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-medium text-primary group-hover:text-accent transition-colors">
                Title of the post
              </h2>
              <span className="text-sm text-tertiary shrink-0">
                Dec 2024
              </span>
            </div>
            <p className="text-sm text-secondary">
              Brief description of what the post is about.
            </p>
          </a>
        </article>
      </section> */}
    </article>
  );
}
