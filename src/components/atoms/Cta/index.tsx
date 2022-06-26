import React from "react";
import { twMerge } from "tailwind-merge";

import ctaStyles from "./cta.styles";

type Props = {
  label?: string;
  href: string;
  className?: string;
  children?: React.ReactNode;
  variant: "solid" | "outlined" | "link";
};

const Cta: React.FC<Props> = ({
  className,
  children,
  variant,
  label,
  href,
}) => {
  const renderLabel = () => children || label;

  const classes = twMerge(
    "text-white bg-blue-400 p-5 rounded-md",
    ctaStyles[variant ?? "solid"],
    className,
  );

  return (
    <a className={classes} href={href}>
      {renderLabel()}
    </a>
  );
};

export default Cta;
