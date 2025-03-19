import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import { ReactNode } from "react";

const panelVariants = cva("mx-auto w-full px-4 md:px-6 xl:px-0", {
  variants: {
    width: {
      lg: "max-w-screen-lg",
    },
  },
  defaultVariants: {
    width: "lg",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof panelVariants> {
  asChild?: boolean;
  children: ReactNode;
}

export const Container = ({
  className,
  children,
  width,
  asChild = false,
  ...props
}: ContainerProps) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={cn(panelVariants({ width, className }))} {...props}>
      {children}
    </Comp>
  );
};
