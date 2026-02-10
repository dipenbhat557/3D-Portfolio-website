"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { socialLinks } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback: open mailto
      const formData = new FormData(formRef.current);
      const subject = `Portfolio Contact from ${formData.get("name")}`;
      const body = `${formData.get("message")}\n\nFrom: ${formData.get("email")}`;
      window.location.href = `mailto:dipenbhat557@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setSending(true);
    setError(false);

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setSent(true);
      formRef.current.reset();
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Contact" heading="Get in Touch" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted text-lg leading-relaxed mb-8">
              Whether you have a project in mind, want to discuss AI
              infrastructure, or just want to connect — I&apos;d love to hear
              from you.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:dipenbhat557@gmail.com"
                className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
              >
                <HiOutlineMail className="text-xl" />
                <span>dipenbhat557@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors p-2.5 rounded-lg border border-border hover:border-accent/30"
                    aria-label={link.name}
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-muted text-sm mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-muted text-sm mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-muted text-sm mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-accent text-background font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-accent text-sm">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {error && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try emailing me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
