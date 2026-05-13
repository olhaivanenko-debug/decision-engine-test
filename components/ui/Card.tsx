import { cn } from "@/lib/cn";

type CardVariant = "dark" | "light" | "feature";

const variantStyles: Record<CardVariant, { className: string; style: React.CSSProperties }> = {
  dark: {
    className: "rounded-2xl p-6 flex flex-col gap-4",
    style: {
      backgroundColor: "#0f1629",
      border: "1px solid rgba(255,255,255,0.08)",
    },
  },
  light: {
    className: "rounded-2xl p-6 flex flex-col gap-4 bg-white border border-gray-100 shadow-sm",
    style: {},
  },
  feature: {
    className: "rounded-2xl p-6 flex flex-col gap-4",
    style: {
      backgroundColor: "#ffffff",
      border: "1px solid #e5e7eb",
    },
  },
};

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({ children, variant = "light", className, style }: CardProps) {
  const { className: variantClass, style: variantStyle } = variantStyles[variant];
  return (
    <div
      className={cn(variantClass, className)}
      style={{ ...variantStyle, ...style }}
    >
      {children}
    </div>
  );
}
