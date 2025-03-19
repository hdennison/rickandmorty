import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils";
import { SearchIcon } from "../icon/icon";

const buttonVariants = cva(
  "flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md justify-center",
  {
    variants: {
      variant: {
        primary: "bg-[#ddd] border-[#333] hover:bg-[#ccc]",
        secondary: "border-1 border-[gray] hover:bg-[#f0f0f0] text-[gray]",
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
