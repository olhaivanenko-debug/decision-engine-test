import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact Sales — Decision Engine",
  description: "Talk to our team about your decision workflow needs. We'll help you find the right plan.",
};

const channels = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Email us",
    description: "Our team responds within one business day.",
    action: "sales@decisionengine.io",
    href: "mailto:sales@decisionengine.io",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Live chat",
    description: "Available Monday – Friday, 9am – 6pm ET.",
    action: "Start a chat",
    href: "#",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Book a demo",
    description: "30-minute walkthrough with a solutions engineer.",
    action: "Schedule a call",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0f1e" }}>
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-24 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Container>
            <div className="max-w-[640px]">
              <p className="text-[13px] font-medium tracking-widest uppercase mb-4" style={{ color: "#0066ff" }}>
                Contact
              </p>
              <h1 className="text-[48px] font-medium leading-[1.1] tracking-tight text-white mb-6">
                Let&apos;s find the right<br />plan for your team
              </h1>
              <p className="text-[18px] leading-[1.65]" style={{ color: "#90a1b9" }}>
                Whether you&apos;re evaluating Decision Engine or ready to deploy in production,
                our team is here to help.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact channels */}
        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-3 gap-6">
              {channels.map((ch) => (
                <a
                  key={ch.title}
                  href={ch.href}
                  className="group flex flex-col gap-5 p-7 rounded-2xl border transition-all"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(0,102,255,0.12)" }}
                  >
                    {ch.icon}
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <h2 className="text-[18px] font-medium text-white">{ch.title}</h2>
                    <p className="text-[14px] leading-[1.6]" style={{ color: "#90a1b9" }}>
                      {ch.description}
                    </p>
                  </div>
                  <span className="text-[14px] font-medium text-[#0066ff] group-hover:text-[#3d8aff] transition-colors">
                    {ch.action} →
                  </span>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* Form */}
        <section className="py-20 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Container>
            <div className="max-w-[560px]">
              <h2 className="text-[28px] font-medium text-white mb-2">Send us a message</h2>
              <p className="text-[15px] mb-10" style={{ color: "#90a1b9" }}>
                Tell us about your use case and we&apos;ll be in touch within one business day.
              </p>
              <form className="flex flex-col gap-5" aria-label="Contact form">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-first" className="text-[12px] font-medium" style={{ color: "#90a1b9" }}>First name</label>
                    <input id="contact-first" type="text" autoComplete="given-name" placeholder="Jane"
                      className="w-full px-3.5 py-2.5 rounded-lg text-[14px] text-white placeholder:text-[#4a5565] focus:outline-none transition-colors"
                      style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-last" className="text-[12px] font-medium" style={{ color: "#90a1b9" }}>Last name</label>
                    <input id="contact-last" type="text" autoComplete="family-name" placeholder="Smith"
                      className="w-full px-3.5 py-2.5 rounded-lg text-[14px] text-white placeholder:text-[#4a5565] focus:outline-none transition-colors"
                      style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-[12px] font-medium" style={{ color: "#90a1b9" }}>Work email</label>
                  <input id="contact-email" type="email" autoComplete="email" placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg text-[14px] text-white placeholder:text-[#4a5565] focus:outline-none transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-company" className="text-[12px] font-medium" style={{ color: "#90a1b9" }}>Company</label>
                  <input id="contact-company" type="text" autoComplete="organization" placeholder="Acme Corp"
                    className="w-full px-3.5 py-2.5 rounded-lg text-[14px] text-white placeholder:text-[#4a5565] focus:outline-none transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-[12px] font-medium" style={{ color: "#90a1b9" }}>How can we help?</label>
                  <textarea id="contact-message" rows={4} placeholder="Tell us about your use case..."
                    className="w-full px-3.5 py-2.5 rounded-lg text-[14px] text-white placeholder:text-[#4a5565] focus:outline-none transition-colors resize-none"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-[15px] font-medium text-white transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(90deg, #0066ff 0%, #0080ff 100%)" }}
                >
                  Send message
                </button>
                <p className="text-[12px] text-center" style={{ color: "#4a5565" }}>
                  By submitting you agree to our{" "}
                  <a href="/privacy" className="underline hover:text-[#90a1b9] transition-colors">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
