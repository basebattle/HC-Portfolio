"use client";

import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t px-4 sm:px-6 lg:px-8 py-8"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        background: "#080F16",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left — name + copyright */}
        <p
          className="text-xs text-center sm:text-left"
          style={{
            color: "rgba(232,237,240,0.28)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          &copy; {year} Dr. Piyush Sharma. All rights reserved.
        </p>

        {/* Right — icon links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/basebattle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-150"
            style={{ color: "rgba(232,237,240,0.28)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#E8EDF0")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(232,237,240,0.28)")
            }
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/piyushsharma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-150"
            style={{ color: "rgba(232,237,240,0.28)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#5C9BF5")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(232,237,240,0.28)")
            }
          >
            <Linkedin size={16} />
          </a>
          <span
            className="text-xs"
            style={{
              color: "rgba(232,237,240,0.15)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Built with Next.js 15
          </span>
        </div>
      </div>
    </footer>
  );
}
