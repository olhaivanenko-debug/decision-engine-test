import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service — Decision Engine",
  description: "Terms governing your use of Decision Engine products and services.",
};

const sections = [
  {
    title: "Acceptance of terms",
    body: "By accessing or using Decision Engine, you agree to these Terms of Service and our Privacy Policy. If you are using Decision Engine on behalf of a company or organization, you represent that you have authority to bind that entity to these terms.",
  },
  {
    title: "Use of services",
    body: "You may use Decision Engine only for lawful purposes and in accordance with these terms. You agree not to use our services to violate any laws, infringe intellectual property rights, transmit malicious code, or attempt to gain unauthorized access to our systems or data.",
  },
  {
    title: "Your data",
    body: "You retain ownership of all workflow logic, decision rules, and data you upload to Decision Engine. You grant us a limited license to host, process, and display your content solely to provide the services. We do not claim ownership of your intellectual property.",
  },
  {
    title: "Subscriptions and billing",
    body: "Paid subscriptions are billed in advance on a monthly or annual basis. Prices are listed on our Pricing page and may change with 30 days notice. Refunds are not provided for partial billing periods. Enterprise contracts are governed by separate order forms.",
  },
  {
    title: "Service availability",
    body: "We target 99.9% uptime for Starter and Growth plans, and 99.99% for Enterprise with SLA. Scheduled maintenance windows are communicated in advance. We are not liable for downtime caused by factors outside our control.",
  },
  {
    title: "Termination",
    body: "You may cancel your account at any time. We may suspend or terminate accounts for violations of these terms. Upon termination, your data will be retained for 90 days before permanent deletion, during which you may request an export.",
  },
  {
    title: "Limitation of liability",
    body: "Decision Engine's liability is limited to the amount paid in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages. Some jurisdictions do not allow these limitations, so they may not apply to you.",
  },
  {
    title: "Contact",
    body: "Questions about these terms? Contact us at legal@decisionengine.io.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0f1e" }}>
      <Navigation />

      <main className="flex-1">
        <section className="py-20 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Container>
            <div className="max-w-[720px]">
              <p className="text-[13px] font-medium tracking-widest uppercase mb-4" style={{ color: "#0066ff" }}>Legal</p>
              <h1 className="text-[40px] font-medium leading-[1.15] tracking-tight text-white mb-4">Terms of Service</h1>
              <p className="text-[14px]" style={{ color: "#4a5565" }}>Last updated: May 1, 2025</p>
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="max-w-[720px] flex flex-col gap-12">
              {sections.map((s) => (
                <div key={s.title} className="flex flex-col gap-3">
                  <h2 className="text-[20px] font-medium text-white">{s.title}</h2>
                  <p className="text-[15px] leading-[1.75]" style={{ color: "#90a1b9" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
