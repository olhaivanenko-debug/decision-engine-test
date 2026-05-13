import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const useCases = [
  {
    title: "Loan Processing",
    description:
      "Automate credit decisions with multi-factor risk assessment and compliance checks at scale.",
    color: "#0066ff",
  },
  {
    title: "Order Routing",
    description:
      "Intelligently route orders based on inventory, location, and fulfillment constraints in real-time.",
    color: "#00d4ff",
  },
  {
    title: "Customer Onboarding",
    description:
      "Streamline KYC verification with automated document checks and approval workflows.",
    color: "#0066ff",
  },
  {
    title: "Dynamic Pricing",
    description:
      "Adjust pricing in real-time based on demand, inventory, and market conditions automatically.",
    color: "#00d4ff",
  },
  {
    title: "Expense Approval",
    description:
      "Route expense reports through custom approval chains with policy enforcement and audit trails.",
    color: "#0066ff",
  },
  {
    title: "Supply Chain",
    description:
      "Optimize procurement decisions with automated vendor selection and order management workflows.",
    color: "#00d4ff",
  },
];

export default function UseCases() {
  return (
    <Section id="use-cases" variant="white">
      <Container className="py-24">
        <div className="flex flex-col gap-16">
          <SectionHeader
            label="Use Cases"
            heading="Built for every team"
            description="From finance to operations, Decision Engine powers critical workflows across every industry."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="flex flex-col gap-4 p-8 rounded-2xl border transition-shadow hover:shadow-md cursor-default"
                style={{
                  background: "linear-gradient(160deg, #f9fafb 0%, #ffffff 100%)",
                  borderColor: "#e5e7eb",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: uc.color }}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-medium leading-7 text-gray-900">
                    {uc.title}
                  </h3>
                  <p
                    className="text-[16px] font-normal leading-7"
                    style={{ color: "#4a5565" }}
                  >
                    {uc.description}
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-[14px] font-medium mt-auto transition-opacity hover:opacity-70"
                  style={{ color: "#0066ff" }}
                  aria-label={`Learn more about ${uc.title}`}
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="#0066ff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
