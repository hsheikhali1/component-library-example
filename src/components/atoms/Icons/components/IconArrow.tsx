import { DefaultProps } from "../types";

export interface IconArrowProps extends DefaultProps {}

const IconArrow: React.FC<IconArrowProps> = ({ className }) => {
	return (
		<svg
			data-testid="icon-right"
			aria-hidden="true"
			focusable="false"
			width="8"
			height="11"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M.92 8.46a1.145 1.145.0 00-.15 1.625c.413.49 1.149.555 1.644.148L7.08 6.386c.56-.46.56-1.311.0-1.772L2.414.767A1.176 1.176.0 00.77.915 1.145 1.145.0 00.92 2.54L4.51 5.5.92 8.46z"
				fillRule="nonzero"
				className="fill-current"
			/>
		</svg>
	);
};

export default IconArrow;
