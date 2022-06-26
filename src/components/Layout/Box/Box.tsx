import React from "react";

type Props = {
  testId?: string;
  className?: string;
};

const Box: React.FC<React.HTMLAttributes<HTMLDivElement> & Props> = ({
  children,
  className,
  testId,
}) => (
  <div data-testid={testId} className={className}>
    {children}
  </div>
);

export default Box;
