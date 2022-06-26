import { DefaultProps } from "../types";

interface GlobeProps extends DefaultProps {}

const Globe: React.FC<GlobeProps> = ({ width, height }) => {
	return (
		<svg
			width={width ?? 32}
			height={height ?? 32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="16"
				cy="16"
				r="15"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				d="M24 16C24 20.2791 23.0222 24.1037 21.4924 26.8234C19.9449 29.5745 17.9636 31 16 31C14.0364 31 12.0551 29.5745 10.5076 26.8234C8.97775 24.1037 8 20.2791 8 16C8 11.7209 8.97775 7.8963 10.5076 5.17655C12.0551 2.42546 14.0364 1 16 1C17.9636 1 19.9449 2.42546 21.4924 5.17655C23.0222 7.8963 24 11.7209 24 16Z"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				d="M16 1.2381L16 30.7619"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="square"
			/>
			<path
				d="M30.6429 16L1.11905 16"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="square"
			/>
		</svg>
	);
};

export default Globe;
