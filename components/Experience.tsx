"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Career" heading="Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[5px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                className="relative pl-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full bg-accent border-2 border-background" />

                {/* Header row: logo + title + period */}
                <div className="flex items-start gap-4 mb-3">
                  {/* Company logo */}
                  <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center overflow-hidden shrink-0">
                    {exp.logo ? (
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-accent font-bold text-sm">
                        {exp.company[0]}
                      </span>
                    )}
                  </div>

                  {/* Title and company */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-4 flex-wrap">
                      <h3 className="text-foreground font-semibold text-lg">
                        {exp.title}
                      </h3>
                      <span className="text-muted text-sm font-mono shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-accent text-sm">
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2 ml-14">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-muted text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-accent mt-1.5 shrink-0">
                        &bull;
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
