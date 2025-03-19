import Image, { ImageProps } from "next/image";
import { cn } from "../utils";

type LogoProps = Omit<ImageProps, "src" | "alt">;

export function Logo({ className }: LogoProps) {
  return (
    <Image
      className={cn("shrink-0 aspect-[3_/_1]", className)}
      src="./logo.svg"
      alt="Rick and Morty logo"
      width={150}
      height={50}
    />
  );
}
