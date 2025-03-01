import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function AnimatedButton({ children, className, onClick, ...props }: AnimatedButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsAnimating(true);
    onClick?.(e);
  };

  return (
    <Button
      size="lg"
      className={cn(
        "relative overflow-hidden transition-transform duration-300",
        isAnimating && "animate-button-press",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
}
