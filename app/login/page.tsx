import type { Metadata } from "next";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sign in — Decision Engine",
  description: "Sign in to your Decision Engine account.",
};

export default function LoginPage() {
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
          Don&apos;t have an account?{" "}
          <a
            href="/signup"
            className="font-medium text-[#0066ff] hover:text-[#3d8aff] transition-colors"
          >
            Sign up free
          </a>
        </span>
      </header>

      {/* Form area */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-[400px] flex flex-col gap-8">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] font-medium tracking-tight text-white">
              Welcome back
            </h1>
            <p className="text-[15px]" style={{ color: "#90a1b9" }}>
              Sign in to your Decision Engine account
            </p>
          </div>

          {/* SSO option */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-2.5 rounded-lg border text-[15px] font-medium text-white transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.04)" }}
            aria-label="Continue with Google SSO"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
            <span className="text-[13px]" style={{ color: "#90a1b9" }}>or</span>
            <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Email / password form */}
          <form className="flex flex-col gap-4" aria-label="Sign in form">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[13px] font-medium" style={{ color: "#90a1b9" }}>
                Work email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg text-[15px] text-white placeholder:text-[#4a5565] transition-colors focus:outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-[13px] font-medium" style={{ color: "#90a1b9" }}>
                  Password
                </label>
                <a
                  href="#"
                  className="text-[13px] transition-colors"
                  style={{ color: "#0066ff" }}
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-lg text-[15px] text-white placeholder:text-[#4a5565] transition-colors focus:outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
            </div>

            <Button href="#" variant="gradient" size="md" className="w-full justify-center mt-1">
              Sign in
            </Button>
          </form>

          <p className="text-center text-[13px]" style={{ color: "#4a5565" }}>
            By signing in you agree to our{" "}
            <a href="#" className="underline transition-colors" style={{ color: "#90a1b9" }}>Terms</a>
            {" "}and{" "}
            <a href="#" className="underline transition-colors" style={{ color: "#90a1b9" }}>Privacy Policy</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
