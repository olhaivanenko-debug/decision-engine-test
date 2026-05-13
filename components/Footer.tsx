import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

const footerColumns = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "How it Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/docs" },
      { label: "Guides", href: "/docs" },
      { label: "Support", href: "/contact" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="w-full border-t"
      style={{
        backgroundColor: "#0a0f1e",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <Container className="py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-[280px]">
            <a href="/" className="flex items-center gap-2.5" aria-label="Decision Engine home">
              <Logo className="flex-shrink-0" />
              <span className="text-[16px] font-semibold text-white">
                Decision Engine
              </span>
            </a>
            <p
              className="text-[14px] font-normal leading-6"
              style={{ color: "#90a1b9" }}
            >
              The no-code platform for building intelligent business workflows.
            </p>
          </div>

          {/* Columns */}
          <nav className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8" aria-label="Footer navigation">
            {footerColumns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <span className="text-[16px] font-semibold text-white">
                  {col.heading}
                </span>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] font-normal transition-colors text-[#90a1b9] hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <span
            className="text-[14px] font-normal"
            style={{ color: "#90a1b9" }}
          >
            © 2026 Decision Engine. All rights reserved.
          </span>
          <nav className="flex items-center gap-6" aria-label="Legal links">
            {[
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "Cookies", href: "/cookies" },
              ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[14px] font-normal transition-colors text-[#90a1b9] hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
