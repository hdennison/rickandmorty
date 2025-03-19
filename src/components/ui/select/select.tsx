import { ChevronsUpDownIcon } from "../icon/icon";
import { cn } from "../utils";
import { cva, VariantProps } from "class-variance-authority";

// I strongly recommend to use 'Select' from 'radix-ui' instead of this custom select component
const selectVariants = cva(
  "flex relative items-center gap-2 border-[var(--color-input-border)] rounded-md border-1 h-10 fake-input min-h-10 text-sm",
  {
    variants: {
      disabled: {
        true: "bg-[var(--color-input-disabled-bg)] text-[var(--color-input-disabled-text)]",
        false:
          "bg-[var(--color-input-bg)] bg:hover(bg-[var(--color-input-bg-hover)])",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export interface PanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof selectVariants> {
  disabled?: boolean;
}

const Select = ({
  children,
  className,
  disabled = false,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <div className={cn(selectVariants({ disabled, className }))}>
    <select
      className="appearance-none flex-1 p-2 pl-3 pr-8 outline-none"
      disabled={disabled}
      {...props}
    >
      {children}
    </select>
    <ChevronsUpDownIcon className="absolute right-2" size={16} />
  </div>
);

const Option = ({
  children,
  ...props
}: React.OptionHTMLAttributes<HTMLOptionElement>) => (
  <option {...props}>{children}</option>
);

Select.Option = Option;

export { Select };
