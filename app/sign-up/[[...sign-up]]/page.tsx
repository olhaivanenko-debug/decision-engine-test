import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Get Started — Decision Engine",
  description: "Create your Decision Engine account and start building decision workflows in minutes.",
};

export default function SignUpPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#0a0f1e" }}
    >
      {/* Header */}
      <header
        className="flex items-center justify-between px-8 py-5 border-b"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <a href="/" className="flex items-center gap-2.5" aria-label="Decision Engine home">
          <Logo className="flex-shrink-0" />
          <span className="text-white font-semibold text-[16px] leading-6">Decision Engine</span>
        </a>
        <span className="text-[14px]" style={{ color: "#90a1b9" }}>
          Already have an account?{" "}
          <a
            href="/sign-in"
            className="font-medium text-[#0066ff] hover:text-[#3d8aff] transition-colors"
          >
            Sign in
          </a>
        </span>
      </header>

      {/* Clerk SignUp component */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <SignUp
          appearance={{
            variables: {
              colorBackground: "#111827",
              colorText: "#ffffff",
              colorTextSecondary: "#90a1b9",
              colorInputBackground: "rgba(255,255,255,0.06)",
              colorInputText: "#ffffff",
              colorPrimary: "#0066ff",
              borderRadius: "0.5rem",
            },
            elements: {
              rootBox: "w-full max-w-[400px]",
              card: "bg-transparent shadow-none border border-white/10 rounded-xl p-0",
              headerTitle: "text-white text-[24px] font-medium",
              headerSubtitle: "text-[#90a1b9]",
              socialButtonsBlockButton:
                "bg-white/4 border border-white/12 text-white hover:bg-white/8 transition-colors",
              dividerLine: "bg-white/8",
              dividerText: "text-[#90a1b9]",
              formFieldLabel: "text-[#90a1b9] text-[13px]",
              formFieldInput:
                "bg-white/6 border border-white/10 text-white placeholder:text-[#4a5565] focus:border-[#0066ff]/50 focus:ring-0",
              formButtonPrimary:
                "bg-[#0066ff] hover:bg-[#0052cc] text-white font-medium transition-colors",
              footerActionLink: "text-[#0066ff] hover:text-[#3d8aff] transition-colors",
            },
          }}
        />
      </main>
    </div>
  );
}
