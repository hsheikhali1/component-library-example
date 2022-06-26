import { twMerge } from "tailwind-merge";

export const enum TextStyles {
  xxl = "text-xl leading-[calc(20px*1.5)] tracking-[-.2px] md:text-2xl md:tracking-[-.24px] md:leading-[calc(24px*1.5)]",
  xl = "text-lg leading-[calc(18px*1.5)] tracking-[-.18px] md:text-xl md:tracking-[-.20px] md:leading-[calc(20px*1.5)]",
  lg = "text-lg leading-[calc(18px*1.5)] tracking-[-.18px] md:text-xl md:tracking-[-.20px] md:leading-[calc(20px*1.5)]",
  md = "text-base leading-[calc(16px*1.5)] tracking-[-.16px] md:text-lg md:tracking-[-.18px] md:leading-[calc(18px*1.5)]",
  sm = "text-sm leading-[calc(15px*1.5)] tracking-[-.15px] md:text-base md:tracking-[-.16px] md:leading-[calc(16px*1.5)]",
}

export interface TextProps {
  style: TextStyles;
  color?: string;
  className?: string;
  bold?: boolean;
}

const Text: React.FC<TextProps> = ({
  color,
  style,
  children,
  className,
  bold,
}) => {
  const classNames = twMerge(
    color,
    style,
    className,
    bold ? "font-bold" : "font-regular",
  );

  return (
    <p data-testid="text" className={classNames}>
      {children}
    </p>
  );
};

export default Text;
