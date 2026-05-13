import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  label?: string;
  heading: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  labelColor?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  heading,
  description,
  align = "center",
  dark = false,
  labelColor = "#0066ff",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {label && (
        <span
          className="text-[14px] font-normal uppercase tracking-widest"
          style={{ color: labelColor }}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-[48px] font-medium leading-[1.15] tracking-tight",
          dark ? "text-white" : "text-gray-900"
        )}
      >
        {heading}
      </h2>
      {description && (
        <p
          className="text-[20px] font-normal leading-[1.6]"
          style={{ color: dark ? "#90a1b9" : "#4a5565" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
