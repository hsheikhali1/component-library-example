import React from "react";
import { twMerge } from "tailwind-merge";
import Box from "../Box/Box";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ className, children }: Props) => {
  const classes = twMerge("max-w-6xl px-6", className);

  return <Box className={classes}>{children}</Box>;
};

export default Container;
