import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Footer from "./Footer";

const valueProps = [
  "Free 14-day trial",
  "No credit card required",
  "Cancel anytime",
];

export default function FinalCTA() {
  return (
    <>
      <Section variant="dark-gradient-reverse">
        {/* Decorative blobs */}
        <div
          className="absolute rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            width: 600,
            height: 600,
            top: "50%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#0066ff",
            filter: "blur(160px)",
            opacity: 0.12,
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            width: 600,
            height: 600,
            top: "50%",
            right: "-10%",
            transform: "translateY(-50%)",
            backgroundColor: "#00d4ff",
            filter: "blur(180px)",
            opacity: 0.08,
          }}
        />

        <Container className="relative py-32">
          <div className="flex flex-col items-center text-center gap-10 max-w-[900px] mx-auto">
            <h2 className="text-[60px] font-medium leading-[1.1] tracking-tight">
              <span className="text-white">Ready to automate your </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #0066ff 0%, #00d4ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                decision workflows?
              </span>
            </h2>
            <p
              className="text-[20px] font-normal leading-[1.6] max-w-[600px]"
              style={{ color: "#90a1b9" }}
            >
              Join thousands of teams building smarter, faster workflows with
              Decision Engine. Get started in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button href="/sign-up" variant="gradient" size="lg">
                Get Started Free
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
              <Button href="/contact" variant="ghost" size="lg">
                Talk to Sales
              </Button>
            </div>

            {/* Value props */}
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {valueProps.map((prop) => (
                <li key={prop} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="6" stroke="#00c950" strokeWidth="1.2" />
                    <path
                      d="M4 7l2 2 4-4"
                      stroke="#00c950"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="text-[16px] font-normal"
                    style={{ color: "#90a1b9" }}
                  >
                    {prop}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
