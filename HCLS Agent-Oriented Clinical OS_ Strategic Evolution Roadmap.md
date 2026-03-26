# **🏥 Portfolio Evolution: Agent-Oriented Clinical OS Roadmap**

This roadmap transitions the portfolio from Phase 1/2 (foundational automation) to Phase 3/4 (autonomous ROI capture). It adheres to a zero-compute-cost mandate by prioritizing permanent free tiers (Neon, Vercel, Render) and utilizes the Blue Button 2.0 sandbox to demonstrate production-grade OAuth 2.0 implementations. 1

## **1\. Project-API Mapping (Pillar Alignment)**

| Project ID | Name | Target API | Integration Feature | Pillar |
| :---- | :---- | :---- | :---- | :---- |
| P07 | HAIRA Governance | Regulations.gov V4 | **Compliance Watcher Node:** Real-time monitoring of HHS/ONC dockets for maturity model updates. 4 | 1 |
| P01 | Agentic FHIR-MCP | HL7 FHIR R4 | **Protocol Synthesis:** Automated mapping of unstructured notes to FHIR resources using terminology servers. 6 | 2 |
| P06 | Clinical Data Gateway | Blue Button 2.0 | **OAuth 2.0 Handshake:** Implementing the sandbox authorization flow for beneficiary data access. 1 | 2 |
| P09 | Cohort Generator | CMS Public-Use Files | **Validation Node:** Cross-referencing synthetic bundles against openFDA drug labeling for clinical fidelity. 8 | 2 |
| P04 | Claims Denial Agent | OIG LEIE (Neon Cache) | **Provider Integrity Middleware:** Checking rendering providers against the monthly LEIE exclusion cache. 11 | 3 |
| P02 | Prior Auth Pipeline | openFDA Labeling | **Evidence Assembly Node:** Extracting contraindications and indications directly from structured drug labels. 13 | 3 |
| P10 | Hospital-at-Home | Census Bureau ACS | **SDoH Risk Scorer:** Utilizing zip-code level broadband and housing data to adjust NEWS2 scores. 15 | 4 |

## **2\. Technical Deep-Dive: Enhancing the Reasoning Graph**

### **I. Production-Grade Compliance: The OIG LEIE Cache**

The OIG List of Excluded Individuals and Entities (LEIE) is only available as a monthly CSV download. 11 To support real-time agentic reasoning, the architecture is upgraded with a **GitHub Actions cron job** that:

1. Downloads the monthly LEIE CSV. 11  
2. Parses and upserts data into a **Neon PostgreSQL (Free Tier)** database.  
3. Exposes a **FastAPI endpoint** that P04 (Denials) and P13 (RCM Orchestrator) use to validate providers during claim assembly. 12

### **II. Resilient Interaction Logic: openFDA vs. Deprecated RxNav**

Following the discontinuation of RxNav's interaction API in 2024, the pharmacovigilance and prior auth nodes are rerouted to use the **openFDA Drug Labeling API**. 10 The agent uses the search=drug\_interactions:term parameter to retrieve the "Drug Interactions" section of the FPI (Full Prescribing Information) and applies LLM reasoning to identify clinically significant risks. 13

### **III. Zero-Licensing Oncology: NCI PDQ Summaries**

To avoid the institutional licensing requirements of NCCN, Pillar 4 (Care Delivery) projects now utilize the **NCI PDQ Cancer Summaries API**. 18 This provides free, no-auth, evidence-based guidance for oncology care paths, ensuring the portfolio remains fully "public-ready" and compliant with open-access standards. 18

## **3\. The 'Next Horizon' (New Project Blueprints)**

### **Project 13: The Integrated RCM & Denial Orchestrator**

* **Goal:** Bridge the gap between 'Automation' and 'ROI Capture' by reducing the "cost to collect" for health systems. 20  
* **DX Methodology Phase:** Automation \-\> ROI\_Capture.  
* **Suggested Stack:** LangGraph, FastAPI, Neon PostgreSQL, Blue Button 2.0 Sandbox. 2  
* **Public API Hook:** CMS Blue Button 2.0 (FHIR ExplanationOfBenefit resources). 2  
* **Reasoning Logic:** Uses a multi-agent team (Adam for A/R, Rachel for Appeals) to analyze denied claims in the sandbox, checking them against the **LEIE compliance cache** and **openFDA labeling** to autonomously draft appeal letters. 8

### **Project 14: SDoH-Aware Clinical Trial Discovery**

* **Goal:** Increase trial recruitment efficiency by matching patients based on both clinical eligibility and social determinants of health (SDoH). 24  
* **DX Methodology Phase:** Insights \-\> Automation.  
* **Suggested Stack:** ClinicalTrials.gov V2 API, Census Bureau API, Next.js 15\. 16  
* **Public API Hook:** ClinicalTrials.gov V2 (JSON-native access). 25  
* **Reasoning Logic:** The agent "reads" patient profiles from the Blue Button sandbox and matches them against trials using **Geospatial Filtering** (filter.geo) while cross-referencing **Census Bureau ACS data** to identify transportation barriers. 15

