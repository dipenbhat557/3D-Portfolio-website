"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { HiCpuChip, HiCloud, HiCodeBracket } from "react-icons/hi2";

const capabilities = [
  {
    icon: HiCpuChip,
    title: "AI & ML Infrastructure",
    description:
      "LLM orchestration, RAG pipelines, model routing, embedding systems, and cost optimization at scale.",
  },
  {
    icon: HiCloud,
    title: "Cloud & DevOps",
    description:
      "Kubernetes (GKE), Docker, Celery workers, CI/CD pipelines, monitoring, and cloud cost management on GCP.",
  },
  {
    icon: HiCodeBracket,
    title: "Full Stack Development",
    description:
      "React, Next.js, Node.js, Python/FastAPI, PostgreSQL, Redis. End-to-end product development from API to UI.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="About" heading="What I do" />

        <motion.p
          className="text-muted text-lg max-w-3xl mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I&apos;m a CTO and AI infrastructure engineer with a track record of
          building production systems that scale. At AIPrep, I architect LLM
          orchestration pipelines, design cost-optimized cloud infrastructure on
          GKE, and lead engineering teams. I turn complex AI capabilities into
          reliable, production-grade products.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <cap.icon className="text-accent text-3xl mb-4" />
              <h3 className="text-foreground font-semibold text-lg mb-3">
                {cap.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
