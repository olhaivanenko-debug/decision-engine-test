import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FinalCTA from "@/components/FinalCTA";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Pricing — Decision Engine",
  description:
    "Simple, transparent pricing for teams of every size. From startup to enterprise.",
};

type Tier = {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  ctaVariant: "primary" | "gradient" | "ghost" | "outline";
  featured: boolean;
  badge?: string;
  features: string[];
  limits: { label: string; value: string }[];
};

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$149",
    period: "/ month",
    description: "For small teams building their first decision workflows.",
    cta: "Start free trial",
    ctaVariant: "outline",
    featured: false,
    features: [
      "Visual workflow builder",
      "Decision rules engine",
      "5 data integrations",
      "REST API access",
      "Basic version history (30 days)",
      "Community support",
    ],
    limits: [
      { label: "Workflows", value: "5 active" },
      { label: "Decisions / month", value: "50,000" },
      { label: "Team members", value: "3 seats" },
      { label: "Environments", value: "Dev + Prod" },
    ],
  },
  {
    name: "Growth",
    price: "$599",
    period: "/ month",
    description: "For scaling companies that need reliability, analytics, and controls.",
    cta: "Start free trial",
    ctaVariant: "gradient",
    featured: true,
    badge: "Most popular",
    features: [
      "Everything in Starter",
      "AI-assisted decision suggestions",
      "Unlimited integrations",
      "Advanced analytics & dashboards",
      "Version history (90 days)",
      "Approval workflows",
      "SSO via SAML",
      "Priority email + Slack support",
    ],
    limits: [
      { label: "Workflows", value: "25 active" },
      { label: "Decisions / month", value: "500,000" },
      { label: "Team members", value: "15 seats" },
      { label: "Environments", value: "Dev + Staging + Prod" },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For regulated industries requiring governance, SLAs, and dedicated support.",
    cta: "Contact sales",
    ctaVariant: "primary",
    featured: false,
    features: [
      "Everything in Growth",
      "Unlimited workflows",
      "Unlimited decisions",
      "Unlimited team members",
      "Unlimited audit history",
      "Dedicated deployment environments",
      "Custom SLA (99.99% uptime)",
      "SOC 2 II, GDPR, HIPAA ready",
      "Dedicated customer success manager",
      "Custom contract & invoicing",
    ],
    limits: [
      { label: "Workflows", value: "Unlimited" },
      { label: "Decisions / month", value: "Unlimited" },
      { label: "Team members", value: "Unlimited" },
      { label: "Environments", value: "Custom" },
    ],
  },
];

