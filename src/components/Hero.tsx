const links = [
  {
    label: "GitHub",
    href: "https://github.com/StephensGit/dublin-coffee-guide-ie/commits/main/",
  },
  { label: "LinkedIn", href: "https://ie.linkedin.com/in/stephen-moran-" },
  { label: "Email", href: "mailto:hello@stephenmoran.dev" },
];

export function Hero() {
  return (
    <section className="flex flex-col pt-20 sm:pt-28 lg:pt-32">
      <h1 className="text-[clamp(38px,7.6vw,68px)] font-semibold leading-[0.98] tracking-[-0.035em] text-foreground">
        Stephen Moran
      </h1>
      <p className="mt-4 text-[clamp(16px,1.9vw,19px)] font-medium leading-[1.45] tracking-[-0.01em] text-foreground">
        Frontend / Product Engineer based in Dublin.
      </p>
      <p className="mt-6 max-w-md text-[clamp(16px,1.9vw,19px)] leading-[1.6] tracking-[-0.005em] text-muted-foreground sm:max-w-lg">
        I specialise in React and TypeScript, and enjoy building complex product
        features and reusable frontend systems — particularly interfaces that
        make complicated workflows feel simple.
      </p>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 sm:mt-10">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-[15px] underline underline-offset-4 transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
