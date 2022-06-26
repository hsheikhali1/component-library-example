import React from "react";
import { twMerge } from "tailwind-merge";

type HamburgerProps = {
  navOpen: Boolean;
  children?: React.ReactNode;
};

const Hamburger: React.FC<HamburgerProps> = ({ children, navOpen }) => {
  const classes = twMerge(
    "p-4 absolute top-16 left-0 w-full bg-white lg:hidden font-bold text-bits-blue",
    navOpen ? "block" : "hidden",
  );

  return <ul className={classes}>{children}</ul>;
};

export default Hamburger;
