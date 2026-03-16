// badgeConfig.ts
// Drop this in: /lib/badgeConfig.ts or /config/badgeConfig.ts

export interface BadgeConfig {
  id: string;
  src: string;
  alt: string;
  glowColor: string;       // CSS colour used for box-shadow glow on hover
  glowIntensity: number;   // 0–1, controls glow spread multiplier
  accentColor: string;     // used for the glint sweep tint
}

export const BADGES: BadgeConfig[] = [
  {
    id: "badge-01-pahm",
    src: "/badges/Badge00001.png",
    alt: "PAHM – Professional Academy for Healthcare Management",
    glowColor: "rgba(192, 192, 210, 0.7)",   // surgical steel silver
    glowIntensity: 0.9,
    accentColor: "#d4dce5",
  },
  {
    id: "badge-02-azure",
    src: "/badges/Badge00002.png",
    alt: "Azure AI Fundamentals – Microsoft Certified",
    glowColor: "rgba(0, 120, 212, 0.65)",    // Azure blue
    glowIntensity: 1,
    accentColor: "#50a8f0",
  },
  {
    id: "badge-03-supply-chain",
    src: "/badges/Badge00003.png",
    alt: "Supply Chain Management & Systems – University of Hyderabad",
    glowColor: "rgba(180, 130, 60, 0.65)",   // antique bronze-gold
    glowIntensity: 0.85,
    accentColor: "#d4a030",
  },
  {
    id: "badge-04-aws",
    src: "/badges/Badge00004.png",
    alt: "AWS Certified AI Fundamentals",
    glowColor: "rgba(255, 153, 0, 0.65)",    // AWS orange
    glowIntensity: 1,
    accentColor: "#ff9900",
  },
  {
    id: "badge-05-six-sigma",
    src: "/badges/Badge00005.png",
    alt: "Six Sigma Green Belt – Process Improvement",
    glowColor: "rgba(46, 125, 50, 0.65)",    // forest green
    glowIntensity: 0.9,
    accentColor: "#66bb6a",
  },
  {
    id: "badge-06-apmp",
    src: "/badges/Badge00006.png",
    alt: "APMP – Bid and Proposal Management Foundation",
    glowColor: "rgba(180, 150, 40, 0.65)",   // 24k gold
    glowIntensity: 1,
    accentColor: "#ffd54f",
  },
  {
    id: "badge-07-redbull",
    src: "/badges/Badge00007.png",
    alt: "Red Bull – On-Premise Sales Experience",
    glowColor: "rgba(198, 40, 40, 0.65)",    // Red Bull crimson
    glowIntensity: 1,
    accentColor: "#ef5350",
  },
  {
    id: "badge-08-tata",
    src: "/badges/Badge00008.png",
    alt: "Tata Data Visualisation – Business Insights",
    glowColor: "rgba(30, 136, 229, 0.6)",    // electric blue accent
    glowIntensity: 0.85,
    accentColor: "#42a5f5",
  },
  {
    id: "badge-09-hp",
    src: "/badges/Badge00009.png",
    alt: "HP Inventory Management – Certified Professional",
    glowColor: "rgba(0, 150, 214, 0.65)",    // HP blue
    glowIntensity: 0.9,
    accentColor: "#29b6f6",
  },
  {
    id: "badge-10-lean",
    src: "/badges/Badge00010.png",
    alt: "Lean Six Sigma Yellow Belt (ICYB) – Udemy",
    glowColor: "rgba(249, 168, 37, 0.7)",    // vibrant gold
    glowIntensity: 1,
    accentColor: "#ffca28",
  },
];
