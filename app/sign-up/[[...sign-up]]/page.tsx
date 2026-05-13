import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";
import Logo from "@/components/ui/Logo";
import { clerkAppearance } from "@/lib/clerk-appearance";

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
      {/* Header — mirrors Navigation */}
      <header
        className="flex items-center justify-between px-8 py-5 border-b"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <a
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Decision Engine home"
        >
          <Logo className="flex-shrink-0" />
          <span className="text-white font-semibold text-[16px] leading-6">
            Decision Engine
          </span>
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

      {/* Auth card */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <SignUp appearance={clerkAppearance} />
      </main>
    </div>
  );
}
