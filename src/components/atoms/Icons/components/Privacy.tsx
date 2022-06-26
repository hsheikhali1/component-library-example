import { DefaultProps } from "../types";

interface PrivacyProps extends DefaultProps {}

const Privacy: React.FC<PrivacyProps> = ({ width, height }) => {
	return (
		<svg
			width={width ?? 32}
			height={height ?? 32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 19V4.84416L16.0145 1.04882L28 4.84366V19C28 25.6274 22.6274 31 16 31C9.37258 31 4 25.6274 4 19Z"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				d="M13 13C13 11.3431 14.3431 10 16 10C17.6569 10 19 11.3431 19 13V15H13V13Z"
				className="stroke-current"
				strokeWidth="2"
			/>
			<mask id="path-3-inside-1_265_11369" fill="white">
				<rect x="10" y="14" width="12" height="8" rx="0.888889" />
			</mask>
			<rect
				x="10"
				y="14"
				width="12"
				height="8"
				rx="0.888889"
				className="stroke-current"
				strokeWidth="2"
				mask="url(#path-3-inside-1_265_11369)"
			/>
		</svg>
	);
};

export default Privacy;
