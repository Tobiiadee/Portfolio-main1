/** @format */
import React from "react";
import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold lg:text-5xl font-serif",
      h2: "scroll-m-20 text-2xl lg:text-3xl font-extrabold first:mt-0 font-serif",
      h3: "scroll-m-20 text-xl font-bold font-serif",
      h4: "scroll-m-20 text-xl font-medium font-serif tracking-normal",
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
