import { DefaultProps } from "../types";

interface CheckmarkProps extends DefaultProps {}

const Checkmark: React.FC<CheckmarkProps> = ({
	iconBgColor,
	className,
	width,
	height,
}) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        className={`${iconBgColor ?? "bits-blue"}`}
        cx="12.5"
        cy="12.609"
        r="12"
      />

			<path
				className="fill-current"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.868 15.067c-.665-.736-.127-1.358-.127-1.358s.645-.6 1.37.053c.723.653 2.083 1.88 2.494 1.88.412 0 1.424-1.376 1.424-1.376s4.044-5.304 4.57-5.872c.525-.569 1.131-.95 1.518-.713.386.236.622.653 0 1.597-.623.943-5.568 7.934-6.31 8.814-.744.88-1.618.47-2.014 0-.396-.47-2.26-2.288-2.925-3.025z"
			/>
		</svg>
	);
};
export default Checkmark;
