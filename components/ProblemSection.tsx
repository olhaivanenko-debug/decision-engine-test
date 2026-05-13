import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const problems = [
  {
    title: "Hard to change",
    description:
      "Business logic buried in code requires developer cycles and deployment pipelines for every rule change.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="3" y="7.5" width="10" height="7" rx="1.5" stroke="#fb2c36" strokeWidth="1.5" />
        <path
          d="M5.5 7.5V5.5a2.5 2.5 0 015 0v2"
          stroke="#fb2c36"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Hard to understand",
    description:
      "Complex decision logic spread across systems, spreadsheets, and tribal knowledge makes auditing impossible.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="3" r="1.5" fill="#fb2c36" />
        <circle cx="3" cy="13" r="1.5" fill="#fb2c36" />
        <circle cx="13" cy="13" r="1.5" fill="#fb2c36" />
        <path
          d="M7 4.2L3.5 11.8M9 4.2L12.5 11.8M4.5 13h7"
          stroke="#fb2c36"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Hard to govern",
    description:
      "No version control, testing, or approval workflows for critical business decisions that affect customers.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 1.5L2.5 4v4.5C2.5 11.5 5 14 8 14.5c3-.5 5.5-3 5.5-6V4L8 1.5z"
          stroke="#fb2c36"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M6 6.5l4 4M10 6.5l-4 4"
          stroke="#fb2c36"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <Section id="problem" variant="dark-navy">
      <Container className="py-20">
        <div className="flex flex-col gap-14">
          {/* Header */}
          <div className="flex flex-col gap-4 max-w-[580px]">
            <div className="flex items-center gap-2">
              <span
                className="block w-4 h-[2px] rounded-full flex-shrink-0"
                style={{ backgroundColor: "#fb2c36" }}
                aria-hidden="true"
              />
              <span
                className="text-[12px] font-medium uppercase tracking-[0.14em]"
                style={{ color: "#90a1b9" }}
              >
                The Problem
              </span>
            </div>
            <h2 className="text-[36px] font-medium leading-[1.15] tracking-tight text-white">
              Business logic shouldn&apos;t be locked in code
            </h2>
            <p
              className="text-[17px] font-normal leading-[1.65]"
              style={{ color: "#90a1b9" }}
            >
              Critical decision-making systems are often hidden inside technical
              infrastructure, making them slow to change, impossible to audit,
              and risky to govern.
            </p>
          </div>

          {/* Problem cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {problems.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-5 p-6 rounded-xl border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.025)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(251,44,54,0.12)" }}
                  aria-hidden="true"
                >
                  {p.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[17px] font-medium leading-snug text-white">
                    {p.title}
                  </h3>
                  <p
                    className="text-[15px] font-normal leading-[1.65]"
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
