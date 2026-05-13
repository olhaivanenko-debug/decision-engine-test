import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FinalCTA from "@/components/FinalCTA";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "How It Works — Decision Engine",
  description:
    "Understand the complete decision workflow lifecycle — from design to deployment and ongoing monitoring.",
};

const steps = [
  {
    number: "01",
    phase: "Design",
    title: "Design your workflow on the visual canvas",
    description:
      "Start from a blank canvas or one of our industry templates. Drag in nodes for data inputs, conditions, scoring, and actions. Connect them visually — the platform enforces valid logic as you build.",
    details: [
      "50+ pre-built node types for every decision pattern",
      "Import logic from existing Excel or Google Sheets",
      "Reusable sub-workflows keep complex logic DRY",
      "Real-time validation catches structural errors instantly",
    ],
    visual: {
      type: "canvas",
      nodes: [
        { label: "Customer Data", color: "#0066ff", type: "input" },
        { label: "Risk Score", color: "#0066ff", type: "process" },
        { label: "Approve / Decline", color: "#f0b100", type: "decision" },
      ],
    },
  },
  {
    number: "02",
    phase: "Connect",
    title: "Connect your data sources and APIs",
    description:
      "Integrate with your existing databases, third-party data providers, and internal APIs in minutes. No custom connectors to write — configure once, reuse across all workflows.",
    details: [
      "Pre-built connectors for Salesforce, Postgres, BigQuery, Stripe",
      "Custom REST and GraphQL endpoints with header auth",
      "Schema auto-detection and field mapping UI",
      "Secrets management with environment-level isolation",
    ],
    visual: {
      type: "integrations",
      items: [
        { name: "PostgreSQL", status: "connected" },
        { name: "Equifax API", status: "connected" },
        { name: "Stripe", status: "connected" },
        { name: "Internal CRM", status: "pending" },
      ],
    },
  },
  {
    number: "03",
    phase: "Define",
    title: "Define your decision logic",
    description:
      "Use decision tables, scoring models, and conditional branches to encode your business rules. Logic is stored as structured data — not code — so business teams can understand and modify it directly.",
    details: [
      "Decision tables with priority-based evaluation",
      "Weighted scoring across multiple signals",
      "A/B testing framework for rule experiments",
      "Change history with inline diff comparisons",
    ],
    visual: {
      type: "rules",
      rows: [
        { condition: "Score ≥ 750 AND DTI < 36%", outcome: "Approve · Tier A", color: "#00c950" },
        { condition: "Score 680–749 AND DTI < 43%", outcome: "Approve · Tier B", color: "#00c950" },
        { condition: "Score 620–679", outcome: "Manual Review", color: "#f0b100" },
        { condition: "Score < 620", outcome: "Decline", color: "#fb2c36" },
      ],
    },
  },
  {
    number: "04",
    phase: "Test",
    title: "Simulate and test before any production impact",
    description:
      "Run your workflow against historical data, synthetic test cases, or live staging traffic. Step through decisions one node at a time to debug unexpected outcomes.",
    details: [
      "Batch testing against thousands of historical records",
      "Step-by-step trace mode with variable inspection",
      "Compare outcomes between workflow versions",
      "Automated regression suite on every save",
    ],
    visual: {
      type: "terminal",
      lines: [
        { text: "Running 2,847 regression tests...", color: "#90a1b9" },
        { text: "✓  2,841 passed", color: "#00c950" },
        { text: "✗  6 failed — delta from v3.1", color: "#f0b100" },
        { text: "View diff →", color: "#0066ff" },
      ],
    },
  },
  {
    number: "05",
    phase: "Deploy",
    title: "Deploy through a governed approval pipeline",
    description:
      "Submit your workflow for review. Required approvers are notified, changes are diff-compared against production, and deployment is one click after sign-off. Roll back instantly if anything is wrong.",
    details: [
      "Configurable approval chains by team or risk level",
      "Mandatory diff review before any production deploy",
      "Staged rollouts: canary → 10% → 100%",
      "One-click rollback to any previous version",
    ],
    visual: {
      type: "approval",
      stages: [
        { label: "Submitted", status: "done" },
        { label: "Review", status: "done" },
        { label: "Approved", status: "done" },
        { label: "Production", status: "active" },
      ],
    },
  },
  {
    number: "06",
    phase: "Monitor",
    title: "Monitor decisions and iterate continuously",
    description:
      "Every decision is logged with full context: inputs, rule matches, outcomes, and latency. Dashboards surface anomalies, drift, and performance degradation before they become incidents.",
    details: [
      "Real-time decision volume and latency dashboards",
      "Outcome distribution tracking over time",
      "Anomaly alerts when patterns shift unexpectedly",
      "Full audit trail for regulatory inspection",
    ],
    visual: {
      type: "metrics",
      stats: [
        { value: "24,847", label: "Decisions today", up: true },
        { value: "147ms", label: "Avg latency", up: false },
        { value: "98.4%", label: "Auto-resolved", up: true },
        { value: "0", label: "Errors", up: false },
      ],
    },
  },
];

