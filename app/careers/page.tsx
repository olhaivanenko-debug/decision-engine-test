import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers — Decision Engine",
  description: "Join the team building the future of intelligent business workflows.",
};

const values = [
  { title: "Ownership", body: "Everyone owns outcomes, not just tasks. We hire people who act like founders." },
  { title: "Craft", body: "We care deeply about quality — in code, in design, in how we communicate." },
  { title: "Customer obsession", body: "Every decision we make starts with how it affects the people using our product." },
  { title: "Transparency", body: "Open books, open roadmap, open feedback. No surprises." },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0f1e" }}>
      <Navigation />

      <main className="flex-1">
        <section className="py-24 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Container>
            <div className="max-w-[640px]">
              <p className="text-[13px] font-medium tracking-widest uppercase mb-4" style={{ color: "#0066ff" }}>Careers</p>
              <h1 className="text-[48px] font-medium leading-[1.1] tracking-tight text-white mb-6">
                Build the infrastructure<br />for business logic
              </h1>
              <p className="text-[18px] leading-[1.65] mb-8" style={{ color: "#90a1b9" }}>
                We&apos;re a small team doing ambitious work. If you want to build developer tools that enterprises
                depend on, we&apos;d love to talk.
              </p>
              <Button href="/contact" variant="gradient" size="md">
                Get in touch
              </Button>
            </div>
          </Container>
        </section>

        <section className="py-20 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Container>
            <h2 className="text-[28px] font-medium text-white mb-10">What we value</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.title} className="flex flex-col gap-3 p-6 rounded-xl border"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
                  <h3 className="text-[16px] font-medium text-white">{v.title}</h3>
                  <p className="text-[14px] leading-[1.65]" style={{ color: "#90a1b9" }}>{v.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="p-10 rounded-2xl border text-center"
              style={{ backgroundColor: "rgba(0,102,255,0.05)", borderColor: "rgba(0,102,255,0.15)" }}>
              <h2 className="text-[26px] font-medium text-white mb-3">No open roles right now</h2>
              <p className="text-[16px] leading-[1.65] mb-8 mx-auto max-w-[480px]" style={{ color: "#90a1b9" }}>
                We&apos;re not actively hiring but we&apos;re always interested in exceptional people.
                Send us a note and tell us how you&apos;d contribute.
              </p>
              <Button href="/contact" variant="primary" size="md">
                Introduce yourself
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
