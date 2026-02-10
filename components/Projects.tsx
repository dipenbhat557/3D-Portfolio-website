"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/lib/constants";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function PlaceholderImage({ name }: { name: string }) {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-card via-background to-card flex items-center justify-center border-b border-border">
      <span className="text-muted/40 text-2xl font-mono font-bold">
        {name}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Portfolio" heading="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className={`bg-card border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-colors ${
                project.featured ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {project.featured ? (
                // Featured layout: side by side on desktop
                <div className="md:flex">
                  <div className="md:w-1/2">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-48 md:h-full min-h-[200px] bg-gradient-to-br from-card via-background to-card flex items-center justify-center">
                        <span className="text-muted/40 text-3xl font-mono font-bold">
                          {project.name}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <ProjectContent project={project} />
                  </div>
                </div>
              ) : (
                // Regular layout: stacked
                <>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <PlaceholderImage name={project.name} />
                  )}
                  <div className="p-6">
                    <ProjectContent project={project} />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectContent({
  project,
}: {
  project: {
    name: string;
    description: string;
    url: string | null;
    github: string | null;
    image: string | null;
    tags: string[];
    featured: boolean;
  };
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-foreground font-semibold text-xl">
          {project.name}
        </h3>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label={`${project.name} source code`}
            >
              <FiGithub className="text-lg" />
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label={`${project.name} live site`}
            >
              <FiExternalLink className="text-lg" />
            </a>
          )}
        </div>
      </div>

      <p className="text-muted text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2.5 py-1 rounded-md bg-accent/10 text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}
