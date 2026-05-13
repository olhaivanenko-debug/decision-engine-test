import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const workflowNodes = [
  {
    label: "Input Data",
    sub: "Customer info",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5" />
        <rect x="9" y="2" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5" />
        <rect x="2" y="9" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5" />
        <rect x="9" y="9" width="5" height="5" rx="1" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Eligibility Check",
    sub: "Age, income, history",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" />
        <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Decision Rule",
    sub: "Approve/Review/Deny",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 2L14 8L8 14L2 8L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Risk Score",
    sub: "ML model + rules",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 12L5 7L8 10L11 5L14 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <Section
      variant="dark-gradient-center"
      style={{ height: "764px" }}
      className="flex items-center"
    >
      {/* Decorative blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          width: 384,
          height: 384,
          top: -80,
          left: -80,
          backgroundColor: "#0066ff",
          filter: "blur(120px)",
          opacity: 0.25,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          width: 384,
          height: 384,
          top: 200,
          right: -60,
          backgroundColor: "#00d4ff",
          filter: "blur(140px)",
          opacity: 0.15,
        }}
      />

      <Container className="relative py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: copy */}
        <div className="flex-1 flex flex-col gap-8 max-w-[592px]">
          <div className="flex items-center gap-2 self-start">
            <Badge variant="primary" dot>
              Now in Public Beta
            </Badge>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[60px] font-medium leading-[1.1] tracking-tight">
              <span className="text-white">Build smarter </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #0066ff 0%, #00d4ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                decision workflows
              </span>
            </h1>
            <p
              className="text-[20px] font-normal leading-[1.6] mt-4"
              style={{ color: "#90a1b9" }}
            >
              Automate complex business logic with visual workflows. Connect
              data, APIs, and services — no engineering required.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <Button href="#" variant="primary">
              Start Building Free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button href="#" variant="ghost">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" />
                <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="white" />
              </svg>
              Watch Demo
            </Button>
          </div>

          {/* Trusted by */}
          <div className="flex items-center gap-6">
            <span className="text-[14px] font-normal" style={{ color: "#90a1b9" }}>
              Trusted by
            </span>
            <div className="flex items-center gap-6" aria-label="Trusted companies">
              {["ACME CORP", "GLOBEX", "INITECH"].map((name) => (
                <span
                  key={name}
                  className="text-[16px] font-medium tracking-wide"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: workflow card */}
        <div className="flex-shrink-0 w-full max-w-[564px]">
          <div
            className="rounded-2xl shadow-2xl overflow-hidden"
            style={{ backgroundColor: "#ffffff" }}
            aria-label="Credit Decision Workflow preview"
          >
            {/* Card header */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b"
              style={{ borderColor: "#e5e7eb" }}
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-[16px] font-normal text-gray-900 leading-6">
                  Credit Decision Workflow
                </span>
                <span className="text-[14px] font-normal" style={{ color: "#90a1b9" }}>
                  Version 2.4.1 · Published 2 days ago
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="cursor-pointer px-3 py-1.5 rounded-md text-[14px] font-medium text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors">
                  Test
                </button>
                <button
                  className="cursor-pointer px-3 py-1.5 rounded-md text-[14px] font-medium text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#0066ff" }}
                >
                  Deploy
                </button>
              </div>
            </div>

            {/* Workflow diagram */}
            <div className="p-5">
              <div
                className="rounded-xl p-4 flex flex-col gap-2"
                style={{ backgroundColor: "#0a0f1e" }}
              >
                {workflowNodes.map((wn, i) => (
                  <div key={wn.label} className="flex items-center gap-3">
                    <div
                      className="flex items-center gap-3 flex-1 px-4 py-3 rounded-xl"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(0,102,255,0.15) 0%, rgba(0,102,255,0.05) 100%)",
                        border: "1px solid rgba(0,102,255,0.2)",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                      >
                        {wn.icon}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[14px] font-normal text-white leading-5">
                          {wn.label}
                        </span>
                        <span
                          className="text-[12px] font-normal"
                          style={{ color: "rgba(255,255,255,0.5)" }}
                        >
                          {wn.sub}
                        </span>
                      </div>
                    </div>
                    {/* Arrow connector (not on last) */}
                    {i < workflowNodes.length - 1 && (
                      <svg
                        className="flex-shrink-0"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 3v10M4 9l4 4 4-4"
                          stroke="rgba(144,161,185,0.5)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
