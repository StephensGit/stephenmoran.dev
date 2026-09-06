export function Footer() {
  return (
    <footer className="mt-[clamp(64px,10vw,132px)] max-w-[720px] border-t border-line pt-[clamp(20px,2.8vw,28px)] pb-10 sm:pb-16">
      <div className="flex flex-wrap items-baseline justify-between gap-2 font-mono text-[11.5px] tracking-[0.06em] text-muted-foreground">
        <span>Dublin, Ireland</span>
        <a
          href="mailto:hello@stephenmoran.dev"
          className="transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
        >
          hello@stephenmoran.dev
        </a>
      </div>
    </footer>
  );
}
