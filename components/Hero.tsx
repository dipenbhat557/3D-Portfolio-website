"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,204,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          className="text-accent font-mono text-sm tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CTO & AI Infrastructure Engineer
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Building intelligent{" "}
          <span className="gradient-text">systems at scale</span>
        </motion.h1>

        <motion.p
          className="text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I lead engineering at{" "}
          <a
            href="https://aiprep.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            AIPrep
          </a>
          , where I architect AI video generation pipelines, orchestrate LLMs,
          and deploy distributed systems on Kubernetes.
        </motion.p>

        {/* Social links */}
        <motion.div
          className="flex justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors p-3 rounded-lg border border-border hover:border-accent/30"
                whileHover={{ y: -2 }}
                aria-label={link.name}
              >
                <Icon className="text-xl" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-accent text-background px-8 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-border text-foreground px-8 py-3 rounded-lg font-medium hover:border-accent/50 hover:text-accent transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-5 h-8 border-2 border-muted/30 rounded-full flex justify-center pt-1"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-2 bg-muted/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