const comparisonFeatures = [
  {
    category: "Core",
    rows: [
      { feature: "Visual workflow builder", starter: true, growth: true, enterprise: true },
      { feature: "Rule orchestration engine", starter: true, growth: true, enterprise: true },
      { feature: "REST API access", starter: true, growth: true, enterprise: true },
      { feature: "Data integrations", starter: "5", growth: "Unlimited", enterprise: "Unlimited" },
      { feature: "Active workflows", starter: "5", growth: "25", enterprise: "Unlimited" },
      { feature: "Decisions / month", starter: "50K", growth: "500K", enterprise: "Unlimited" },
    ],
  },
  {
    category: "Intelligence",
    rows: [
      { feature: "AI-assisted rule suggestions", starter: false, growth: true, enterprise: true },
      { feature: "ML model embedding", starter: false, growth: true, enterprise: true },
      { feature: "A/B testing framework", starter: false, growth: true, enterprise: true },
      { feature: "Anomaly detection alerts", starter: false, growth: true, enterprise: true },
    ],
  },
  {
    category: "Governance",
    rows: [
      { feature: "Version control", starter: "30 days", growth: "90 days", enterprise: "Unlimited" },
      { feature: "Approval workflows", starter: false, growth: true, enterprise: true },
      { feature: "Role-based access control", starter: false, growth: true, enterprise: true },
      { feature: "SSO (SAML 2.0)", starter: false, growth: true, enterprise: true },
      { feature: "SOC 2 II compliance", starter: false, growth: false, enterprise: true },
      { feature: "Custom audit export", starter: false, growth: false, enterprise: true },
    ],
  },
  {
    category: "Infrastructure",
    rows: [
      { feature: "Uptime SLA", starter: "99.9%", growth: "99.9%", enterprise: "99.99%" },
      { feature: "Dedicated environments", starter: false, growth: false, enterprise: true },
      { feature: "Multi-region deployment", starter: false, growth: false, enterprise: true },
    ],
  },
  {
    category: "Support",
    rows: [
      { feature: "Community forum", starter: true, growth: true, enterprise: true },
      { feature: "Email support", starter: true, growth: true, enterprise: true },
      { feature: "Priority Slack channel", starter: false, growth: true, enterprise: true },
      { feature: "Dedicated CSM", starter: false, growth: false, enterprise: true },
      { feature: "Custom onboarding", starter: false, growth: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    q: "What counts as a decision?",
    a: "A decision is one execution of a workflow — a single API call that runs your logic from input to output. Multiple rule evaluations within one workflow execution count as one decision.",
  },
  {
    q: "Can I change plans mid-cycle?",
    a: "Yes. Upgrades take effect immediately and are prorated. Downgrades apply at your next billing cycle. Enterprise customers work with their CSM for any contract modifications.",
  },
  {
    q: "Is there a free trial?",
    a: "Starter and Growth plans include a 14-day free trial with full access and no credit card required. After 14 days, you can choose to continue with a paid plan or export your workflows.",
  },
  {
    q: "How does Enterprise pricing work?",
    a: "Enterprise pricing is based on your decision volume, number of environments, and required compliance certifications. Contact our sales team for a custom quote — most Enterprise deals close in 2–4 weeks.",
  },
  {
    q: "What data regions are available?",
    a: "US-East and EU-West are available on all plans. Additional regions (APAC, US-West, custom) are available on Enterprise. All data is encrypted at rest and in transit.",
  },
  {
    q: "Can I self-host Decision Engine?",
    a: "A self-hosted (on-premise) deployment option is available for Enterprise customers with specific data sovereignty requirements. Contact sales to discuss architecture.",
  },
];

function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" stroke="#00c950" strokeWidth="1.2" />
      <path d="M4.5 7l2 2 3-3" stroke="#00c950" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" stroke="rgba(144,161,185,0.3)" strokeWidth="1.2" />
    </svg>
  );
}

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) return <CheckIcon />;
  if (value === false) return <XIcon />;
  return <span className="text-[13px]" style={{ color: "#4a5565" }}>{value}</span>;
}

