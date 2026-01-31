import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Boris Vicena",
  description:
    "Free resources for creators building digital products. Guides, checklists, and tools.",
};

export default function ResourcesPage() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-2xl font-medium mb-4">Resources</h1>
        <p className="text-secondary leading-relaxed">
          I am putting together some valuable resources that helped me figure
          things out.
          {/* I put together some resources that helped me figure things out. Grab
          whatever&apos;s useful. */}
        </p>
      </header>

      <div className="divider" />

      {/* Coming soon */}
      {/* <div className="space-y-12">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            id={resource.id}
            title={resource.title}
            description={resource.description}
            details={resource.details}
          />
        ))}
      </div>

      <div className="divider" /> */}

      <div className="text-sm text-tertiary">
        <p>
          More resources coming as I create them. If there&apos;s something
          specific you&apos;d find helpful,{" "}
          <a
            href="mailto:boris.vicena@gmail.com"
            className="text-secondary hover:text-primary transition-colors underline underline-offset-2"
          >
            let me know
          </a>
          .
        </p>
      </div>
    </article>
  );
}
