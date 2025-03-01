import { cn } from "@/lib/utils";

interface RainbowContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function RainbowContainer({ children, className }: RainbowContainerProps) {
  return (
    <div className={cn(
      "relative rounded-xl bg-white",
      "before:absolute before:-z-10 before:rounded-xl",
      "before:content-[''] before:inset-0 before:p-1",
      "before:bg-[linear-gradient(90deg,#ff0000,#ffa500,#ffff00,#008000,#0000ff,#4b0082,#ee82ee)]",
      "before:animate-rainbow-spin",
      className
    )}>
      {children}
    </div>
  );
}