export default function PricingPage() {
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
          <div className="flex flex-col items-center text-center gap-6 max-w-[600px] mx-auto">
            <Badge variant="primary">Pricing</Badge>
            <h1 className="text-[52px] font-medium leading-[1.1] tracking-tight text-white">
              Simple, transparent pricing
            </h1>
            <p className="text-[18px] font-normal leading-[1.65]" style={{ color: "#90a1b9" }}>
              Start free. Scale as you grow. Enterprise contracts for teams that need
              compliance, custom SLAs, and dedicated support.
            </p>
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="5.5" stroke="#00c950" strokeWidth="1.2" />
                  <path d="M4.5 7l2 2 3-3" stroke="#00c950" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px]" style={{ color: "#90a1b9" }}>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="5.5" stroke="#00c950" strokeWidth="1.2" />
                  <path d="M4.5 7l2 2 3-3" stroke="#00c950" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px]" style={{ color: "#90a1b9" }}>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="5.5" stroke="#00c950" strokeWidth="1.2" />
                  <path d="M4.5 7l2 2 3-3" stroke="#00c950" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px]" style={{ color: "#90a1b9" }}>Cancel anytime</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing tiers */}
      <Section variant="light">
        <Container className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col rounded-xl overflow-hidden"
                style={{
                  border: tier.featured ? "1.5px solid rgba(0,102,255,0.5)" : "1px solid #e5e7eb",
                  backgroundColor: tier.featured ? "#0f1629" : "#ffffff",
                  boxShadow: tier.featured ? "0 0 0 4px rgba(0,102,255,0.08)" : undefined,
                }}
              >
                {/* Tier header */}
                <div
                  className="p-6 flex flex-col gap-4 border-b"
                  style={{ borderColor: tier.featured ? "rgba(255,255,255,0.08)" : "#f3f4f6" }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[15px] font-medium"
                      style={{ color: tier.featured ? "#ffffff" : "#111827" }}
                    >
                      {tier.name}
                    </span>
                    {tier.badge && (
                      <Badge variant="primary">{tier.badge}</Badge>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-[40px] font-medium tracking-tight leading-none"
                      style={{ color: tier.featured ? "#ffffff" : "#111827" }}
                    >
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-[16px]" style={{ color: tier.featured ? "#90a1b9" : "#4a5565" }}>
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p className="text-[14px] leading-snug" style={{ color: tier.featured ? "#90a1b9" : "#4a5565" }}>
                    {tier.description}
                  </p>
                  <Button href="#" variant={tier.ctaVariant} size="md">
                    {tier.cta}
                  </Button>
                </div>

                {/* Limits */}
                <div
                  className="px-6 py-4 grid grid-cols-2 gap-x-4 gap-y-3 border-b"
                  style={{ borderColor: tier.featured ? "rgba(255,255,255,0.08)" : "#f3f4f6" }}
                >
                  {tier.limits.map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-0.5">
                      <span className="text-[11px] uppercase tracking-wide" style={{ color: tier.featured ? "#90a1b9" : "#90a1b9" }}>
                        {label}
                      </span>
                      <span className="text-[14px] font-medium" style={{ color: tier.featured ? "#ffffff" : "#111827" }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="p-6 flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span
                        className="text-[14px] leading-snug"
                        style={{ color: tier.featured ? "#90a1b9" : "#4a5565" }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Feature comparison table */}
      <Section variant="white">
        <Container className="py-20">
          <div className="flex flex-col gap-12">
            <SectionHeader
              label="Compare plans"
              heading="Full feature comparison"
              align="center"
            />
            <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "#e5e7eb" }}>
              <table className="w-full text-[13px]">
                <thead>
                  <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <th className="px-5 py-4 text-left font-normal" style={{ color: "#4a5565", width: "40%" }}>
                      Feature
                    </th>
                    {["Starter", "Growth", "Enterprise"].map((t, i) => (
                      <th key={t} className="px-5 py-4 text-center font-medium" style={{ color: i === 1 ? "#0066ff" : "#111827" }}>
                        {t}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((section) => (
                    <>
                      <tr key={`${section.category}-header`} style={{ backgroundColor: "#f9fafb" }}>
                        <td
                          colSpan={4}
                          className="px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wider"
                          style={{ color: "#90a1b9" }}
                        >
                          {section.category}
                        </td>
                      </tr>
                      {section.rows.map((row) => (
                        <tr key={row.feature} style={{ borderTop: "1px solid #f3f4f6" }}>
                          <td className="px-5 py-3" style={{ color: "#374151" }}>{row.feature}</td>
                          <td className="px-5 py-3 text-center">
                            <div className="flex justify-center">
                              <CellValue value={row.starter} />
                            </div>
                          </td>
                          <td className="px-5 py-3 text-center">
                            <div className="flex justify-center">
                              <CellValue value={row.growth} />
                            </div>
                          </td>
                          <td className="px-5 py-3 text-center">
                            <div className="flex justify-center">
                              <CellValue value={row.enterprise} />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* Enterprise callout */}
      <Section variant="dark-navy">
        <Container className="py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-[560px]">
              <h2 className="text-[28px] font-medium leading-snug tracking-tight text-white">
                Need a custom contract or dedicated support?
              </h2>
              <p className="text-[16px] leading-[1.65]" style={{ color: "#90a1b9" }}>
                Enterprise customers get a dedicated customer success manager, custom SLA,
                private deployment options, and access to our solution engineering team.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button href="#" variant="primary" size="lg">
                Contact sales
              </Button>
              <Button href="#" variant="ghost" size="lg">
                View security docs
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section variant="light">
        <Container className="py-20">
          <div className="flex flex-col gap-12">
            <SectionHeader
              label="FAQ"
              heading="Frequently asked questions"
              align="center"
            />
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-[900px] mx-auto">
              {faqs.map(({ q, a }) => (
                <div key={q} className="flex flex-col gap-3">
                  <h3 className="text-[16px] font-medium text-gray-900">{q}</h3>
                  <p className="text-[15px] font-normal leading-[1.65]" style={{ color: "#4a5565" }}>
                    {a}
                  </p>
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
