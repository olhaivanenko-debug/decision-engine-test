import { cn } from "@/lib/cn";

type SectionVariant =
  | "dark-deep"
  | "dark-navy"
  | "dark-gradient"
  | "dark-gradient-center"
  | "dark-gradient-reverse"
  | "white"
  | "light";

const variantStyles: Record<SectionVariant, React.CSSProperties> = {
  "dark-deep": { background: "#0a0f1e" },
  "dark-navy": { background: "#0a0e27" },
  "dark-gradient": {
    background: "linear-gradient(135deg, #0a0f1e 0%, #0f1629 100%)",
  },
  "dark-gradient-center": {
    background: "linear-gradient(180deg, #0a0f1e 0%, #1a1f35 100%)",
  },
  "dark-gradient-reverse": {
    background: "linear-gradient(160deg, #0a0f1e 0%, #0f1629 50%, #0a0f1e 100%)",
  },
  white: { background: "#ffffff" },
  light: { background: "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)" },
};

interface SectionProps {
  children: React.ReactNode;
  variant?: SectionVariant;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Section({
  children,
  variant = "white",
  id,
  className,
  style,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full relative overflow-hidden", className)}
      style={{ ...variantStyles[variant], ...style }}
    >
      {children}
    </section>
  );
}
