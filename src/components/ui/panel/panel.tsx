import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

const panelVariants = cva("bg-white rounded-lg shadow-md", {
  variants: {
    padding: {
      none: "p-0",
      medium: "p-4",
    },
  },
  defaultVariants: {
    padding: "medium",
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
  padding,
  asChild = false,
  ...props
}: PanelProps) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp className={cn(panelVariants({ padding, className }))} {...props}>
      {children}
    </Comp>
  );
};
