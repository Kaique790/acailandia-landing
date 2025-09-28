import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-poppins font-semibold transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-light hover:bg-primary/90 focus-visible:ring-primary",
        secondary:
          "bg-secondary text-dark hover:bg-secondary/90 focus-visible:ring-secondary",
        outline:
          "border border-dark text-dark bg-transparent hover:bg-dark hover:text-light focus-visible:ring-dark",
        dark: "text-dark bg-dark hover:bg-dark/90 text-light focus-visible:ring-dark",
      },
      size: {
        sm: "px-4 py-1.5 text-sm",
        md: "px-5 py-2 text-base",
        lg: "px-7 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
