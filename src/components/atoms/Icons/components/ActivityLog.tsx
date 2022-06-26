import { DefaultProps } from "../types";

interface ActivityLogProps extends DefaultProps {}

const ActivityLog: React.FC<ActivityLogProps> = ({ width, height }) => {
	return (
		<svg
			width={width ?? 32}
			height={height ?? 32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="1"
				y="1"
				width={width ?? 32}
				height={height ?? 32}
				rx="3"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				d="M4.26667 17.0668H8.53333L12.2667 9.6001L19.7333 23.4668L22.9333 17.0668H27.7333"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ActivityLog;
