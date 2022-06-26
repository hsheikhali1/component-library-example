import React from "react";
import { twMerge } from "tailwind-merge";

type Variations = "1" | "2" | "3" | "4" | "5";
type Colors =
  | "bits-blue"
  | "bubblegum-pink"
  | "algae-green"
  | "peel-orange"
  | "sassy-purple"
  | "marine-teal";

export type TextColors =
  | `text-${Colors}-${Variations}`
  | `text-${Colors}`
  | "text-black"
  | "text-white"
  | "text-current"
  | "text-security-black";

export type BackgroundColors =
  | `bg-${Colors}-${Variations}`
  | `bg-${Colors}`
  | "bg-soft-navy"
  | "bg-security-black";

export type FillColors =
  | `fill-${Colors}-${Variations}`
  | `fill-${Colors}`
  | "fill-transparent"
  | "fill-current";

export const enum HeadingStyles {
  h1 = "text-[28px] tracking-[-.56px] md:text-[32px] md:tracking-[-.64] lg:tracking-[-.96px] lg:text-4xl",
  h1xl = "text-4xl tracking-[-.72px] md:text-[42px] md:tracking-[-.84px] lg:tracking-[-.96px] lg:text-5xl",
  h2 = "text-2xl tracking-[-.48px] md:text-[28px] md:tracking-[-.56px] lg:text-[30px] lg:tracking-[-.60px]",
  h3 = "text-[22px] tracking-[-.44px] lg:text-2xl lg:tracking-[-.48px]",
  h4 = "text-lg tracking-[-.36px] lg:text-xl lg:tracking-[-.40px]",
  h4uppercase = "text-lg tracking-[.90px] uppercase lg:text-xl lg:tracking-[1px]",
  h5 = "text-base tracking-[-.32px] lg:text-lg lg:tracking-[-.36px]",
  h5uppercase = "text-base tracking-[0.80px] uppercase lg:text-lg lg:tracking-[0.90px]",
  h6 = "text-[15px] tracking-[.30px] lg:text-base lg:tracking-[-.32px]",
  h6uppercase = "text-[15px] tracking-[.75px] uppercase lg:text-base lg:tracking-[.80px]",
}

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  style: HeadingStyles;
  uppercase?: boolean;
  color?: TextColors;
  className?: string;
  children?: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({
  as,
  style,
  children,
  color,
  className,
}) => {
  const classes = twMerge(
    "font-bold tracking-tighter lg:tracking-tighter",
    style,
    color,
    className,
  );

  // define the tag to use
  // if no tag is selected, use h1 as default
  const Tag = as ?? "h1";

  return (
    <Tag data-testid="heading" className={classes}>
      {children}
    </Tag>
  );
};

export default Heading;
