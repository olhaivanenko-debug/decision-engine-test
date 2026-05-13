import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    title: "Visual Workflow Builder",
    description:
      "Design complex decision flows with a drag-and-drop canvas. Connect data sources, rules, and actions visually.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="#0066ff" strokeWidth="1.5" />
        <rect x="13" y="2" width="7" height="7" rx="1.5" stroke="#0066ff" strokeWidth="1.5" />
        <rect x="7.5" y="13" width="7" height="7" rx="1.5" stroke="#0066ff" strokeWidth="1.5" />
        <path d="M5.5 9v2.5c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V9" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 9v4" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Decision Rules",
    description:
      "Create sophisticated business logic with conditional branching, scoring models, and rule chaining.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2L20 7v8l-9 5L2 15V7l9-5z" stroke="#0066ff" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 12l9-5M11 12L2 7M11 12v10" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Data Integrations",
    description:
      "Connect to your existing databases, APIs, and SaaS tools. Transform and enrich data in real-time.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="9" stroke="#0066ff" strokeWidth="1.5" />
        <path d="M11 2c0 0 4 4 4 9s-4 9-4 9" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 2c0 0-4 4-4 9s4 9 4 9" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 11h18" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 7h16M3 15h16" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Testing & Simulation",
    description:
      "Validate logic with test cases and simulate outcomes before deployment with step-by-step debugging.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M9 3H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 3h6v6" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 3l-8 8" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Version Control",
    description:
      "Track changes, collaborate with teams, and roll back to previous versions of any workflow instantly.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="3" stroke="#0066ff" strokeWidth="1.5" />
        <circle cx="16" cy="6" r="3" stroke="#0066ff" strokeWidth="1.5" />
        <circle cx="6" cy="16" r="3" stroke="#0066ff" strokeWidth="1.5" />
        <path d="M6 9v4M9 6h4M8.12 13.88l5.76-5.76" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Analytics & Monitoring",
    description:
      "Real-time dashboards showing decision outcomes, performance metrics, and anomaly detection.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M2 18l5-5 4 4 5-6 4 4" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 4h18v14H2z" stroke="#0066ff" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function FeaturesGrid() {
  return (
    <Section id="features" variant="light">
      <Container className="py-24">
        <div className="flex flex-col gap-16">
          <SectionHeader
            label="Features"
            heading={
              <>
                Everything you need to build{" "}
                <br className="hidden lg:block" />
                complex workflows
              </>
            }
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-4 p-8 rounded-2xl border transition-shadow hover:shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,102,255,0.04) 0%, rgba(0,102,255,0.02) 100%)",
                  borderColor: "rgba(0,102,255,0.12)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(0,102,255,0.08)" }}
                >
                  {f.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[18px] font-medium leading-7 text-gray-900">
                    {f.title}
                  </h3>
                  <p
                    className="text-[16px] font-normal leading-7"
                    style={{ color: "#4a5565" }}
                  >
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
