import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog — Decision Engine",
  description: "Insights on decision automation, workflow design, and the future of business logic.",
};

const posts = [
  {
    tag: "Product",
    date: "May 2025",
    title: "Introducing AI-assisted decision suggestions",
    excerpt: "Our new AI layer analyzes your historical decisions and surfaces rule improvements — without replacing the humans who own the logic.",
    readTime: "4 min read",
  },
  {
    tag: "Engineering",
    date: "Apr 2025",
    title: "How we built a 99.99% uptime decision API",
    excerpt: "A look inside the infrastructure and deployment model that lets enterprise customers run millions of decisions per day with sub-10ms latency.",
    readTime: "7 min read",
  },
  {
    tag: "Guide",
    date: "Mar 2025",
    title: "Credit decisioning without code: a step-by-step guide",
    excerpt: "From applicant data to approved/declined in under an hour. Walk through building a real underwriting workflow in Decision Engine.",
    readTime: "9 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0f1e" }}>
      <Navigation />

      <main className="flex-1">
        <section className="py-24 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <Container>
            <div className="max-w-[640px]">
              <p className="text-[13px] font-medium tracking-widest uppercase mb-4" style={{ color: "#0066ff" }}>Blog</p>
              <h1 className="text-[48px] font-medium leading-[1.1] tracking-tight text-white mb-6">
                Stories, guides,<br />and product updates
              </h1>
              <p className="text-[18px] leading-[1.65]" style={{ color: "#90a1b9" }}>
                Insights from the Decision Engine team on workflow automation, decision intelligence, and building for regulated industries.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="flex flex-col gap-6">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="flex flex-col md:flex-row md:items-start gap-6 p-7 rounded-2xl border transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                        style={{ backgroundColor: "rgba(0,102,255,0.15)", color: "#0066ff" }}>
                        {post.tag}
                      </span>
                      <span className="text-[12px]" style={{ color: "#4a5565" }}>{post.date}</span>
                      <span className="text-[12px]" style={{ color: "#4a5565" }}>· {post.readTime}</span>
                    </div>
                    <h2 className="text-[20px] font-medium text-white leading-snug">{post.title}</h2>
                    <p className="text-[15px] leading-[1.65]" style={{ color: "#90a1b9" }}>{post.excerpt}</p>
                  </div>
                  <a href="#" className="text-[14px] font-medium whitespace-nowrap mt-1 transition-colors text-[#0066ff] hover:text-[#3d8aff]">
                    Read post →
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl border text-center"
              style={{ backgroundColor: "rgba(0,102,255,0.05)", borderColor: "rgba(0,102,255,0.15)" }}>
              <p className="text-[16px] font-medium text-white mb-1">More posts coming soon</p>
              <p className="text-[14px]" style={{ color: "#90a1b9" }}>
                Follow us on <a href="#" className="text-[#0066ff] hover:text-[#3d8aff] transition-colors">LinkedIn</a> or{" "}
                <a href="#" className="text-[#0066ff] hover:text-[#3d8aff] transition-colors">Twitter</a> for updates.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
