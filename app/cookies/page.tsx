import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Cookie Policy — Decision Engine",
  description: "How Decision Engine uses cookies and similar tracking technologies.",
};

const cookieTypes = [
  {
    name: "Essential cookies",
    required: true,
    description: "Required for the platform to function. These include session authentication, security tokens, and CSRF protection. They cannot be disabled.",
    examples: ["Session ID", "CSRF token", "Auth state"],
  },
  {
    name: "Analytics cookies",
    required: false,
    description: "Help us understand how users interact with Decision Engine so we can improve the product. Data is aggregated and anonymized.",
    examples: ["Page views", "Feature usage", "Error rates"],
  },
  {
    name: "Preference cookies",
    required: false,
    description: "Remember your settings and preferences between sessions, such as dashboard layout and notification preferences.",
    examples: ["Theme", "Dashboard layout", "Timezone"],
  },
  {
    name: "Marketing cookies",
    required: false,
    description: "Used to measure the effectiveness of our marketing campaigns. Only set if you came from an ad or referral link.",
    examples: ["Campaign source", "Referral attribution"],
  },
];

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0f1e" }}>
      <Navigation />

      <main className="flex-1">
        <section className="py-20 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Container>
            <div className="max-w-[720px]">
              <p className="text-[13px] font-medium tracking-widest uppercase mb-4" style={{ color: "#0066ff" }}>Legal</p>
              <h1 className="text-[40px] font-medium leading-[1.15] tracking-tight text-white mb-4">Cookie Policy</h1>
              <p className="text-[14px] mb-4" style={{ color: "#4a5565" }}>Last updated: May 1, 2025</p>
              <p className="text-[16px] leading-[1.7]" style={{ color: "#90a1b9" }}>
                Decision Engine uses cookies and similar technologies to keep you signed in,
                understand how you use the product, and improve your experience.
                Here&apos;s exactly what we use and why.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="max-w-[720px] flex flex-col gap-8">
              {cookieTypes.map((ct) => (
                <div key={ct.name} className="flex flex-col gap-4 p-6 rounded-xl border"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h2 className="text-[18px] font-medium text-white">{ct.name}</h2>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                      style={ct.required
                        ? { backgroundColor: "rgba(0,201,80,0.12)", color: "#00c950" }
                        : { backgroundColor: "rgba(255,255,255,0.06)", color: "#90a1b9" }}
                    >
                      {ct.required ? "Required" : "Optional"}
                    </span>
                  </div>
                  <p className="text-[14px] leading-[1.65]" style={{ color: "#90a1b9" }}>{ct.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {ct.examples.map((ex) => (
                      <span key={ex} className="px-2.5 py-1 rounded-md text-[12px]"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#90a1b9" }}>
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-3 pt-4">
                <h2 className="text-[20px] font-medium text-white">Managing cookies</h2>
                <p className="text-[15px] leading-[1.75]" style={{ color: "#90a1b9" }}>
                  You can control non-essential cookies from your account settings. You can also configure
                  your browser to block or delete cookies, though this may affect some features.
                  For questions, contact{" "}
                  <a href="mailto:privacy@decisionengine.io"
                    className="text-[#0066ff] hover:text-[#3d8aff] transition-colors">
                    privacy@decisionengine.io
                  </a>.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
