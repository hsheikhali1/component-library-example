import { DefaultProps } from "../types";

interface DevicesProps extends DefaultProps {}

const Lock: React.FC<DevicesProps> = ({ width, height }) => {
	return (
		<svg
			width={width ?? 32}
			height={height ?? 32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M28 16V6.76471C28 5.79009 27.2099 5 26.2353 5H2.76471C1.79009 5 1 5.79009 1 6.76471V21.2353C1 22.2099 1.79009 23 2.76471 23H24"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M24.0531 17.9947C24.056 17.4445 24.5028 17 25.053 17L30 17C30.5523 17 31 17.4477 31 18V27C31 27.5523 30.5523 28 30 28H25.0053C24.451 28 24.0024 27.549 24.0053 26.9947L24.0531 17.9947Z"
				className="stroke-current"
				strokeWidth="2"
			/>
			<rect
				x="26"
				y="25"
				width="3"
				height="1"
				rx="0.5"
				className="fill-current"
			/>
			<path
				d="M12 24L10 28H19L17 24"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Lock;
