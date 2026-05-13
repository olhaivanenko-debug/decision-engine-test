import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("max-w-[1280px] mx-auto px-8 w-full", className)}>
      {children}
    </div>
  );
}