function StepVisual({ step }: { step: typeof steps[0] }) {
  const { visual } = step;

  if (visual.type === "canvas" && visual.nodes) {
    return (
      <div
        className="rounded-xl p-5 flex flex-col gap-2"
        style={{ backgroundColor: "#0f1629", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {visual.nodes.map((node, i) => (
          <div key={node.label}>
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-lg"
              style={{
                background: node.type === "decision"
                  ? "rgba(240,177,0,0.08)"
                  : "rgba(0,102,255,0.08)",
                border: `1px solid ${node.type === "decision" ? "rgba(240,177,0,0.25)" : "rgba(0,102,255,0.2)"}`,
              }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color }} aria-hidden="true" />
              <span className="text-[13px] text-white font-medium">{node.label}</span>
            </div>
            {i < visual.nodes!.length - 1 && (
              <div className="flex justify-center py-1.5" aria-hidden="true">
                <div className="w-px h-3" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (visual.type === "integrations" && visual.items) {
    return (
      <div className="grid grid-cols-2 gap-3">
        {visual.items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between p-3.5 rounded-lg"
            style={{ backgroundColor: "#0f1629", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span className="text-[13px] font-medium text-white">{item.name}</span>
            <span
              className="text-[11px] px-2 py-0.5 rounded"
              style={{
                backgroundColor: item.status === "connected" ? "rgba(0,201,80,0.12)" : "rgba(240,177,0,0.12)",
                color: item.status === "connected" ? "#00c950" : "#f0b100",
              }}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (visual.type === "rules" && visual.rows) {
    return (
      <div
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="px-4 py-2.5 flex gap-4 text-[11px] font-medium uppercase tracking-wide border-b" style={{ backgroundColor: "#0f1629", borderColor: "rgba(255,255,255,0.08)", color: "#90a1b9" }}>
          <span className="flex-1">Condition</span>
          <span>Outcome</span>
        </div>
        {visual.rows.map((row) => (
          <div
            key={row.condition}
            className="flex items-center justify-between gap-4 px-4 py-3 border-b last:border-0"
            style={{ backgroundColor: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}
          >
            <span className="text-[12px] font-mono" style={{ color: "#90a1b9" }}>{row.condition}</span>
            <span
              className="flex-shrink-0 text-[11px] font-medium px-2.5 py-1 rounded"
              style={{ backgroundColor: `${row.color}18`, color: row.color }}
            >
              {row.outcome}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (visual.type === "terminal" && visual.lines) {
    return (
      <div
        className="rounded-xl p-5 font-mono text-[13px]"
        style={{ backgroundColor: "#0a0f1e", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="flex gap-1.5 mb-4">
          {["#fb2c36","#f0b100","#00c950"].map((c) => (
            <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c, opacity: 0.6 }} aria-hidden="true" />
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {visual.lines.map((line, i) => (
            <div key={i} style={{ color: line.color }}>{line.text}</div>
          ))}
        </div>
      </div>
    );
  }

  if (visual.type === "approval" && visual.stages) {
    return (
      <div className="flex flex-col gap-2">
        {visual.stages.map((stage, i) => (
          <div key={stage.label} className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[12px] font-medium"
              style={{
                backgroundColor: stage.status === "done" ? "rgba(0,201,80,0.15)" : stage.status === "active" ? "rgba(0,102,255,0.2)" : "rgba(255,255,255,0.05)",
                color: stage.status === "done" ? "#00c950" : stage.status === "active" ? "#0066ff" : "#90a1b9",
                border: `1px solid ${stage.status === "done" ? "rgba(0,201,80,0.3)" : stage.status === "active" ? "rgba(0,102,255,0.4)" : "rgba(255,255,255,0.1)"}`,
              }}
            >
              {stage.status === "done" ? "✓" : String(i + 1)}
            </div>
            <span
              className="text-[14px]"
              style={{ color: stage.status === "active" ? "#ffffff" : stage.status === "done" ? "#90a1b9" : "#4a5565" }}
            >
              {stage.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (visual.type === "metrics" && visual.stats) {
    return (
      <div className="grid grid-cols-2 gap-3">
        {visual.stats.map(({ value, label, up }) => (
          <div
            key={label}
            className="flex flex-col gap-1 p-4 rounded-lg"
            style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <span className="text-[22px] font-medium text-white">{value}</span>
            <span className="text-[12px]" style={{ color: "#90a1b9" }}>{label}</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <Section
        variant="dark-gradient-center"
        className="border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <Container className="py-24">
          <div className="flex flex-col gap-7 max-w-[680px]">
            <div>
              <Badge variant="muted">How It Works</Badge>
            </div>
            <h1 className="text-[52px] font-medium leading-[1.1] tracking-tight text-white">
              The complete decision workflow lifecycle
            </h1>
            <p className="text-[18px] font-normal leading-[1.65]" style={{ color: "#90a1b9" }}>
              Six phases from first draft to production monitoring. Designed for the teams
              building the logic and the leaders who need to trust it.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <Button href="#" variant="gradient" size="lg">
                Start building free
              </Button>
              <Button href="#" variant="ghost" size="lg">
                Watch walkthrough
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Phase steps */}
      {steps.map((step, i) => {
        const isDark = i % 2 === 0;
        return (
          <Section key={step.number} variant={isDark ? "dark-navy" : "white"}>
            <Container className="py-20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Text */}
                <div className={`flex flex-col gap-6 ${!isDark && i % 4 === 3 ? "lg:order-last" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[14px] font-medium font-mono"
                      style={{ color: isDark ? "#0066ff" : "#0066ff" }}
                    >
                      {step.number}
                    </span>
                    <span
                      className="text-[11px] font-medium uppercase tracking-[0.14em]"
                      style={{ color: isDark ? "#90a1b9" : "#4a5565" }}
                    >
                      {step.phase}
                    </span>
                  </div>
                  <h2
                    className="text-[32px] font-medium leading-[1.2] tracking-tight"
                    style={{ color: isDark ? "#ffffff" : "#111827" }}
                  >
                    {step.title}
                  </h2>
                  <p
                    className="text-[17px] font-normal leading-[1.65]"
                    style={{ color: isDark ? "#90a1b9" : "#4a5565" }}
                  >
                    {step.description}
                  </p>
                  <ul className="flex flex-col gap-2.5" role="list">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <circle cx="7" cy="7" r="5.5" stroke="#0066ff" strokeWidth="1.2" />
                          <path d="M4.5 7l2 2 3-3" stroke="#0066ff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span
                          className="text-[14px] leading-[1.55]"
                          style={{ color: isDark ? "#90a1b9" : "#4a5565" }}
                        >
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={!isDark ? "lg:order-first" : ""}>
                  <StepVisual step={step} />
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Architecture overview */}
      <Section variant="dark-deep">
        <Container className="py-20">
          <div className="flex flex-col gap-12">
            <SectionHeader
              label="Architecture"
              heading="Built for production scale"
              description="Every component of Decision Engine is designed for high availability, low latency, and enterprise-grade security."
              align="center"
              dark
              labelColor="#90a1b9"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Sub-200ms", desc: "P99 decision latency in production", icon: "⚡" },
                { title: "99.99%", desc: "Uptime SLA for Enterprise customers", icon: "🔒" },
                { title: "SOC 2 II", desc: "Compliant data handling and storage", icon: "✓" },
                { title: "Multi-region", desc: "Deploy workflows close to your users", icon: "🌐" },
              ].map(({ title, desc, icon }) => (
                <div
                  key={title}
                  className="flex flex-col gap-3 p-5 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-[20px]" role="img" aria-hidden="true">{icon}</span>
                  <span className="text-[20px] font-medium text-white">{title}</span>
                  <span className="text-[13px] leading-snug" style={{ color: "#90a1b9" }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
