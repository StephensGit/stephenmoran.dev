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
    <section className="flex min-h-[80dvh] flex-col justify-center py-16 sm:py-24 lg:min-h-[68dvh]">
      <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        Stephen Moran
      </h1>
      <p className="mt-4 text-xl font-medium text-foreground sm:text-2xl">
        Frontend / Product Engineer based in Dublin.
      </p>
      <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:max-w-lg sm:text-lg">
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
              className="underline underline-offset-4 transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
