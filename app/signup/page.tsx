import type { Metadata } from "next";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Get Started — Decision Engine",
  description: "Create your Decision Engine account and start building decision workflows in minutes.",
};

const benefits = [
  "14-day free trial, no credit card required",
  "Visual workflow builder ready in minutes",
  "Full access to all Starter features",
];

export default function SignupPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#0a0f1e" }}
    >
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <a href="/" className="flex items-center gap-2.5" aria-label="Decision Engine home">
          <Logo className="flex-shrink-0" />
          <span className="text-white font-semibold text-[16px] leading-6">Decision Engine</span>
        </a>
        <span className="text-[14px]" style={{ color: "#90a1b9" }}>
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium transition-colors"
            style={{ color: "#0066ff" }}
          >
            Sign in
          </a>
        </span>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-[880px] grid md:grid-cols-2 gap-16 items-center">

          {/* Left: value prop */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-[36px] font-medium leading-[1.15] tracking-tight text-white">
                Start building decision workflows today
              </h1>
              <p className="text-[16px] leading-[1.65]" style={{ color: "#90a1b9" }}>
                Join teams in finance, operations, and compliance who use Decision Engine
                to automate business-critical logic — without touching code.
              </p>
            </div>
            <ul className="flex flex-col gap-3" role="list">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="6" stroke="#00c950" strokeWidth="1.2" />
                    <path d="M5 8l2 2 4-4" stroke="#00c950" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[15px]" style={{ color: "#90a1b9" }}>{b}</span>
                </li>
              ))}
            </ul>

            {/* Social proof */}
            <div
              className="flex flex-col gap-3 p-5 rounded-xl"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-[14px] leading-[1.6] italic" style={{ color: "#90a1b9" }}>
                &ldquo;We replaced six months of engineering work with a Decision Engine workflow
                that our risk team now owns entirely.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-medium text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)" }}
                  aria-hidden="true"
                >
                  SC
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[13px] font-medium text-white">Sarah Chen</span>
                  <span className="text-[12px]" style={{ color: "#4a5565" }}>Head of Risk, Meridian Lending</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            className="flex flex-col gap-6 p-7 rounded-xl"
            style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] font-medium text-white">Create your account</h2>
              <p className="text-[13px]" style={{ color: "#90a1b9" }}>Free for 14 days, no card required</p>
            </div>

            {/* SSO */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-2.5 rounded-lg border text-[14px] font-medium text-white transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.04)" }}
              aria-label="Sign up with Google"
            >
              <svg width="17" height="17" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
              <span className="text-[12px]" style={{ color: "#90a1b9" }}>or</span>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4" aria-label="Create account form">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="first-name" className="text-[12px] font-medium" style={{ color: "#90a1b9" }}>
                    First name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Jane"
                    className="w-full px-3 py-2.5 rounded-lg text-[14px] text-white placeholder:text-[#4a5565] focus:outline-none transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="last-name" className="text-[12px] font-medium" style={{ color: "#90a1b9" }}>
                    Last name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Smith"
                    className="w-full px-3 py-2.5 rounded-lg text-[14px] text-white placeholder:text-[#4a5565] focus:outline-none transition-colors"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="work-email" className="text-[12px] font-medium" style={{ color: "#90a1b9" }}>
                  Work email
                </label>
                <input
                  id="work-email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className="w-full px-3 py-2.5 rounded-lg text-[14px] text-white placeholder:text-[#4a5565] focus:outline-none transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="new-password" className="text-[12px] font-medium" style={{ color: "#90a1b9" }}>
                  Password
                </label>
                <input
                  id="new-password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  className="w-full px-3 py-2.5 rounded-lg text-[14px] text-white placeholder:text-[#4a5565] focus:outline-none transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
              </div>

              <Button href="#" variant="gradient" size="md" className="w-full justify-center mt-1">
                Create account
              </Button>
            </form>

            <p className="text-[12px] text-center" style={{ color: "#4a5565" }}>
              By creating an account you agree to our{" "}
              <a href="#" className="underline" style={{ color: "#90a1b9" }}>Terms</a>
              {" "}and{" "}
              <a href="#" className="underline" style={{ color: "#90a1b9" }}>Privacy Policy</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
