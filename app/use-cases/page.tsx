import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FinalCTA from "@/components/FinalCTA";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Use Cases — Decision Engine",
  description:
    "See how leading companies use Decision Engine to automate lending, fraud detection, onboarding, and compliance workflows.",
};

const useCaseCards = [
  {
    industry: "Financial Services",
    title: "Credit & Lending",
    summary: "Automate underwriting decisions with multi-factor risk models that run in under 200ms.",
    href: "#lending",
  },
  {
    industry: "Insurance",
    title: "Underwriting Automation",
    summary: "Replace manual triage with rule-based eligibility checks and dynamic pricing engines.",
    href: "#insurance",
  },
  {
    industry: "Fraud & Risk",
    title: "Fraud Detection",
    summary: "Catch fraudulent transactions in real time using layered scoring and behavioral signals.",
    href: "#fraud",
  },
  {
    industry: "Customer Success",
    title: "Customer Onboarding",
    summary: "Automate KYC, identity verification, and account provisioning with configurable workflows.",
    href: "#onboarding",
  },
  {
    industry: "Legal & Finance",
    title: "Compliance Automation",
    summary: "Ensure regulatory adherence with audit-ready workflows for AML, GDPR, and Basel III.",
    href: "#compliance",
  },
  {
    industry: "Operations",
    title: "Internal Approvals",
    summary: "Route expense reports, procurement requests, and policy exceptions through structured approval chains.",
    href: "#approvals",
  },
];

type SpotlightStep = { label: string; value: string };

interface Spotlight {
  id: string;
  industry: string;
  title: string;
  problem: string;
  steps: SpotlightStep[];
  outcomes: { stat: string; label: string }[];
  dark: boolean;
}

const spotlights: Spotlight[] = [
  {
    id: "lending",
    industry: "Financial Services",
    title: "Credit & Lending Decisions",
    problem:
      "Manual underwriting is slow, inconsistent, and impossible to scale. Loan officers interpret rules differently, creating fair lending risk and customer experience gaps. Updating credit policy requires months of engineering work.",
    steps: [
      { label: "Input", value: "Applicant submits loan request" },
      { label: "Enrich", value: "Pull credit bureau, income, bank data" },
      { label: "Score", value: "Multi-factor risk scoring model runs" },
      { label: "Decide", value: "Tier assignment: Approve / Review / Decline" },
      { label: "Notify", value: "Applicant + CRM updated in real time" },
    ],
    outcomes: [
      { stat: "< 200ms", label: "Decision latency" },
      { stat: "60%", label: "Reduction in manual reviews" },
      { stat: "3×", label: "Faster policy updates" },
    ],
    dark: true,
  },
  {
    id: "fraud",
    industry: "Fraud & Risk",
    title: "Real-time Fraud Detection",
    problem:
      "Rule-based fraud systems are brittle and slow to adapt. New fraud patterns emerge faster than engineering can deploy responses. Meanwhile, false positives block legitimate customers and erode trust.",
    steps: [
      { label: "Event", value: "Transaction or account action triggers workflow" },
      { label: "Signal", value: "Device fingerprint, velocity, location analyzed" },
      { label: "Model", value: "ML anomaly score merged with rule-based flags" },
      { label: "Decide", value: "Allow / Flag for review / Block instantly" },
      { label: "Log", value: "Full decision trace stored for compliance" },
    ],
    outcomes: [
      { stat: "94%", label: "Fraud catch rate" },
      { stat: "47%", label: "Fewer false positives" },
      { stat: "< 50ms", label: "End-to-end latency" },
    ],
    dark: false,
  },
  {
    id: "onboarding",
    industry: "Customer Success",
    title: "Customer Onboarding & KYC",
    problem:
      "Identity verification, document checks, and account provisioning are stitched together across five different tools and two internal teams. Drop-off rates are high; compliance is inconsistent; engineering is the bottleneck for every process change.",
    steps: [
      { label: "Submit", value: "User submits identity documents" },
      { label: "Verify", value: "OCR + third-party ID check runs automatically" },
      { label: "Screen", value: "Sanctions, PEP, and watchlist screening" },
      { label: "Decide", value: "Auto-approve or route to manual review" },
      { label: "Provision", value: "Account created + CRM/Slack notified" },
    ],
    outcomes: [
      { stat: "78%", label: "Auto-approval rate" },
      { stat: "4 min", label: "Average onboarding time" },
      { stat: "100%", label: "Audit coverage" },
    ],
    dark: true,
  },
];

