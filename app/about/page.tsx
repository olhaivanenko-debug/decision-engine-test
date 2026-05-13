import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FinalCTA from "@/components/FinalCTA";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "About — Decision Engine",
  description:
    "Learn about our mission to give every business team direct ownership over the logic that drives their operations.",
};

const principles = [
  {
    title: "Business teams should own business logic",
    description:
      "Every time a risk analyst has to file a ticket to update a scoring rule, your organization moves slower than it should. We built Decision Engine so the people who understand the decisions can build, test, and ship them directly.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L2 6v4c0 4.4 3.4 8.5 8 9.5C14.6 18.5 18 14.4 18 10V6l-8-4z" stroke="#0066ff" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 10l2 2 4-4" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Governance is infrastructure, not a checkbox",
    description:
      "Audit trails, approval workflows, and version control aren't features you add later — they're the foundation that makes business-critical automation trustworthy. We enforce good process by making it the only available path.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="#0066ff" strokeWidth="1.5" />
        <path d="M7 9h6M7 12h4" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 6h2" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Decisions are events, not black boxes",
    description:
      "Every outcome your system produces should be traceable, explainable, and reproducible. We believe the decision infrastructure layer should be as observable as any other part of your stack.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="#0066ff" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="3" stroke="#0066ff" strokeWidth="1.5" />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Speed and compliance are not opposites",
    description:
      "The fastest way to ship compliant software is to build compliance into the tooling itself. When the platform enforces review gates and immutable logs, teams can move fast because the guardrails are structural, not procedural.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l2 6h6l-5 3.5 2 6L10 14l-5 3.5 2-6L2 8h6l2-6z" stroke="#0066ff" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const platformLayers = [
  {
    layer: "01",
    title: "Canvas & Workflow Designer",
    description: "The visual layer where business teams design, edit, and collaborate on decision logic without code.",
    tag: "No-code",
    tagColor: "#0066ff",
  },
  {
    layer: "02",
    title: "Rule & Scoring Engine",
    description: "A structured execution environment that evaluates conditions, weights, and ML outputs with deterministic results.",
    tag: "Core",
    tagColor: "#0066ff",
  },
  {
    layer: "03",
    title: "Data & Integration Layer",
    description: "Real-time connectors to your databases, third-party APIs, and data infrastructure — with schema validation and secrets management.",
    tag: "Connectivity",
    tagColor: "#00d4ff",
  },
  {
    layer: "04",
    title: "Governance & Audit Layer",
    description: "Mandatory approval gates, tamper-proof audit logs, and version control that enforce process across every change.",
    tag: "Compliance",
    tagColor: "#00c950",
  },
  {
    layer: "05",
    title: "Deployment & Runtime",
    description: "Staged rollouts, environment promotion, canary deployments, and instant rollback for production decision workflows.",
    tag: "Infrastructure",
    tagColor: "#90a1b9",
  },
  {
    layer: "06",
    title: "Observability & Analytics",
    description: "Decision volume tracking, latency dashboards, outcome distribution, and anomaly detection for production workflows.",
    tag: "Monitoring",
    tagColor: "#f0b100",
  },
];

const metrics = [
  { stat: "180M+", label: "Decisions processed monthly" },
  { stat: "400+", label: "Enterprise customers" },
  { stat: "60+", label: "Countries deployed in" },
  { stat: "< 150ms", label: "Median decision latency" },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* Hero / Mission */}
      <Section
        variant="dark-gradient-center"
        className="border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            width: 500,
            height: 500,
            top: -100,
            right: -80,
            backgroundColor: "#0066ff",
            filter: "blur(160px)",
            opacity: 0.1,
          }}
        />
        <Container className="relative py-24">
          <div className="flex flex-col gap-8 max-w-[760px]">
            <div>
              <Badge variant="muted">Our mission</Badge>
            </div>
            <h1 className="text-[56px] font-medium leading-[1.08] tracking-tight text-white">
              Infrastructure for the decisions that shape your business
            </h1>
            <p className="text-[20px] font-normal leading-[1.6]" style={{ color: "#90a1b9" }}>
              We started Decision Engine because we kept seeing the same problem: the most important
              logic in an organization was locked inside code that only engineers could touch,
              in systems that only engineers could explain.
            </p>
            <p className="text-[18px] font-normal leading-[1.65]" style={{ color: "#90a1b9" }}>
              That&apos;s not a technology problem — it&apos;s a governance problem. And the solution
              isn&apos;t better code. It&apos;s a platform that puts business teams back in control,
              without sacrificing the reliability, auditability, or operational trust that
              enterprise infrastructure demands.
            </p>
          </div>
        </Container>
      </Section>

      {/* Scale metrics */}
      <Section variant="dark-navy">
        <Container className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map(({ stat, label }) => (
              <div key={label} className="flex flex-col gap-2">
                <span className="text-[36px] font-medium text-white tracking-tight">{stat}</span>
                <span className="text-[14px] font-normal leading-snug" style={{ color: "#90a1b9" }}>{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* The problem we solve */}
      <Section variant="white">
        <Container className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-medium uppercase tracking-[0.14em]" style={{ color: "#0066ff" }}>
                Why we exist
              </span>
              <h2 className="text-[36px] font-medium leading-[1.15] tracking-tight text-gray-900">
                Decision-making infrastructure has been an afterthought for too long
              </h2>
              <p className="text-[17px] font-normal leading-[1.65]" style={{ color: "#4a5565" }}>
                Credit approvals live in Python scripts. Fraud rules live in Jira comments.
                Underwriting logic lives in the heads of three people who might leave next quarter.
                Compliance teams request audit logs that don&apos;t exist.
              </p>
              <p className="text-[17px] font-normal leading-[1.65]" style={{ color: "#4a5565" }}>
                This is what operational risk looks like in practice. And it compounds every time
                someone patches a rule without documentation, or delays a policy change because
                getting it deployed requires a sprint.
              </p>
              <p className="text-[17px] font-normal leading-[1.65]" style={{ color: "#4a5565" }}>
                Decision Engine is the layer that should have existed between your business
                stakeholders and your production systems. Version-controlled. Auditable. Testable.
                Owned by the people who understand the decisions.
              </p>
            </div>

            {/* Risk indicators panel */}
            <div className="flex flex-col gap-4">
              {[
                { risk: "Logic buried in code", impact: "Weeks to update a single rule", severity: "high" },
                { risk: "Tribal knowledge dependencies", impact: "Key-person risk on critical workflows", severity: "high" },
                { risk: "No audit trail", impact: "Unable to explain decisions to regulators", severity: "critical" },
                { risk: "No staging environment", impact: "Testing happens in production", severity: "high" },
                { risk: "Spreadsheet-managed rules", impact: "Version control doesn't exist", severity: "medium" },
              ].map(({ risk, impact, severity }) => (
                <div
                  key={risk}
                  className="flex items-start gap-4 p-4 rounded-lg border"
                  style={{ borderColor: "#f3f4f6", backgroundColor: "#f9fafb" }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                    style={{
                      backgroundColor: severity === "critical" ? "#fb2c36" : severity === "high" ? "#f0b100" : "#90a1b9",
                    }}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[14px] font-medium text-gray-800">{risk}</span>
                    <span className="text-[13px]" style={{ color: "#4a5565" }}>{impact}</span>
                  </div>
                  <span
                    className="flex-shrink-0 text-[10px] font-medium uppercase tracking-wide px-2 py-0.5 rounded ml-auto"
                    style={{
                      backgroundColor: severity === "critical" ? "rgba(251,44,54,0.1)" : severity === "high" ? "rgba(240,177,0,0.1)" : "rgba(144,161,185,0.1)",
                      color: severity === "critical" ? "#fb2c36" : severity === "high" ? "#f0b100" : "#90a1b9",
                    }}
                  >
                    {severity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Core principles */}
      <Section variant="light">
        <Container className="py-20">
          <div className="flex flex-col gap-14">
            <SectionHeader
              label="Our principles"
              heading="What we believe about decision infrastructure"
              align="center"
            />
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="flex flex-col gap-4 p-6 rounded-xl border"
                  style={{
                    borderColor: "rgba(0,102,255,0.1)",
                    background: "linear-gradient(135deg, rgba(0,102,255,0.03) 0%, rgba(0,102,255,0.01) 100%)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(0,102,255,0.08)" }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="text-[17px] font-medium leading-snug text-gray-900">{p.title}</h3>
                  <p className="text-[15px] font-normal leading-[1.65]" style={{ color: "#4a5565" }}>
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Platform architecture */}
      <Section variant="dark-gradient">
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            width: 600,
            height: 600,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <Container className="relative py-20">
          <div className="flex flex-col gap-14">
            <SectionHeader
              label="Platform overview"
              heading="Six layers. One coherent system."
              description="Every layer of Decision Engine is designed to interoperate — not bolt on. The result is a platform where governance is automatic and velocity is structurally enabled."
              align="center"
              dark
              labelColor="#90a1b9"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {platformLayers.map((layer) => (
                <div
                  key={layer.layer}
                  className="flex flex-col gap-4 p-5 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-medium font-mono" style={{ color: "#0066ff" }}>
                      {layer.layer}
                    </span>
                    <span
                      className="text-[11px] font-medium uppercase tracking-wide px-2 py-0.5 rounded"
                      style={{ backgroundColor: `${layer.tagColor}18`, color: layer.tagColor }}
                    >
                      {layer.tag}
                    </span>
                  </div>
                  <h3 className="text-[16px] font-medium text-white">{layer.title}</h3>
                  <p className="text-[14px] leading-[1.6]" style={{ color: "#90a1b9" }}>
                    {layer.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Empowering business teams */}
      <Section variant="dark-navy">
        <Container className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-medium uppercase tracking-[0.14em]" style={{ color: "#90a1b9" }}>
                Who we build for
              </span>
              <h2 className="text-[36px] font-medium leading-[1.15] tracking-tight text-white">
                Built for the teams that own the decisions
              </h2>
              <p className="text-[17px] font-normal leading-[1.65]" style={{ color: "#90a1b9" }}>
                Decision Engine is used by risk analysts, compliance officers, underwriters,
                fraud teams, and operations leads — people who know their domain deeply
                but have historically depended on engineering to translate that knowledge into
                running systems.
              </p>
              <p className="text-[17px] font-normal leading-[1.65]" style={{ color: "#90a1b9" }}>
                We believe those teams deserve tools as powerful as the ones engineers have.
                Not dumbed-down tools. Professional-grade infrastructure with a surface area
                they can actually operate.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <Button href="/features" variant="gradient" size="lg">
                  Explore the platform
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  Talk to us
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { role: "Risk Analyst", description: "Manages credit scoring models and threshold policies without filing engineering tickets.", action: "Updates rules in minutes, not sprint cycles" },
                { role: "Compliance Officer", description: "Has complete audit trail for every decision, exportable for any regulatory review.", action: "Runs full compliance reports in seconds" },
                { role: "Head of Operations", description: "Owns internal approval workflows and monitors SLA adherence from a live dashboard.", action: "Deploys process changes same-day" },
              ].map(({ role, description, action }) => (
                <div
                  key={role}
                  className="flex flex-col gap-3 p-5 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-[14px] font-medium text-white">{role}</span>
                  <p className="text-[14px] leading-[1.6]" style={{ color: "#90a1b9" }}>{description}</p>
                  <div className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <circle cx="6" cy="6" r="4.5" stroke="#00c950" strokeWidth="1.2" />
                      <path d="M3.5 6l2 2 3-3" stroke="#00c950" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[13px] font-medium" style={{ color: "#00c950" }}>{action}</span>
                  </div>
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
