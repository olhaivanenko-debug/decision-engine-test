import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "gradient" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, { className?: string; style?: React.CSSProperties }> = {
  primary: {
    className: "text-white hover:opacity-90 transition-opacity",
    style: { backgroundColor: "#0066ff" },
  },
  gradient: {
    className: "text-white hover:opacity-90 transition-opacity",
    style: { background: "linear-gradient(90deg, #2b7fff 0%, #00b8db 100%)" },
  },
  ghost: {
    className: "transition-colors",
    style: {
      color: "#ffffff",
      borderColor: "rgba(255,255,255,0.2)",
      backgroundColor: "rgba(255,255,255,0.05)",
    },
  },
  outline: {
    className: "text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors",
  },
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-[14px]",
  md: "px-6 py-3 text-[16px]",
  lg: "px-8 py-4 text-[16px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const { className: variantClass, style: variantStyle } = variantStyles[variant];

  const baseClass = cn(
    "inline-flex items-center gap-2 rounded-lg font-medium cursor-pointer",
    sizeStyles[size],
    variant === "ghost" || variant === "outline" ? "border" : "",
    variantClass,
    className
  );

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={baseClass}
        style={variantStyle}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClass}
      style={variantStyle}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
