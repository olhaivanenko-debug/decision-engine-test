import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FinalCTA from "@/components/FinalCTA";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Features — Decision Engine",
  description:
    "Explore the complete platform for intelligent decision automation — visual workflows, rule orchestration, AI integration, and enterprise governance.",
};

const capabilities = [
  {
    title: "Visual Workflow Builder",
    description: "Design decision flows on a drag-and-drop canvas. No code, no pipelines.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="#0066ff" strokeWidth="1.5" />
        <rect x="13" y="1" width="6" height="6" rx="1.5" stroke="#0066ff" strokeWidth="1.5" />
        <rect x="7" y="13" width="6" height="6" rx="1.5" stroke="#0066ff" strokeWidth="1.5" />
        <path d="M4 7v3c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V7" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 7v6" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Rule Orchestration",
    description: "Priority-based rule evaluation with decision tables, scoring, and branching logic.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L18 6.5v7L10 18l-8-4.5v-7L10 2z" stroke="#0066ff" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 10l8-3.5M10 10L2 6.5M10 10v8" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI-Assisted Decisions",
    description: "Embed ML models alongside rule logic. Let AI handle the gray areas, rules handle compliance.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="3" stroke="#0066ff" strokeWidth="1.5" />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Real-time Testing",
    description: "Validate logic with live data and synthetic test suites. Catch issues before production.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M7 3H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-3" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 3h5v5" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 3L9 11" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Audit Trails",
    description: "Tamper-proof logs for every decision. Full lineage, actor tracking, and regulatory export.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 4h12v14H4z" stroke="#0066ff" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 8h6M7 11h6M7 14h4" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 4V2h2v2" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Version Control",
    description: "Git-like versioning for every workflow. Compare diffs, branch for experiments, rollback in seconds.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="5" cy="5" r="2.5" stroke="#0066ff" strokeWidth="1.5" />
        <circle cx="15" cy="5" r="2.5" stroke="#0066ff" strokeWidth="1.5" />
        <circle cx="5" cy="15" r="2.5" stroke="#0066ff" strokeWidth="1.5" />
        <path d="M5 7.5v5M7.5 5h5M7.88 12.12l4.74-4.74" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Deployment Pipelines",
    description: "Promote workflows from dev to staging to production with environment-specific configs.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="8" width="4" height="4" rx="1" stroke="#0066ff" strokeWidth="1.5" />
        <rect x="8" y="8" width="4" height="4" rx="1" stroke="#0066ff" strokeWidth="1.5" />
        <rect x="14" y="8" width="4" height="4" rx="1" stroke="#0066ff" strokeWidth="1.5" />
        <path d="M6 10h2M12 10h2" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 6V4M10 16v-2" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Data Integrations",
    description: "Connect databases, APIs, data warehouses, and SaaS tools with pre-built connectors.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="#0066ff" strokeWidth="1.5" />
        <path d="M10 2s3.5 3.5 3.5 8S10 18 10 18" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 2S6.5 5.5 6.5 10s3.5 8 3.5 8" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 10h16" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Governance & Approvals",
    description: "Mandatory review gates, RBAC, change approvals, and compliance attestations before every deploy.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L3 5.5v5C3 14 6.5 17.5 10 18.5 13.5 17.5 17 14 17 10.5v-5L10 2z" stroke="#0066ff" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 10l2 2 4-4" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const integrations = [
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Snowflake", category: "Data Warehouse" },
  { name: "BigQuery", category: "Data Warehouse" },
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "Stripe", category: "Payments" },
  { name: "Plaid", category: "Fintech" },
  { name: "AWS S3", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Slack", category: "Notifications" },
  { name: "REST API", category: "Generic" },
];

const builderBullets = [
  "50+ pre-built node types: conditions, enrichment, scoring, routing",
  "Reusable sub-workflows eliminate logic duplication across teams",
  "Visual diff comparison between workflow versions",
  "Import existing spreadsheet logic with one click",
];

const engineBullets = [
  "Decision tables for structured business rules — no code required",
  "Priority-weighted rule evaluation with conflict resolution",
  "Real-time variable resolution from live data sources",
  "A/B testing framework for rule variants at scale",
];

const governanceBullets = [
  "Immutable audit log: every decision recorded with full context",
  "Mandatory approval gates before any production deployment",
  "Role-based access: authors, reviewers, publishers, auditors",
  "SOC 2 Type II compliant. GDPR and CCPA ready.",
];

export default function FeaturesPage() {
  return (
    <>
      <Navigation />

      {/* Page hero */}
      <Section
        variant="dark-gradient-center"
        className="border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <Container className="py-24">
          <div className="flex flex-col gap-7 max-w-[680px]">
            <div>
              <Badge variant="primary">Platform</Badge>
            </div>
            <h1 className="text-[52px] font-medium leading-[1.1] tracking-tight text-white">
              Every capability you need to govern decisions at scale
            </h1>
            <p className="text-[18px] font-normal leading-[1.65]" style={{ color: "#90a1b9" }}>
              From the first workflow you design to the ten-thousandth decision your system
              makes in production — Decision Engine gives you the infrastructure, tooling,
              and governance your team needs.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <Button href="/pricing" variant="gradient" size="lg">
                View pricing
              </Button>
              <Button href="#" variant="ghost" size="lg">
                Request demo
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Capabilities overview */}
      <Section variant="light">
        <Container className="py-20">
          <div className="flex flex-col gap-14">
            <SectionHeader
              label="Capabilities"
              heading="Nine capabilities. One platform."
              description="Everything in Decision Engine is designed to work together — no stitching tools, no glue code."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map((c) => (
                <div
                  key={c.title}
                  className="flex flex-col gap-4 p-6 rounded-xl border transition-shadow hover:shadow-sm"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,102,255,0.04) 0%, rgba(0,102,255,0.01) 100%)",
                    borderColor: "rgba(0,102,255,0.1)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(0,102,255,0.08)" }}
                  >
                    {c.icon}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[16px] font-medium text-gray-900">{c.title}</h3>
                    <p className="text-[14px] font-normal leading-[1.6]" style={{ color: "#4a5565" }}>
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Deep-dive: Visual Builder */}
      <Section variant="dark-navy">
        <Container className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-medium uppercase tracking-[0.14em]" style={{ color: "#90a1b9" }}>
                Visual Workflow Builder
              </span>
              <h2 className="text-[36px] font-medium leading-[1.15] tracking-tight text-white">
                Build complex workflows without writing a line of code
              </h2>
              <p className="text-[17px] font-normal leading-[1.65]" style={{ color: "#90a1b9" }}>
                Your business team shouldn&apos;t need a developer to update a decision rule.
                The visual canvas gives non-technical users full authorship over production logic.
              </p>
              <ul className="flex flex-col gap-3" role="list">
                {builderBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="6" stroke="#0066ff" strokeWidth="1.2" />
                      <path d="M5 8l2 2 4-4" stroke="#0066ff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[15px] leading-[1.55]" style={{ color: "#90a1b9" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Canvas mockup */}
            <div
              className="rounded-xl overflow-hidden shadow-2xl"
              style={{ backgroundColor: "#0f1629", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="flex items-center justify-between px-4 py-3 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="flex gap-1.5">
                  {["#fb2c36","#f0b100","#00c950"].map((c) => (
                    <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c, opacity: 0.6 }} />
                  ))}
                </div>
                <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Credit Scoring Workflow · v3.2
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(0,201,80,0.15)", color: "#00c950" }}>
                  Published
                </span>
              </div>
              <div className="p-5 flex flex-col gap-2">
                {[
                  { label: "Applicant Data", sub: "Name, DOB, SSN", type: "input" },
                  { label: "Credit Bureau Pull", sub: "Equifax · Experian · TransUnion", type: "data" },
                  { label: "Score ≥ 680?", sub: "Branching condition", type: "rule" },
                  { label: "Approve — Tier A Rate", sub: "→ Notify applicant", type: "success" },
                ].map((node, i) => {
                  const borderColor =
                    node.type === "rule" ? "rgba(240,177,0,0.35)"
                    : node.type === "success" ? "rgba(0,201,80,0.35)"
                    : "rgba(0,102,255,0.25)";
                  const dotColor =
                    node.type === "rule" ? "#f0b100"
                    : node.type === "success" ? "#00c950"
                    : "#0066ff";
                  return (
                    <div key={node.label}>
                      <div
                        className="flex items-center gap-3 px-4 py-3 rounded-lg"
                        style={{ background: `rgba(255,255,255,0.04)`, border: `1px solid ${borderColor}` }}
                      >
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: dotColor }} aria-hidden="true" />
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <span className="text-[13px] font-medium text-white">{node.label}</span>
                          <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>{node.sub}</span>
                        </div>
                      </div>
                      {i < 3 && (
                        <div className="flex justify-center py-1" aria-hidden="true">
                          <div className="w-px h-4" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Deep-dive: Rule Engine */}
      <Section variant="white">
        <Container className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Rule editor mockup */}
            <div
              className="rounded-xl overflow-hidden shadow-lg order-last lg:order-first"
              style={{ border: "1px solid #e5e7eb" }}
            >
              <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: "#e5e7eb", backgroundColor: "#f9fafb" }}>
                <span className="text-[13px] font-medium text-gray-700">Decision Table — Loan Tier</span>
                <span className="text-[11px] px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(0,102,255,0.08)", color: "#0066ff" }}>
                  12 rules active
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: "#f9fafb" }}>
                      {["Priority", "Credit Score", "DTI Ratio", "Outcome", "Rate"].map((h) => (
                        <th key={h} className="px-3 py-2 text-left font-medium" style={{ color: "#4a5565" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { p: "1", score: "≥ 750", dti: "< 36%", outcome: "Tier A", rate: "6.9%", ok: true },
                      { p: "2", score: "680–749", dti: "< 43%", outcome: "Tier B", rate: "8.4%", ok: true },
                      { p: "3", score: "620–679", dti: "< 50%", outcome: "Manual Review", rate: "—", ok: null },
                      { p: "4", score: "< 620", dti: "Any", outcome: "Decline", rate: "—", ok: false },
                    ].map((row) => (
                      <tr key={row.p} style={{ borderBottom: "1px solid #f3f4f6" }}>
                        <td className="px-3 py-2.5 font-mono text-gray-400">{row.p}</td>
                        <td className="px-3 py-2.5 text-gray-700">{row.score}</td>
                        <td className="px-3 py-2.5 text-gray-700">{row.dti}</td>
                        <td className="px-3 py-2.5">
                          <span
                            className="px-2 py-0.5 rounded text-[11px] font-medium"
                            style={{
                              backgroundColor: row.ok === true ? "rgba(0,201,80,0.1)" : row.ok === false ? "rgba(251,44,54,0.1)" : "rgba(240,177,0,0.1)",
                              color: row.ok === true ? "#00c950" : row.ok === false ? "#fb2c36" : "#f0b100",
                            }}
                          >
                            {row.outcome}
                          </span>
                        </td>
                        <td className="px-3 py-2.5 font-mono" style={{ color: "#4a5565" }}>{row.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-medium uppercase tracking-[0.14em]" style={{ color: "#0066ff" }}>
                Rule Orchestration Engine
              </span>
              <h2 className="text-[36px] font-medium leading-[1.15] tracking-tight text-gray-900">
                Sophisticated decision logic. Zero SQL required.
              </h2>
              <p className="text-[17px] font-normal leading-[1.65]" style={{ color: "#4a5565" }}>
                Replace brittle spreadsheets and hardcoded conditionals with a structured,
                version-controlled rule engine that non-technical teams can own and maintain.
              </p>
              <ul className="flex flex-col gap-3" role="list">
                {engineBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="6" stroke="#0066ff" strokeWidth="1.2" />
                      <path d="M5 8l2 2 4-4" stroke="#0066ff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[15px] leading-[1.55]" style={{ color: "#4a5565" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Deep-dive: Testing & Deployment */}
      <Section variant="dark-gradient">
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            width: 500,
            height: 500,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <Container className="relative py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-medium uppercase tracking-[0.14em]" style={{ color: "#90a1b9" }}>
                Testing & Deployment
              </span>
              <h2 className="text-[36px] font-medium leading-[1.15] tracking-tight text-white">
                Ship with confidence. Roll back in one click.
              </h2>
              <p className="text-[17px] font-normal leading-[1.65]" style={{ color: "#90a1b9" }}>
                Run your workflow against historical data, synthetic test suites, and edge cases
                before a single production decision is affected.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { stat: "100ms", label: "Avg test run time" },
                  { stat: "Zero", label: "Downtime during deploy" },
                  { stat: "1-click", label: "Rollback to any version" },
                  { stat: "∞", label: "Test cases per workflow" },
                ].map(({ stat, label }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 p-4 rounded-lg"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span className="text-[22px] font-medium text-white">{stat}</span>
                    <span className="text-[13px]" style={{ color: "#90a1b9" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal mockup */}
            <div
              className="rounded-xl overflow-hidden shadow-2xl font-mono text-[12px]"
              style={{ backgroundColor: "#0a0f1e", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="flex gap-1.5">
                  {["#fb2c36","#f0b100","#00c950"].map((c) => (
                    <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c, opacity: 0.6 }} />
                  ))}
                </div>
                <span style={{ color: "rgba(255,255,255,0.35)" }}>Test Runner — Credit Workflow v3.2</span>
              </div>
              <div className="p-5 flex flex-col gap-2">
                {[
                  { text: "$ de test run --workflow credit-scoring --suite regression", color: "#90a1b9" },
                  { text: "  Loading 2,847 test cases...", color: "#90a1b9" },
                  { text: "", color: "" },
                  { text: "  ✓  PASS  TC-0001  Applicant 780/DTI 28%  →  Tier A    12ms", color: "#00c950" },
                  { text: "  ✓  PASS  TC-0002  Applicant 710/DTI 38%  →  Tier B    8ms", color: "#00c950" },
                  { text: "  ✓  PASS  TC-0003  Applicant 590/DTI 61%  →  Decline   7ms", color: "#00c950" },
                  { text: "  ✓  PASS  TC-0004  Applicant 640/DTI 49%  →  Review    9ms", color: "#00c950" },
                  { text: "", color: "" },
                  { text: "  Completed: 2,847/2,847 cases  ·  0 failures  ·  4.1s", color: "#ffffff" },
                  { text: "  Coverage: 98.4%  ·  Ready to promote to staging.", color: "#90a1b9" },
                ].map((line, i) => (
                  <div key={i} style={{ color: line.color || "transparent", lineHeight: "1.5" }}>
                    {line.text || "\u00a0"}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Deep-dive: Governance */}
      <Section variant="light">
        <Container className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Audit log mockup */}
            <div
              className="rounded-xl overflow-hidden shadow-lg order-last lg:order-first"
              style={{ border: "1px solid #e5e7eb" }}
            >
              <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: "#e5e7eb", backgroundColor: "#f9fafb" }}>
                <span className="text-[13px] font-medium text-gray-700">Audit Log</span>
                <span className="text-[11px]" style={{ color: "#4a5565" }}>3,847 events this month</span>
              </div>
              <div className="flex flex-col divide-y" style={{ borderColor: "#f3f4f6" }}>
                {[
                  { time: "14:32:07", actor: "sarah.chen", event: "Deployed v3.2 to production", tag: "deploy", ok: true },
                  { time: "14:28:14", actor: "james.wu", event: "Approved deployment request", tag: "approve", ok: true },
                  { time: "14:21:09", actor: "sarah.chen", event: "Submitted deployment for review", tag: "review", ok: null },
                  { time: "13:55:40", actor: "system", event: "2,847 test cases passed", tag: "test", ok: true },
                  { time: "13:42:11", actor: "sarah.chen", event: "Updated rule: Score threshold 680→670", tag: "edit", ok: null },
                ].map((entry) => (
                  <div key={entry.time} className="flex items-start gap-3 px-4 py-3" style={{ borderColor: "#f3f4f6" }}>
                    <span className="text-[11px] font-mono flex-shrink-0 mt-0.5" style={{ color: "#90a1b9" }}>{entry.time}</span>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-[12px] text-gray-800 leading-snug">{entry.event}</span>
                      <span className="text-[11px]" style={{ color: "#90a1b9" }}>{entry.actor}</span>
                    </div>
                    <span
                      className="flex-shrink-0 text-[10px] font-medium uppercase px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: entry.ok === true ? "rgba(0,201,80,0.1)" : entry.ok === false ? "rgba(251,44,54,0.1)" : "rgba(0,102,255,0.08)",
                        color: entry.ok === true ? "#00c950" : entry.ok === false ? "#fb2c36" : "#0066ff",
                      }}
                    >
                      {entry.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-medium uppercase tracking-[0.14em]" style={{ color: "#0066ff" }}>
                Governance & Compliance
              </span>
              <h2 className="text-[36px] font-medium leading-[1.15] tracking-tight text-gray-900">
                Enterprise-grade compliance, built in from day one
              </h2>
              <p className="text-[17px] font-normal leading-[1.65]" style={{ color: "#4a5565" }}>
                Regulated industries can&apos;t afford uncontrolled changes to production logic.
                Decision Engine enforces process — not as an afterthought, but as a core capability.
              </p>
              <ul className="flex flex-col gap-3" role="list">
                {governanceBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="6" stroke="#0066ff" strokeWidth="1.2" />
                      <path d="M5 8l2 2 4-4" stroke="#0066ff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[15px] leading-[1.55]" style={{ color: "#4a5565" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Integrations */}
      <Section variant="dark-deep">
        <Container className="py-20">
          <div className="flex flex-col gap-12">
            <SectionHeader
              label="Integrations"
              heading="Connect to your entire data stack"
              description="Pre-built connectors for the tools you already use. Custom REST and GraphQL integrations in minutes."
              align="center"
              dark
              labelColor="#90a1b9"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {integrations.map((intg) => (
                <div
                  key={intg.name}
                  className="flex flex-col gap-1 p-4 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-[14px] font-medium text-white">{intg.name}</span>
                  <span className="text-[12px]" style={{ color: "#90a1b9" }}>{intg.category}</span>
                </div>
              ))}
              <div
                className="flex items-center justify-center p-4 rounded-xl col-span-2 md:col-span-1"
                style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.12)" }}
              >
                <span className="text-[13px]" style={{ color: "#90a1b9" }}>+ REST / GraphQL / Webhooks</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
