export function About() {
  return (
    <section aria-labelledby="about-heading">
      <h2
        id="about-heading"
        className="font-mono text-[11px] font-normal uppercase tracking-[0.14em] text-muted-foreground"
      >
        About
      </h2>
      <div className="mt-6 max-w-md space-y-4 sm:max-w-lg">
        <p className="text-[clamp(16px,1.9vw,18px)] leading-[1.65] tracking-[-0.005em] text-foreground">
          I build product features from idea to delivery, work mostly with React
          and TypeScript, and make things on the side that I find useful or
          interesting.
        </p>
        <p className="text-[clamp(16px,1.9vw,18px)] leading-[1.65] tracking-[-0.005em] text-muted-foreground">
          Currently building product features in a small engineering team.
          Always happy to talk about frontend architecture, FPL, or where to
          get a decent coffee.
        </p>
      </div>
    </section>
  );
}
