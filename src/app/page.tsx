import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <main className="flex max-w-[720px] flex-1 flex-col gap-[clamp(64px,10vw,132px)]">
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}
