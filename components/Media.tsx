"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { mediaVideos, mediaTweets } from "@/lib/constants";

function TweetEmbed({ tweetId, author }: { tweetId: string; author: string }) {
  const tweetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={tweetRef} className="min-w-[300px] max-w-[400px]">
      <blockquote className="twitter-tweet" data-theme="dark">
        <a
          href={`https://x.com/${author}/status/${tweetId}`}
        >
          Loading tweet...
        </a>
      </blockquote>
    </div>
  );
}

export default function Media() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pause = useCallback(() => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
  }, []);

  const resumeAfterDelay = useCallback(() => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 3000);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += 0.5;

        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  return (
    <section id="media" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Featured In" heading="Media & Appearances" />

        {/* Video carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={pause}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={pause}
          onTouchEnd={resumeAfterDelay}
        >
          {mediaVideos.map((video, index) => (
            <motion.div
              key={video.videoId}
              className="shrink-0 w-[340px] sm:w-[420px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-colors">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title="Media appearance"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
