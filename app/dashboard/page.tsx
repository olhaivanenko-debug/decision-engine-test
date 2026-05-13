import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Logo from "@/components/ui/Logo";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();
  const firstName = user?.firstName ?? "there";

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
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-8 h-8",
            },
          }}
        />
      </header>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="flex flex-col gap-4 max-w-[480px]">
          <div
            className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-[32px] font-medium tracking-tight text-white">
            Welcome, {firstName}
          </h1>
          <p className="text-[16px] leading-relaxed" style={{ color: "#90a1b9" }}>
            Your Decision Engine dashboard is coming soon. You&apos;re all set up — workflows, rules, and integrations will live here.
          </p>
          <a
            href="/"
            className="mt-4 text-[14px] font-medium transition-colors"
            style={{ color: "#0066ff" }}
          >
            ← Back to home
          </a>
        </div>
      </main>
    </div>
  );
}
