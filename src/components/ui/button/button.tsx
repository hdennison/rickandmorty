import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils";
import { SearchIcon } from "../icon/icon";

const buttonVariants = cva(
  "text-sm flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md justify-center font-semibold min-h-10",
  {
    variants: {
      variant: {
        primary: `bg-[var(--color-action)] hover:bg-[var(--color-action-hover)] text-[var(--color-text-inverse)]`,
        secondary: `border-1 text-[var(--color-action)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)]`,
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

interface ButtonComponent
  extends React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  > {
  Icon: typeof ButtonIcon;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
) as ButtonComponent;

Button.displayName = "Button";

const icons = {
  search: SearchIcon,
};

const ButtonIcon = ({ icon }: { icon: keyof typeof icons }) => {
  const Comp = icons[icon];

  return <Comp size={16} />;
};

Button.Icon = ButtonIcon;

export { Button, buttonVariants };
