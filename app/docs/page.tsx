import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Documentation — Decision Engine",
  description: "Guides, API reference, and resources for building with Decision Engine.",
};

const sections = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Getting Started",
    description: "Create your first workflow in under 10 minutes.",
    links: ["Quick start", "Core concepts", "Workflow basics", "Your first rule"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "API Reference",
    description: "Full REST API documentation with examples.",
    links: ["Authentication", "Workflows API", "Decisions API", "Webhooks"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Integrations",
    description: "Connect Decision Engine to your existing stack.",
    links: ["Salesforce", "Snowflake", "dbt", "Custom connectors"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Security & Compliance",
    description: "SOC 2, GDPR, HIPAA, and audit logging.",
    links: ["Security overview", "Data handling", "Audit logs", "SSO setup"],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0f1e" }}>
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-24 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Container>
            <div className="max-w-[640px]">
              <p className="text-[13px] font-medium tracking-widest uppercase mb-4" style={{ color: "#0066ff" }}>
                Documentation
              </p>
              <h1 className="text-[48px] font-medium leading-[1.1] tracking-tight text-white mb-6">
                Everything you need<br />to build
              </h1>
              <p className="text-[18px] leading-[1.65] mb-8" style={{ color: "#90a1b9" }}>
                Guides, API reference, tutorials, and examples for integrating and extending Decision Engine.
              </p>
              <div className="flex items-center gap-4">
                <Button href="/sign-up" variant="gradient" size="md">
                  Get started free
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  Talk to an engineer
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Sections */}
        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((s) => (
                <div
                  key={s.title}
                  className="flex flex-col gap-5 p-7 rounded-2xl border"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(0,102,255,0.12)" }}>
                      {s.icon}
                    </div>
                    <div>
                      <h2 className="text-[17px] font-medium text-white">{s.title}</h2>
                      <p className="text-[13px]" style={{ color: "#90a1b9" }}>{s.description}</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {s.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="flex items-center gap-2 text-[14px] transition-colors hover:text-white"
                          style={{ color: "#90a1b9" }}>
                          <span style={{ color: "#0066ff" }}>›</span>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Coming soon callout */}
        <section className="py-16 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Container>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl border"
              style={{ backgroundColor: "rgba(0,102,255,0.05)", borderColor: "rgba(0,102,255,0.2)" }}>
              <div>
                <h2 className="text-[20px] font-medium text-white mb-1">Full docs coming soon</h2>
                <p className="text-[15px]" style={{ color: "#90a1b9" }}>
                  Our full documentation portal is under construction. Need help now? Reach out directly.
                </p>
              </div>
              <Button href="/contact" variant="primary" size="md" className="flex-shrink-0">
                Contact support
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
