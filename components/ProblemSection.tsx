import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const problems = [
  {
    title: "Hard to change",
    description:
      "Business logic buried in code requires developer cycles and deployment pipelines for every rule change.",
  },
  {
    title: "Hard to understand",
    description:
      "Complex decision logic spread across systems, spreadsheets, and tribal knowledge makes auditing impossible.",
  },
  {
    title: "Hard to govern",
    description:
      "No version control, testing, or approval workflows for critical business decisions that affect customers.",
  },
];

export default function ProblemSection() {
  return (
    <Section id="problem" variant="dark-navy">
      <Container className="py-24">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-6 max-w-[720px]">
            <span
              className="text-[14px] font-normal uppercase tracking-widest"
              style={{ color: "#90a1b9" }}
            >
              The Problem
            </span>
            <h2 className="text-[36px] font-medium leading-[1.2] text-white">
              Business logic shouldn&apos;t be locked in code
            </h2>
            <p
              className="text-[20px] font-normal leading-[1.6]"
              style={{ color: "#90a1b9" }}
            >
              Critical decision-making systems are often hidden inside technical
              infrastructure, making them slow to change, impossible to audit,
              and risky to govern.
            </p>
          </div>

          {/* Problem cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-4 p-8 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(251,44,54,0.15)" }}
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 3v7M9 14v.5"
                      stroke="#fb2c36"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-medium leading-7 text-white">
                    {p.title}
                  </h3>
                  <p
                    className="text-[16px] font-normal leading-7"
                    style={{ color: "#90a1b9" }}
                  >
                    {p.description}
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
