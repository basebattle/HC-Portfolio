import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../styles/globals.css";
import BadgeMarquee from "@/components/BadgeMarquee";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FlowingLine from "@/components/ui/FlowingLine";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "A Strategic Architect's Portfolio | Healthcare AI & Agentic Ecosystems",
  description: "Specializing in the intersection of Clinical Intelligence, Financial Optimization, and Strategic Governance through Agentic AI implementations.",
  keywords: ["Healthcare AI", "Agentic Ecosystems", "Clinical Intelligence", "FHIR-MCP", "Healthcare Strategy", "Strategic Governance"],
  authors: [{ name: "Piyush Sharma" }],
  openGraph: {
    title: "The Agentic Architect - Healthcare AI Strategy Portfolio",
    description: "Architectural DX frameworks and agentic clinical implementations by Piyush Sharma.",
    url: "https://agent-architect.vercel.app",
    siteName: "The Agentic Architect",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Piyush Sharma | Healthcare AI Architect",
    description: "Agentic clinical implementations and strategic ecosystems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased selection:bg-primary/20`}
      >
        <FlowingLine />
        <BadgeMarquee />
        <Navbar />
        {children}
        <ScrollProgress />
        <Footer />
      </body>
    </html>
  );
}
