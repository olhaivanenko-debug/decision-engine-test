import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const loanSteps = [
  { label: "Credit Score Check", time: "Completed in 0.2s", status: "done" },
  { label: "Income Verification", time: "Completed in 1.1s", status: "done" },
  { label: "Risk Assessment", time: "Processing...", status: "processing" },
  { label: "Final Approval", time: "Waiting", status: "waiting" },
];

const metrics = [
  { label: "Success Rate", value: "98.4%" },
  { label: "Avg. Time", value: "2.3s" },
  { label: "Total Runs", value: "12.4K" },
];

const bullets = [
  "Conditional branching with AND/OR logic",
  "Loop through datasets and API responses",
  "Version control with rollback capabilities",
  "Test mode with step-by-step debugging",
];

function StatusDot({ status }: { status: string }) {
  if (status === "done") {
    return (
      <span
        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "rgba(0,201,80,0.15)" }}
        aria-label="Completed"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M2 5l2 2 4-4" stroke="#00c950" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  if (status === "processing") {
    return (
      <span
        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "rgba(0,102,255,0.15)" }}
        aria-label="Processing"
      >
        <span
          className="w-2.5 h-2.5 rounded-full animate-pulse"
          style={{ backgroundColor: "#0066ff" }}
        />
      </span>
    );
  }
  return (
    <span
      className="w-5 h-5 rounded-full flex-shrink-0"
      style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      aria-label="Waiting"
    />
  );
}

export default function WorkflowPreview() {
  return (
    <Section variant="dark-deep">
      {/* Decorative blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          width: 400,
          height: 400,
          top: -100,
          right: -100,
          backgroundColor: "#0066ff",
          filter: "blur(130px)",
          opacity: 0.12,
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          width: 300,
          height: 300,
          bottom: -80,
          left: -60,
          backgroundColor: "#00d4ff",
          filter: "blur(120px)",
          opacity: 0.1,
        }}
      />

      <Container className="relative py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: copy */}
          <div className="flex-1 flex flex-col gap-8 max-w-[560px]">
            <span
              className="text-[14px] font-normal uppercase tracking-widest"
              style={{ color: "#90a1b9" }}
            >
              Workflow Builder
            </span>
            <h2 className="text-[48px] font-medium leading-[1.15] tracking-tight">
              <span className="text-white">Design complex decision logic </span>
              <span
                style={{
                  background: "linear-gradient(90deg, #0066ff 0%, #00d4ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                visually
              </span>
            </h2>
            <p
              className="text-[20px] font-normal leading-[1.6]"
              style={{ color: "#90a1b9" }}
            >
              No more waiting on engineering. Build approval flows, routing
              logic, and complex decision trees — all without writing a single
              line of code.
            </p>

            <ul className="flex flex-col gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(0,102,255,0.2)" }}
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span
                    className="text-[16px] font-normal leading-6"
                    style={{ color: "#90a1b9" }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: live workflow panel */}
          <div className="flex-shrink-0 w-full max-w-[600px]">
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                backgroundColor: "#0f1629",
                borderColor: "rgba(255,255,255,0.08)",
              }}
              aria-label="Loan Approval Flow live preview"
            >
              {/* Panel header */}
              <div
                className="flex items-center justify-between px-5 py-4 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span className="text-[16px] font-normal text-white">
                  Loan Approval Flow
                </span>
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#00c950" }}
                    aria-hidden="true"
                  />
                  <span className="text-[12px] font-normal" style={{ color: "#90a1b9" }}>
                    Live
                  </span>
                </div>
              </div>

              {/* Steps */}
              <ol className="flex flex-col gap-2 p-5">
                {loanSteps.map((step) => (
                  <li
                    key={step.label}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <StatusDot status={step.status} />
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-[14px] font-normal text-white">
                        {step.label}
                      </span>
                      <span className="text-[12px] font-normal" style={{ color: "#90a1b9" }}>
                        {step.time}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Metrics bar */}
              <dl
                className="flex items-center justify-around px-5 py-4 border-t"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {metrics.map((m) => (
                  <div key={m.label} className="flex flex-col items-center gap-1">
                    <dt className="text-[12px] font-normal uppercase tracking-wide" style={{ color: "#90a1b9" }}>
                      {m.label}
                    </dt>
                    <dd className="text-[16px] font-normal text-white">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
