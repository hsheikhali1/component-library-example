import { DefaultProps } from "../types";

interface ReportingProps extends DefaultProps {}

const Reporting: React.FC<ReportingProps> = ({ width, height }) => {
	return (
		<svg
			width={width ?? 32}
			height={height ?? 32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 4C1 3.44772 1.44772 3 2 3H16H30C30.5523 3 31 3.44772 31 4V16.6087V28C31 28.5523 30.5523 29 30 29H2C1.44771 29 1 28.5523 1 28V4Z"
				className="stroke-current"
				strokeWidth="2"
			/>
			<rect
				x="5"
				y="13"
				width="4"
				height="4"
				rx="0.5"
				className="fill-current"
				fill="#0572EC"
			/>
			<rect
				x="5"
				y="19"
				width="4"
				height="4"
				rx="0.5"
				className="fill-current"
				fill="#0572EC"
			/>
			<rect
				x="4"
				y="6"
				width="24"
				height="2"
				rx="1"
				className="fill-current"
				fill="#0572EC"
			/>
			<path
				d="M20 17V18H21H26C26 21.3137 23.3137 24 20 24C16.6863 24 14 21.3137 14 18C14 14.6863 16.6863 12 20 12V17Z"
				fill="white"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				d="M20 11L20 18H27C27 14.134 23.866 11 20 11Z"
				className="fill-current"
			/>
		</svg>
	);
};
export default Reporting;
