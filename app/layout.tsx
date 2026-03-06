import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dipen.info"),
  title: {
    default: "Dipendra Bhatta (Dipen) | CTO & Co-founder at AIPrep",
    template: "%s | Dipendra Bhatta",
  },
  description:
    "Dipendra Bhatta (Dipen) - CTO & Co-founder at AIPrep. Building intelligent systems at scale. Expert in AI infrastructure, LLM orchestration, Kubernetes, distributed systems, and full-stack development.",
  keywords: [
    "Dipendra Bhatta",
    "Dipen",
    "Dipen Bhatta",
    "dipenbhat557",
    "CTO of AIPrep",
    "Co-founder AIPrep",
    "CTO AIPrep",
    "AI Infrastructure Engineer",
    "LLM orchestration",
    "Kubernetes",
    "GCP",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "distributed systems",
    "Dipendra Bhatta portfolio",
    "Dipendra Bhatta CTO",
    "dipen.info",
  ],
  authors: [{ name: "Dipendra Bhatta", url: "https://dipen.info" }],
  creator: "Dipendra Bhatta",
  publisher: "Dipendra Bhatta",
  alternates: {
    canonical: "https://dipen.info",
  },
  openGraph: {
    title: "Dipendra Bhatta (Dipen) | CTO & Co-founder at AIPrep",
    description:
      "CTO & Co-founder at AIPrep. Building intelligent systems at scale. Expert in AI infrastructure, LLM orchestration, Kubernetes, and full-stack development.",
    url: "https://dipen.info",
    siteName: "Dipendra Bhatta - Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Dipendra Bhatta - CTO & Co-founder at AIPrep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipendra Bhatta (Dipen) | CTO & Co-founder at AIPrep",
    description:
      "CTO & Co-founder at AIPrep. Building intelligent systems at scale.",
    creator: "@dipenbhat557",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "REPLACE_WITH_YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dipendra Bhatta",
  alternateName: ["Dipen", "Dipen Bhatta", "dipenbhat557"],
  url: "https://dipen.info",
  image: "https://dipen.info/logo.png",
  jobTitle: "CTO & Co-founder",
  worksFor: {
    "@type": "Organization",
    name: "AIPrep",
    url: "https://aiprep.in",
  },
  description:
    "CTO & Co-founder at AIPrep. Building intelligent systems at scale. Expert in AI infrastructure, LLM orchestration, Kubernetes, and full-stack development.",
  knowsAbout: [
    "Artificial Intelligence",
    "LLM Orchestration",
    "Kubernetes",
    "Google Cloud Platform",
    "Full Stack Development",
    "Distributed Systems",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "FastAPI",
  ],
  sameAs: [
    "https://github.com/dipenbhat557",
    "https://linkedin.com/in/dipendra-bhatta-38ba32259",
    "https://x.com/dipenbhat557",
    "https://instagram.com/dipenbhat557",
  ],
  email: "dipenbhat557@gmail.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
