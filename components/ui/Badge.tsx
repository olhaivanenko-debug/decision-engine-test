import { cn } from "@/lib/cn";

type BadgeVariant = "primary" | "success" | "muted" | "gradient";

const variantStyles: Record<BadgeVariant, { className?: string; style?: React.CSSProperties }> = {
  primary: {
    className: "text-[#00d4ff]",
    style: { backgroundColor: "rgba(0,102,255,0.2)" },
  },
  success: {
    className: "text-[#00c950]",
    style: { backgroundColor: "rgba(0,201,80,0.15)" },
  },
  muted: {
    className: "text-[#90a1b9]",
    style: { backgroundColor: "rgba(255,255,255,0.08)" },
  },
  gradient: {
    className: "text-white",
    style: { background: "linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)" },
  },
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  className?: string;
}

export default function Badge({ children, variant = "primary", dot = false, className }: BadgeProps) {
  const { className: variantClass, style } = variantStyles[variant];
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[14px] font-normal",
        variantClass,
        className
      )}
      style={style}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: "currentColor" }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