function WorkflowSteps({ steps, dark }: { steps: SpotlightStep[]; dark: boolean }) {
  const bgCard = dark ? "rgba(255,255,255,0.04)" : "rgba(0,102,255,0.03)";
  const borderCard = dark ? "rgba(0,102,255,0.2)" : "rgba(0,102,255,0.12)";
  const labelColor = dark ? "#90a1b9" : "#4a5565";
  const valueColor = dark ? "#ffffff" : "#111827";
  const connectorColor = dark ? "rgba(255,255,255,0.12)" : "rgba(0,102,255,0.15)";

  return (
    <div className="flex flex-col gap-2">
      {steps.map((step, i) => (
        <div key={step.label}>
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-lg"
            style={{ backgroundColor: bgCard, border: `1px solid ${borderCard}` }}
          >
            <span
              className="text-[11px] font-medium uppercase tracking-wide w-12 flex-shrink-0"
              style={{ color: "#0066ff" }}
            >
              {step.label}
            </span>
            <span className="text-[13px] font-normal" style={{ color: valueColor }}>
              {step.value}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex justify-center py-1" aria-hidden="true">
              <div className="w-px h-3" style={{ backgroundColor: connectorColor }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function UseCasesPage() {
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
              <Badge variant="primary">Use Cases</Badge>
            </div>
            <h1 className="text-[52px] font-medium leading-[1.1] tracking-tight text-white">
              Built for industries where decisions carry real consequences
            </h1>
            <p className="text-[18px] font-normal leading-[1.65]" style={{ color: "#90a1b9" }}>
              Decision Engine is used by lending teams, fraud analysts, compliance officers,
              and operations leads to automate the workflows that define their business.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <Button href="/pricing" variant="gradient" size="lg">
                Get started
              </Button>
              <Button href="#" variant="ghost" size="lg">
                Talk to sales
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Use case cards overview */}
      <Section variant="light">
        <Container className="py-20">
          <div className="flex flex-col gap-12">
            <SectionHeader
              label="Industries"
              heading="A workflow for every decision"
              description="From high-frequency fintech systems to manual compliance reviews — Decision Engine scales across use cases."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCaseCards.map((uc) => (
                <a
                  key={uc.title}
                  href={uc.href}
                  className="group flex flex-col gap-4 p-6 rounded-xl border transition-all hover:shadow-md hover:border-blue-200"
                  style={{
                    backgroundColor: "#ffffff",
                    borderColor: "#e5e7eb",
                    textDecoration: "none",
                  }}
                >
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: "#0066ff" }}>
                    {uc.industry}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[18px] font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
                      {uc.title}
                    </h3>
                    <p className="text-[15px] font-normal leading-[1.6]" style={{ color: "#4a5565" }}>
                      {uc.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 mt-auto" style={{ color: "#0066ff" }}>
                    <span className="text-[14px] font-medium">See how it works</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7h8M7 3l4 4-4 4" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Spotlight sections */}
      {spotlights.map((spotlight) => (
        <Section
          key={spotlight.id}
          id={spotlight.id}
          variant={spotlight.dark ? "dark-navy" : "white"}
        >
          <Container className="py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: problem + outcomes */}
              <div className={`flex flex-col gap-6 ${!spotlight.dark ? "lg:order-last" : ""}`}>
                <div className="flex flex-col gap-3">
                  <span
                    className="text-[11px] font-medium uppercase tracking-[0.14em]"
                    style={{ color: spotlight.dark ? "#90a1b9" : "#0066ff" }}
                  >
                    {spotlight.industry}
                  </span>
                  <h2
                    className="text-[36px] font-medium leading-[1.15] tracking-tight"
                    style={{ color: spotlight.dark ? "#ffffff" : "#111827" }}
                  >
                    {spotlight.title}
                  </h2>
                </div>
                <p
                  className="text-[17px] font-normal leading-[1.65]"
                  style={{ color: spotlight.dark ? "#90a1b9" : "#4a5565" }}
                >
                  {spotlight.problem}
                </p>

                {/* Outcomes */}
                <div
                  className="grid grid-cols-3 gap-3 mt-2 p-5 rounded-xl"
                  style={{
                    backgroundColor: spotlight.dark ? "rgba(255,255,255,0.04)" : "rgba(0,102,255,0.04)",
                    border: spotlight.dark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,102,255,0.1)",
                  }}
                >
                  {spotlight.outcomes.map(({ stat, label }) => (
                    <div key={label} className="flex flex-col gap-1 text-center">
                      <span
                        className="text-[22px] font-medium"
                        style={{ color: spotlight.dark ? "#ffffff" : "#111827" }}
                      >
                        {stat}
                      </span>
                      <span
                        className="text-[12px] leading-snug"
                        style={{ color: spotlight.dark ? "#90a1b9" : "#4a5565" }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: workflow steps */}
              <div className="flex flex-col gap-4">
                <span
                  className="text-[12px] font-medium uppercase tracking-[0.12em]"
                  style={{ color: spotlight.dark ? "#90a1b9" : "#4a5565" }}
                >
                  Workflow example
                </span>
                <WorkflowSteps steps={spotlight.steps} dark={spotlight.dark} />
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* Remaining use case teasers */}
      <Section variant="dark-gradient">
        <Container className="py-20">
          <div className="flex flex-col gap-12">
            <SectionHeader
              label="More use cases"
              heading="Also built on Decision Engine"
              align="center"
              dark
              labelColor="#90a1b9"
            />
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  id: "insurance",
                  title: "Insurance Underwriting",
                  desc: "Automate eligibility checks, dynamic pricing, and claims routing across product lines — without rebuilding your core system.",
                  stats: ["70% faster quote generation", "Consistent cross-channel pricing", "Audit-ready for state regulators"],
                },
                {
                  id: "compliance",
                  title: "Compliance Automation",
                  desc: "Enforce AML, KYC, and regulatory policies with workflows that adapt to rule changes without engineering involvement.",
                  stats: ["100% audit trail coverage", "Same-day policy updates", "SOC 2 & GDPR compliant"],
                },
                {
                  id: "approvals",
                  title: "Internal Approval Workflows",
                  desc: "Replace email chains and Slack threads with structured approval flows that enforce policy and maintain audit history.",
                  stats: ["Custom multi-level routing", "SLA tracking built in", "Integrates with Slack, email, JIRA"],
                },
              ].map((uc) => (
                <div
                  key={uc.id}
                  id={uc.id}
                  className="flex flex-col gap-5 p-6 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <h3 className="text-[20px] font-medium text-white">{uc.title}</h3>
                  <p className="text-[15px] font-normal leading-[1.65]" style={{ color: "#90a1b9" }}>
                    {uc.desc}
                  </p>
                  <ul className="flex flex-col gap-2" role="list">
                    {uc.stats.map((s) => (
                      <li key={s} className="flex items-center gap-2.5">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <circle cx="7" cy="7" r="5.5" stroke="#00c950" strokeWidth="1.2" />
                          <path d="M4.5 7l2 2 3-3" stroke="#00c950" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[14px]" style={{ color: "#90a1b9" }}>{s}</span>
                      </li>
                    ))}
                  </ul>
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
