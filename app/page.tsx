import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Media from "@/components/Media";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative">
      {/* Fixed background texture */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,255,204,0.025),transparent)] pointer-events-none" />
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ededed 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Media />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
