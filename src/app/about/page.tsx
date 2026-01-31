import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Boris Vicena",
  description: "Developer from Slovakia. Building tools for creators.",
};

export default function About() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-2xl font-medium mb-6">About</h1>
      </header>

      <div className="space-y-6 text-secondary leading-relaxed">
        <p>
          I&apos;m Boris, a developer from Slovakia. I&apos;m 22, I work at
          Lenovo as an application developer, and I&apos;m finishing up a
          software development degree at Unicorn University.
        </p>

        <h2 className="text-lg font-medium text-primary pt-4">
          How I got here
        </h2>

        <p>
          I got into tech early — started with the usual path of tinkering,
          breaking things, building little projects that nobody used. In 2022, I
          started a digital agency called GoSocial with a friend. We helped
          businesses with SEO, content, and growth strategy. It was chaotic and
          we made every mistake possible, but I learned more in those two years
          than in any classroom.
        </p>

        <p>
          Running the agency taught me something: most people with good ideas
          can&apos;t execute on them. Not because they&apos;re not smart, but
          because the technical part is genuinely hard if you haven&apos;t spent
          years learning it.
        </p>

        <p>
          That&apos;s what led me to what I&apos;m focused on now — helping
          creators build actual products. Not just giving advice (there&apos;s
          enough of that), but building the systems: course platforms,
          automation, the infrastructure that turns followers into customers.
        </p>

        <h2 className="text-lg font-medium text-primary pt-4">
          Some other things
        </h2>

        <p>
          I have around 14k followers on TikTok where I share developer tips. I
          completed Harvard&apos;s CS50, which was harder than I expected. I
          mostly work with Vue.js, Laravel, Next.js, and Tailwind — but
          I&apos;ll use whatever makes sense for the project.
        </p>

        <p>
          I&apos;m based in Slovakia but work with people from everywhere. I
          speak Slovak, English, and enough Bulgarian to confuse my relatives.
        </p>

        <h2 className="text-lg font-medium text-primary pt-4">
          What I&apos;m thinking about lately
        </h2>

        <ul className="space-y-2 pl-4">
          <li className="relative before:content-['–'] before:absolute before:-left-4 before:text-tertiary">
            How creators can own their distribution instead of renting it from
            platforms
          </li>
          <li className="relative before:content-['–'] before:absolute before:-left-4 before:text-tertiary">
            The gap between &quot;having an audience&quot; and &quot;having a
            business&quot;
          </li>
          <li className="relative before:content-['–'] before:absolute before:-left-4 before:text-tertiary">
            Building in public vs. building in private
          </li>
          <li className="relative before:content-['–'] before:absolute before:-left-4 before:text-tertiary">
            Why most course platforms feel so soulless
          </li>
        </ul>

        <p className="pt-4">
          If any of that interests you,{" "}
          <a
            href="mailto:boris.vicena@gmail.com"
            className="prose-link text-primary"
          >
            I&apos;d like to hear from you
          </a>
          .
        </p>
      </div>
    </article>
  );
}
