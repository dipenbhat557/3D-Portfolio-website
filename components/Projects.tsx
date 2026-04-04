"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/constants";
import type { Project } from "@/lib/constants";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );
    cardRef.current.style.setProperty(
      "--mouse-y",
      `${e.clientY - rect.top}px`
    );
  };

  const isFeatured = project.featured;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group spotlight-card bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_40px_-12px_rgba(0,255,204,0.15)] ${
        isFeatured ? "md:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {isFeatured ? <FeaturedLayout project={project} /> : <RegularLayout project={project} />}
    </motion.div>
  );
}

function FeaturedLayout({ project }: { project: Project }) {
  return (
    <div className="md:flex">
      {/* Image */}
      <div className="md:w-[45%] relative overflow-hidden">
        <div className="relative h-56 md:h-full min-h-[280px]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent/10 via-background to-card flex items-center justify-center">
              <span className="text-muted/30 text-4xl font-mono font-bold">
                {project.name}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/30" />
        </div>
      </div>

      {/* Content */}
      <div className="md:w-[55%] p-8 flex flex-col justify-center relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-accent/80 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
            {project.role}
          </span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-foreground/40 px-3 py-1 rounded-full border border-border">
            Featured
          </span>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {project.name}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex gap-6 mb-5 pb-5 border-b border-border/50">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-accent font-mono font-bold text-lg">
                  {metric.value}
                </p>
                <p className="text-muted/50 text-[11px] uppercase tracking-wider">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-accent/5 text-accent/70 border border-accent/10"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 5 && (
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md text-muted/40">
                +{project.tags.length - 5}
              </span>
            )}
          </div>

          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
}

function RegularLayout({ project }: { project: Project }) {
  return (
    <>
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-accent/10 via-background to-card flex items-center justify-center">
            <span className="text-muted/30 text-2xl font-mono font-bold">
              {project.name}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent/70 px-2 py-0.5 rounded-full border border-accent/15 bg-accent/5">
            {project.role}
          </span>
        </div>

        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {project.name}
          </h3>
          <ProjectLinks project={project} size="sm" />
        </div>

        <p className="text-muted/80 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/5 text-accent/60 border border-accent/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectLinks({
  project,
  size = "md",
}: {
  project: Project;
  size?: "sm" | "md";
}) {
  const iconClass = size === "sm" ? "text-base" : "text-lg";
  const linkClass =
    "text-muted/50 hover:text-accent transition-colors duration-300";

  return (
    <div className="flex gap-3">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={`${project.name} source code`}
        >
          <FiGithub className={iconClass} />
        </a>
      )}
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={`${project.name} live site`}
        >
          <FiArrowUpRight className={iconClass} />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,204,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader label="Portfolio" heading="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