## **4\. Strategic Project Matrix**

| Project | Pillar | Impact | Ease of Impl. | Consulting Value |
| :---- | :---- | :---- | :---- | :---- |
| **P13: RCM Orchestrator** | 3 | Very High | Mid | ⭐⭐⭐⭐⭐ |
| **P02: Prior Auth** | 3 | High | Mid | ⭐⭐⭐⭐ |
| **P01: FHIR-MCP Bridge** | 2 | High | Low | ⭐⭐⭐⭐⭐ |
| **P14: Trial Navigator** | 4 | Mid | High | ⭐⭐⭐ |
| **P07: HAIRA Tool** | 1 | Mid | High | ⭐⭐⭐⭐ |

## **5\. Playbook Operationalization: Infrastructure Strategy**

| Provider | Service | Tier/Offering | Usage Context |
| :---- | :---- | :---- | :---- |
| **Neon** | Serverless Postgres | Permanent Free | Hosting the OIG LEIE and Regulations.gov cache. |
| **Vercel** | Edge Hosting | Permanent Free | Live deployment of the Portfolio dashboard and P11/P12 articles. |
| **MongoDB Atlas** | NoSQL Database | Permanent Free | Caching terminology mappings and FHIR resource fragments. 27 |
| **GitHub Actions** | CI/CD & Cron | Permanent Free | Automating the monthly LEIE CSV ingestion and openFDA daily sync. |
| **Google AI Pro** | Gemini 1.5 Pro | Subscription | Providing the agentic reasoning layer for P13/P14 capstones. 29 |
| **Azure/DO** | Credits ($100-$200) | Expiring Credits | **Reserved:** Short-term demo of P13/P14 during 60-90 day consultant showcase windows. 30 |

#### **Works cited**

