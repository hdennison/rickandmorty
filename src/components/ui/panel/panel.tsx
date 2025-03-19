import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const panelVariants = cva("rounded-lg", {
  variants: {
    padding: {
      none: "p-0",
      medium: "p-4",
      large: "p-8",
    },
    level: {
      default: "bg-[var(--color-surface)] shadow-md",
      low: "bg-[var(--color-surface-low)]",
    },
  },
  defaultVariants: {
    padding: "medium",
    level: "default",
  },
});

export interface PanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof panelVariants> {
  asChild?: boolean;
}

export const Panel = ({
  className,
  children,
  level,
  padding,
  asChild = false,
  ...props
}: PanelProps) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(panelVariants({ className, level, padding }))}
      {...props}
    >
      {children}
    </Comp>
  );
};
