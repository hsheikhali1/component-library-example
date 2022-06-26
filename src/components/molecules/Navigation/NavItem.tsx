import { twMerge } from "tailwind-merge";

type NavItemProps = {
  path: string;
  label: string;
  className?: string;
};

const NavItem = ({ path, label, className }: NavItemProps) => {
  const classes = twMerge("text-white font-semibold leading-9 px-2", className);
  return (
    <li className={classes} key={label}>
      <a href={path}>{label}</a>
    </li>
  );
};
export default NavItem;
