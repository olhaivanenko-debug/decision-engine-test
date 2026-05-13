import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Design your workflow",
    description:
      "Use our visual builder to map out decision logic, conditions, and actions. Import from existing spreadsheets or start fresh.",
  },
  {
    number: "02",
    title: "Connect your data",
    description:
      "Integrate with databases, APIs, and third-party services using pre-built connectors. No custom code required.",
  },
  {
    number: "03",
    title: "Deploy & monitor",
    description:
      "Launch your workflow with one click. Monitor performance, debug issues, and iterate — all without redeployments.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" variant="dark-gradient">
      {/* Decorative blob */}
      <div
        className="absolute rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          width: 500,
          height: 500,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0,102,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <Container className="relative py-24">
        <div className="flex flex-col gap-16">
          <SectionHeader
            label="How It Works"
            heading={
              <>
                From idea to production{" "}
                <br className="hidden lg:block" />
                in minutes
              </>
            }
            align="center"
            dark
            labelColor="#90a1b9"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-[16px] font-medium text-white"
                    style={{
                      background: "linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)",
                    }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[24px] font-medium leading-8 text-white">
                    {step.title}
                  </h3>
                  <p
                    className="text-[16px] font-normal leading-7"
                    style={{ color: "#90a1b9" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button href="#" variant="gradient" size="lg">
              Start Building Now
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
          </div>
        </div>
      </Container>
    </Section>
  );
}
