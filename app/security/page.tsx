import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Security — Decision Engine",
  description: "Enterprise-grade security, compliance certifications, and data handling practices.",
};

const certifications = [
  { name: "SOC 2 Type II", description: "Annual third-party audit of security, availability, and confidentiality controls." },
  { name: "GDPR", description: "Data processing agreements available. EU data residency options for enterprise." },
  { name: "HIPAA", description: "BAA available for healthcare customers on Enterprise plans." },
  { name: "ISO 27001", description: "Information security management aligned to international standards. (In progress)" },
];

const practices = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Encryption at rest & in transit",
    body: "All data encrypted with AES-256 at rest. TLS 1.3 enforced for all connections.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Audit logs",
    body: "Every workflow change, decision run, and admin action is logged with full attribution and timestamps.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Role-based access control",
    body: "Granular permissions per workspace, environment, and workflow. SSO via SAML 2.0.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Isolated environments",
    body: "Development, staging, and production environments are fully isolated with separate credentials.",
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0f1e" }}>
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-24 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Container>
            <div className="max-w-[640px]">
              <p className="text-[13px] font-medium tracking-widest uppercase mb-4" style={{ color: "#0066ff" }}>
                Security
              </p>
              <h1 className="text-[48px] font-medium leading-[1.1] tracking-tight text-white mb-6">
                Built for regulated<br />industries
              </h1>
              <p className="text-[18px] leading-[1.65] mb-8" style={{ color: "#90a1b9" }}>
                Decision Engine is designed from the ground up for enterprises in finance, healthcare,
                and compliance-sensitive industries. Security is not a feature — it&apos;s the foundation.
              </p>
              <div className="flex items-center gap-4">
                <Button href="/contact" variant="gradient" size="md">
                  Talk to our security team
                </Button>
                <Button href="/docs" variant="ghost" size="md">
                  View security docs
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Certifications */}
        <section className="py-20 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Container>
            <h2 className="text-[28px] font-medium text-white mb-10">Certifications &amp; compliance</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {certifications.map((c) => (
                <div key={c.name} className="flex flex-col gap-3 p-6 rounded-xl border"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,201,80,0.1)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#00c950" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="text-[16px] font-medium text-white">{c.name}</h3>
                  <p className="text-[13px] leading-[1.6]" style={{ color: "#90a1b9" }}>{c.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Practices */}
        <section className="py-20 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Container>
            <h2 className="text-[28px] font-medium text-white mb-10">Security practices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {practices.map((p) => (
                <div key={p.title} className="flex gap-4 p-6 rounded-xl border"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(0,102,255,0.12)" }}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-medium text-white mb-1">{p.title}</h3>
                    <p className="text-[14px] leading-[1.6]" style={{ color: "#90a1b9" }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20">
          <Container>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl border"
              style={{ backgroundColor: "rgba(0,102,255,0.05)", borderColor: "rgba(0,102,255,0.2)" }}>
              <div>
                <h2 className="text-[22px] font-medium text-white mb-1">Need a security review?</h2>
                <p className="text-[15px]" style={{ color: "#90a1b9" }}>
                  Our security team can provide pen test reports, SOC 2 attestation, and custom questionnaire responses.
                </p>
              </div>
              <Button href="/contact" variant="primary" size="md" className="flex-shrink-0">
                Request security docs
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
