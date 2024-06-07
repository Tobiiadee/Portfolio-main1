/** @format */
import React from "react";
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-5xl font-extrabold lg:text-7xl font-sans",
      h2: "scroll-m-20 text-2xl lg:text-3xl font-extrabold first:mt-0 font-sans",
      h3: "scroll-m-20 text-xl font-bold font-sans",
      h4: "scroll-m-20 text-lg lg:text-2xl font-medium font-sans tracking-tight",
      h5: "scroll-m-20 font-normal font-sans text-base tracking-tight",
      p: "leading-7",
    },

    asLabel: {
      true: "leading-6 text-muted-foreground",
    },
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = "p", asLabel, asChild = false, ...props }, ref) => {
    const Comp = variant!;

    return (
      <Comp
        className={cn(textVariants({ variant, asLabel, className }))}
        {...props}
        ref={ref}
      />
    );
  }
);

Text.displayName = "Text";

export { Text, textVariants };
