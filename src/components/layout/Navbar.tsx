"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3 shrink-0"
              aria-label="Dr. Piyush Sharma — home"
            >
              {/* PS badge */}
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-bold text-[#F5ECD7]"
                style={{
                  background: "linear-gradient(135deg, var(--primary) 0%, var(--clinical) 100%)",
                }}
              >
                PS
              </span>
              {/* Name */}
              <span
                className="hidden sm:block text-[17px] font-medium tracking-tight text-[#F5ECD7]"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                Dr. Piyush Sharma
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 text-sm font-medium text-[#F5ECD7]/70 hover:text-[#F5ECD7] rounded-lg hover:bg-white/5 transition-colors duration-150 cursor-pointer"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA + mobile hamburger */}
            <div className="flex items-center gap-3">
              {/* Desktop CTAs */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-[#F5ECD7]/80 hover:text-[#F5ECD7] transition-colors duration-150 border border-[#F5ECD7]/20 hover:bg-white/5"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <Download size={16} className="mr-2" />
                Resume
              </a>

              {/* CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-[#1A2B4A] transition-opacity duration-150 hover:opacity-95 active:opacity-90"
                style={{
                  background: "var(--foreground)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Book a Walkthrough
              </a>

              {/* Hamburger */}
              <button
                className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-150"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <nav
          className={`absolute top-16 left-0 right-0 bg-[#0F1923]/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-150 cursor-pointer"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 pb-1">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-semibold text-white transition-opacity duration-150 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #0D7377 0%, #00BFA5 100%)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Book a Walkthrough
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-medium text-white/80 hover:text-white transition-all duration-150 border border-white/20 hover:bg-white/5"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
