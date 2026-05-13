import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navigation() {
  return (
    <nav
      className="w-full sticky top-0 z-50"
      style={{ backgroundColor: "#0a0f1e" }}
      aria-label="Main navigation"
    >
      <Container className="h-[73px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5" aria-label="Decision Engine home">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)",
            }}
            aria-hidden="true"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M4 9h10M9 4v10M4 4l10 10M14 4L4 14"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="text-white font-semibold text-[16px] leading-6">
            Decision Engine
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              role="listitem"
              className="text-[16px] font-normal leading-6 transition-colors text-[#90a1b9] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-[16px] font-medium leading-6 px-4 py-2 rounded-md transition-colors text-[#90a1b9] hover:text-white"
          >
            Sign in
          </a>
          <Button href="#" variant="primary" size="sm" className="px-5 py-2.5">
            Get Started
          </Button>
        </div>
      </Container>
    </nav>
  );
}
