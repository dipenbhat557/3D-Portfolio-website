"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  heading: string;
}

export default function SectionHeader({ label, heading }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-accent text-sm font-mono uppercase tracking-wider mb-3">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
        {heading}
      </h2>
    </motion.div>
  );
}
