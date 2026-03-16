---
name: showroom-design
description: Design system and coding conventions for the Healthcare AI Innovation Showroom portfolio. Apply these rules to every component, page, and style file in this workspace.
---

# Showroom Design System

## Design Tokens

Read `resources/TOKENS.md` for the full color, typography, and spacing system.

## Rules

- Dark theme everywhere. Background is #0F1923. Never use white backgrounds.
- Glassmorphism on cards: backdrop-blur-md, bg-white/5, border border-white/10
- KPI counters animate on scroll (Intersection Observer + requestAnimationFrame)
- NO stock photos. Icons and data visualizations only.
- NO emoji in UI. Use Lucide React SVG icons.
- Framer Motion for scroll-triggered staggered reveals
- TypeScript strict mode. No `any` types. No eslint-disable.
- All project content reads from src/data/projects.ts. Never hardcode project data in components.
- Mobile-first. Test at 375px, 768px, 1024px, 1440px.

## Lessons Learned

1. **[GIT PROTOCOL]**: Never assume a repository exists on GitHub even if `git remote -v` shows a URL.
2. **[VERIFICATION STEP]**: Before any `git push`, the agent must verify the remote's existence by running `gh repo view [repo-name]`. If it 404s, the agent must prompt the user to create it or use `gh repo create`.
3. **[DOCKER CONTEXT]**: For Phase 3, you are operating in a Darwin arm64 (Apple Silicon) environment. Ensure all Docker commands and Python dependencies are compatible with ARM architecture.
4. **[PORT CONFLICTS]**: Port 8080 is reserved for the Microsoft FHIR Server. Check for port availability before suggesting `uvicorn` or `npm run dev` on that port.
5. **[PYTHON COMMAND]**: On this Mac, the Python command is `python3`, NOT `python`. pip is `pip3`. Always use python3 and pip3.
6. **[DOTENV PATH]**: The `.env` file lives at the PROJECT ROOT. Backend code runs from `backend/`. Use `load_dotenv(dotenv_path=Path(__file__).parent.parent.parent / ".env")`.
7. **[MEDPLUM RATE LIMITS]**: Medplum free tier has rate limits (~160 requests per 60 seconds). Add `sleep(2)` between sequential API calls if doing batch uploads/queries.
8. **[NO DOCKER POLICY]**: This Mac has limited disk space. NO Docker commands anywhere. Use FHIR_MODE=static for deployed sites and FHIR_MODE=cloud for live demos.
9. **[SYNTHEA COVERAGE]**: Synthea sample data does not always generate Coverage resources. `coverage_search.json` may have 0 entries. Handle empty results gracefully.
10. **[DESIGN SYSTEM]**: Frontends use Bg `#0F1923`, Primary `#0D7377`, Accent `#00BFA5`, Gold `#FF8F00`, Blue `#1565C0`. Fonts: DM Serif Display, DM Sans, JetBrains Mono. Glassmorphism cards.
11. **[GIT SELF-CORRECTION]**: If push fails: check remote, fix URL with `git remote set-url origin`, login with `gh auth login --web`, retry `git push`.
12. **[DEPLOYMENT AUDIT]**: Always verify builds locally before claiming deployment. 'Scaffolded' means the files exist. 'Deployed' means the app runs and is accessible via a public URL. These are different things.
13. **[RENDER AND STREAMLIT CLOUD PYTHON VERSION]**: Cloud platforms default to Python 3.14 in 2026. Most packages (pydantic-core, pillow, pandas) do not have pre-built wheels for 3.14 and fail to compile from source. ALWAYS add a .python-version file with "3.12" to any repo deploying to Render or Streamlit Cloud. For Render, also set PYTHON_VERSION=3.12.6 as an environment variable in the dashboard.
14. **[DEPENDENCY PINNING POLICY]**: NEVER pin exact dependency versions (e.g., fastapi==0.104.1, pandas==2.2.2) in requirements.txt for deployed projects. Use unpinned versions (just "fastapi", "pandas", "streamlit"). Exact pins pull old sub-dependencies that lack wheels for modern Python. Let pip resolve the latest compatible versions.
15. **[VERCEL IS FOR NEXT.JS ONLY]**: Streamlit apps deploy to Streamlit Community Cloud (share.streamlit.io), NOT Vercel. If you accidentally run npx vercel in a Python/Streamlit project, it will fail with "No python entrypoint found." Vercel is only for Next.js frontends.
16. **[RENDER ROOT DIRECTORY]**: When deploying a monorepo backend to Render, the Root Directory must be set to "backend" in the Render dashboard. The requirements.txt and Procfile must be inside that root directory. Render only sees files within the configured root.
17. **[PROCFILE USES PYTHON3]**: On macOS and on Render, the command is python3 not python. Every Procfile must say: web: python3 -m uvicorn app.main:app --host 0.0.0.0 --port $PORT
18. **[ANTIGRAVITY REPO NAMING]**: When Antigravity creates a GitHub repo, it may choose a different name than specified (e.g., cds-analytics instead of cds-hooks-llm). This is fine as long as the HC-Portfolio projects.ts file references the ACTUAL repo name that was created, not the planned name. Always verify the real repo name with: git remote -v
19. **[VERCEL DEPLOY FROM CORRECT DIRECTORY]**: Always cd into the correct project directory before running npx vercel --prod. If you are in the wrong directory, Vercel will deploy whatever folder you are in. Verify with pwd before every Vercel deploy.
20. **[LOCALSTORAGE FOR STATELESS APPS]**: For assessment tools, wizards, and calculators that don't need a database, use localStorage to persist user state across page refreshes. This avoids the need for a backend entirely. The pattern: save on every input change, restore on page load, clear on "start over."
21. **[SUPABASE IS OPTIONAL FOR P07]**: The HAIRA assessment tool (P07) works entirely without Supabase. The initial build uses localStorage. Supabase can be added later for persistence and benchmarking. Do NOT block the build waiting for Supabase credentials. Build the full UI with localStorage first, deploy, then wire up Supabase as an enhancement.
22. **[PHASE 4 ACCENT COLOR]**: P07 (HAIRA) is in the Strategic Governance category. Its primary accent color is blue (#1565C0), NOT teal (#0D7377). Teal is for Clinical Intelligence projects. Gold is for Financial Optimization. Blue is for Governance. Apply blue to CTAs, badges, radar chart fills, and card accents throughout P07.
23. **[RECHARTS ON DARK BACKGROUND]**: When using Recharts (RadarChart, BarChart, etc.) on a dark background (#0F1923), you must explicitly set: tick fill color to #ECEFF1 (light text), grid stroke to rgba(255,255,255,0.1), and the chart background to transparent. Recharts defaults to white/light colors that become invisible on dark backgrounds.
