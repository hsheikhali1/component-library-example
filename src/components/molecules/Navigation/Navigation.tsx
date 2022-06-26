import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

import NavItem from "./NavItem";
import Hamburger from "./Hamburger";

import Box from "../../layout/Box/Box";
import Cta from "../../atoms/Cta/index";

type Props = {
  navBgColor?: string;
  children?: React.ReactNode;
};

type NavItems = Record<"path" | "label", string>[];

const Navigation: React.FC<Props> = ({ children, navBgColor }) => {
  const [navOpen, setNavOpen] = useState(false);

  const classes = twMerge(
    "fixed top-0 z-10 left-0 w-full h-16 flex justify-items-center justify-start bg-bits-blue",
    navBgColor,
  );

  const menu: NavItems = [
    { label: "", path: "" },
    { label: "", path: "" },
    { label: "", path: "" },
    { label: "", path: "" },
  ];

  return (
    <nav data-testid="nav" className={classes}>
      <Box className="relative flex items-center justify-between w-full">
        <Box className="hidden md:absolute md:left-[40%] lg:static md:flex md:order-2 lg:order-1">
          <a href="#">
            <img src="" alt="" height={44} width={44} />
          </a>
        </Box>
        {/* button and burger menu */}
        <button
          type="button"
          onClick={() => setNavOpen(!navOpen)}
          className="ml-5 text-white font-semibold md:order-1 lg:hidden"
        >
          Menu
        </button>
        <Hamburger navOpen={navOpen}>
          {menu.map((item) => (
            <NavItem
              className="text-bits-blue"
              key={item.label}
              path={item.path}
              label={item.label}
            />
          ))}
        </Hamburger>
        {/* end of button and burger menu */}

        {/* regular nav items */}
        <ul className="hidden lg:flex lg:mt-3 lg:order-2 lg:self-start lg:flex-1">
          {children}
        </ul>
        {/* cta container */}
        <Box className="flex order-3 pr-1 items-center space-x-2">
          <Cta
            className="text-white hidden lg:block"
            href="#"
            variant="link"
            label="Sign in"
          />
          <Cta
            className="bg-white text-bits-blue"
            href="#"
            variant="solid"
            label="Try 1password Free"
          />
        </Box>
        {/* end of cta container */}
      </Box>
    </nav>
  );
};

export default Navigation;
