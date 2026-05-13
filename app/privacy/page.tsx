import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — Decision Engine",
  description: "How Decision Engine collects, uses, and protects your data.",
};

const sections = [
  {
    title: "Information we collect",
    body: "We collect information you provide when creating an account (name, email, company), usage data (workflow runs, decisions processed, API calls), and technical data (browser type, IP address, device identifiers). We do not sell your data to third parties.",
  },
  {
    title: "How we use your information",
    body: "We use collected data to provide and improve our services, send product updates and transactional emails, analyze usage patterns to improve the platform, and respond to support requests. We do not use your decision logic or workflow content for training AI models without explicit consent.",
  },
  {
    title: "Data retention",
    body: "Account data is retained for the duration of your subscription plus 90 days after cancellation. Decision logs are retained per your plan (30 days on Starter, 90 days on Growth, unlimited on Enterprise). You can request deletion of your data at any time.",
  },
  {
    title: "Data sharing",
    body: "We share data only with sub-processors necessary to operate our service (cloud hosting, payment processing, email delivery). We do not sell, rent, or trade personal information. A full list of sub-processors is available on request.",
  },
  {
    title: "Your rights",
    body: "Depending on your location, you may have rights to access, correct, delete, or export your personal data. EU residents have rights under GDPR. California residents have rights under CCPA. To exercise your rights, contact privacy@decisionengine.io.",
  },
  {
    title: "Security",
    body: "We use industry-standard encryption (AES-256 at rest, TLS 1.3 in transit), access controls, and annual third-party security audits. See our Security page for full details.",
  },
  {
    title: "Contact",
    body: "Questions about this policy? Contact us at privacy@decisionengine.io or by mail at Decision Engine, Inc., 123 Market Street, San Francisco, CA 94105.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0f1e" }}>
      <Navigation />

      <main className="flex-1">
        <section className="py-20 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Container>
            <div className="max-w-[720px]">
              <p className="text-[13px] font-medium tracking-widest uppercase mb-4" style={{ color: "#0066ff" }}>Legal</p>
              <h1 className="text-[40px] font-medium leading-[1.15] tracking-tight text-white mb-4">Privacy Policy</h1>
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