1. API Documentation \- CMS Blue Button API, accessed March 26, 2026, [https://bluebutton.cms.gov/api-documentation/](https://bluebutton.cms.gov/api-documentation/)  
2. Blue Button 2.0 with OAuth2 | Documentation | Postman API Network, accessed March 26, 2026, [https://www.postman.com/api-evangelist/centers-for-medicare-and-medicaid-services-cms/documentation/vg4lkp3/blue-button-2-0-with-oauth2](https://www.postman.com/api-evangelist/centers-for-medicare-and-medicaid-services-cms/documentation/vg4lkp3/blue-button-2-0-with-oauth2)  
3. Blue Button 2.0 \- CMS, accessed March 26, 2026, [https://api.bluebutton.cms.gov/](https://api.bluebutton.cms.gov/)  
4. Regulations.gov API | GSA Open Technology, accessed March 26, 2026, [https://open.gsa.gov/api/regulationsgov/](https://open.gsa.gov/api/regulationsgov/)  
5. Public API Lists \- GitHub, accessed March 26, 2026, [https://github.com/public-api-lists/public-api-lists](https://github.com/public-api-lists/public-api-lists)  
6. Infherno: End-to-end Agent-based FHIR Resource Synthesis from Free-form Clinical Notes, accessed March 26, 2026, [https://arxiv.org/html/2507.12261v2](https://arxiv.org/html/2507.12261v2)  
7. LinuxForHealth FHIR Server – FHIR Terminology Guide \- GitHub Pages, accessed March 26, 2026, [https://linuxforhealth.github.io/FHIR/guides/FHIRTerminologyGuide/](https://linuxforhealth.github.io/FHIR/guides/FHIRTerminologyGuide/)  
8. Drug Adverse Event Overview \- openFDA, accessed March 26, 2026, [https://open.fda.gov/apis/drug/event/](https://open.fda.gov/apis/drug/event/)  
9. About the openFDA API, accessed March 26, 2026, [https://open.fda.gov/apis/](https://open.fda.gov/apis/)  
10. Drug API Endpoints \- openFDA, accessed March 26, 2026, [https://open.fda.gov/apis/drug/](https://open.fda.gov/apis/drug/)  
11. LEIE Downloadable Databases | Office of Inspector General | U.S. Department of Health and Human Services \- OIG \- HHS.gov, accessed March 26, 2026, [https://oig.hhs.gov/exclusions/exclusions\_list.asp](https://oig.hhs.gov/exclusions/exclusions_list.asp)  
12. Free OIG LEIE Verification Tool: Protect Your Healthcare Organization from Costly Exclusion Violations \- Assured, accessed March 26, 2026, [https://www.withassured.com/tools/oig-leie-verification-tool](https://www.withassured.com/tools/oig-leie-verification-tool)  
13. How to use the API \- openFDA, accessed March 26, 2026, [https://open.fda.gov/apis/drug/label/how-to-use-the-endpoint/](https://open.fda.gov/apis/drug/label/how-to-use-the-endpoint/)  
14. How Do I Use Prescription Drug Labeling \- FDA, accessed March 26, 2026, [https://www.fda.gov/about-fda/oncology-center-excellence/how-do-i-use-prescription-drug-labeling](https://www.fda.gov/about-fda/oncology-center-excellence/how-do-i-use-prescription-drug-labeling)  
15. Social Determinants of Health | PLACES \- CDC, accessed March 26, 2026, [https://www.cdc.gov/places/measure-definitions/social-determinants-of-health.html](https://www.cdc.gov/places/measure-definitions/social-determinants-of-health.html)  
16. Available APIs \- Census Bureau, accessed March 26, 2026, [https://www.census.gov/data/developers/data-sets.html](https://www.census.gov/data/developers/data-sets.html)  
17. Top 10 AI Denial Management Solutions for Reducing Healthcare Revenue Leakage in 2026 \- CombineHealth, accessed March 26, 2026, [https://www.combinehealth.ai/blog/ai-denial-management-solutions](https://www.combinehealth.ai/blog/ai-denial-management-solutions)  
18. Bridging AI and Oncology: A Deep Dive into the NCCN Guidelines MCP Server \- Skywork.ai, accessed March 26, 2026, [https://skywork.ai/skypage/en/ai-oncology-nccn-guidelines/1980476937340571648](https://skywork.ai/skypage/en/ai-oncology-nccn-guidelines/1980476937340571648)  
19. gscfwid/NCCN\_guidelines\_MCP: A Model Context Protocol (MCP) server that provides access to NCCN (National Comprehensive Cancer Network) clinical guidelines \- GitHub, accessed March 26, 2026, [https://github.com/gscfwid/NCCN\_guidelines\_MCP](https://github.com/gscfwid/NCCN_guidelines_MCP)  
20. Healthcare AI Agent Development: Compliance, Costs, and ROI in 2026, accessed March 26, 2026, [https://durapid.com/blog/healthcare-ai-agent-development-compliance-costs-and-roi-in-2026/](https://durapid.com/blog/healthcare-ai-agent-development-compliance-costs-and-roi-in-2026/)  
21. Model Context Protocol (MCP) with mimilabs, accessed March 26, 2026, [https://www.mimilabs.ai/mcp](https://www.mimilabs.ai/mcp)  
22. Understanding the Data \- CMS Blue Button API, accessed March 26, 2026, [https://bluebutton.cms.gov/data/understanding-the-data/](https://bluebutton.cms.gov/data/understanding-the-data/)  
23. 2022-2024 Social Determinants of Health Strategy \- State of Michigan, accessed March 26, 2026, [https://www.michigan.gov/mdhhs/inside-mdhhs/legislationpolicy/2022-2024-social-determinants-of-health-strategy](https://www.michigan.gov/mdhhs/inside-mdhhs/legislationpolicy/2022-2024-social-determinants-of-health-strategy)  
24. Enriching Real-world Data with Social Determinants of Health for Health Outcomes and Health Equity: Successes, Challenges, and Opportunities \- PMC, accessed March 26, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC10751148/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10751148/)  
25. clinicaltrials-api-v2 | Skills Marke... · LobeHub, accessed March 26, 2026, [https://lobehub.com/ar/skills/wentorai-research-plugins-clinicaltrials-api-v2](https://lobehub.com/ar/skills/wentorai-research-plugins-clinicaltrials-api-v2)  
26. clinicaltrials-api-v2 | Skills Marke... \- LobeHub, accessed March 26, 2026, [https://lobehub.com/skills/wentorai-research-plugins-clinicaltrials-api-v2](https://lobehub.com/skills/wentorai-research-plugins-clinicaltrials-api-v2)  
27. GitHub Student Developer Pack \- GitHub Education, accessed March 26, 2026, [https://education.github.com/pack?sort=popularity\&tag=Infrastructure+%26+APIs](https://education.github.com/pack?sort=popularity&tag=Infrastructure+%26+APIs)  
28. Marketplace API Specification \- CMS Developer Tools, accessed March 26, 2026, [https://developer.cms.gov/marketplace-api/api-spec](https://developer.cms.gov/marketplace-api/api-spec)  
29. keploy/public-apis-collection \- GitHub, accessed March 26, 2026, [https://github.com/keploy/public-apis-collection](https://github.com/keploy/public-apis-collection)  
30. GitHub Student Developer Pack \- GitHub Education, accessed March 26, 2026, [https://education.github.com/pack?sort=popularity\&tag=Developer+tools](https://education.github.com/pack?sort=popularity&tag=Developer+tools)  
31. GitHub Student Developer Pack, accessed March 26, 2026, [https://education.github.com/pack](https://education.github.com/pack)