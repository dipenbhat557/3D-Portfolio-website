import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dipendra Bhatta | CTO & AI Infrastructure Engineer",
  description:
    "CTO at AIPrep building AI video generation platforms. Expert in LLM orchestration, Kubernetes, GCP, and full-stack development.",
  keywords: [
    "Dipendra Bhatta",
    "CTO",
    "AI Infrastructure",
    "LLM",
    "Kubernetes",
    "GCP",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
  ],
  authors: [{ name: "Dipendra Bhatta" }],
  openGraph: {
    title: "Dipendra Bhatta | CTO & AI Infrastructure Engineer",
    description:
      "CTO at AIPrep building AI video generation platforms. Expert in LLM orchestration, Kubernetes, GCP, and full-stack development.",
    url: "https://dipendrabhatta.com.np",
    siteName: "Dipendra Bhatta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipendra Bhatta | CTO & AI Infrastructure Engineer",
    description:
      "CTO at AIPrep building AI video generation platforms.",
    creator: "@dipenbhat557",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
