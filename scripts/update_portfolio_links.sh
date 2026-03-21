#!/bin/bash

# ==============================================================================
# HC-Portfolio Weekly Link Updater
# Description: Uses Claude Code to autonomously audit and update Vercel/Streamlit
#              links in the portfolio based on the latest local project deployments.
# Schedule: Run this via Cron or xyOps (e.g., every Monday at 9AM)
# ==============================================================================

# Ensure we are in the portfolio directory
cd /Users/piyushsharma/Projects/12_HC-Portfolio || exit 1

echo "[$(date)] Starting Portfolio Link Updater via Claude Code..."

# The exhaustive prompt for Claude Code to perform the automated link audit and update
CLAUDE_PROMPT="
Act as a CI/CD Automation Agent. Your task is to update the Vercel and Streamlit links in my HC-Portfolio.

1. Read 'src/data/projects.ts' to map out all project names and their current 'live' URLs.
2. For each project, ping the live URL. If it returns 404 or 401, proceed to the next step.
3. Look in '/Users/piyushsharma/Projects/' for the corresponding local project directory (e.g. '../P08-CDS-Analytics' or '../FHIR-MCP-data-bridge').
4. Inside the local directory, use the 'vercel' CLI (e.g., 'vercel ls [project-name]') to find the newest production or preview deployment URL.
5. If a new, working URL is found, update 'src/data/projects.ts' with the new URL.
6. If any modifications were made to 'projects.ts', commit the changes with message 'automations: weekly link status update' and push to main.

Execute this plan autonomously, without asking for confirmation, unless you run into fatal errors.
"

# Execute Claude Code with the prompt
claude -p "$CLAUDE_PROMPT"

echo "[$(date)] Link Updater Finished."
