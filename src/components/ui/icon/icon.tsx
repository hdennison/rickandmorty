import type { LucideIcon, LucideProps } from "lucide-react";
import { Circle, ChevronsUpDown, Search } from "lucide-react";
import { cn } from "../utils";

type IconProps = LucideProps & { className?: string };

const withClassName = (Icon: LucideIcon, displayName: string) => {
  const WrappedIcon = ({ className, ...props }: IconProps) => (
    <Icon className={cn("shrink-0", className)} {...props} />
  );

  WrappedIcon.displayName = displayName;
  return WrappedIcon;
};

export const CircleIcon = withClassName(Circle, "CircleIcon");
export const SearchIcon = withClassName(Search, "SearchIcon");
export const ChevronsUpDownIcon = withClassName(
  ChevronsUpDown,
  "ChevronsUpDownIcon",
);
