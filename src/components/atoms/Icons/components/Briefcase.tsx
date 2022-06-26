import { DefaultProps } from "../types";

export interface BriefcaseProps extends DefaultProps {}

const Briefcase: React.FC<BriefcaseProps> = ({ width, height }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="stroke-current"
		>
			<path
				d="M18.3594 37H9.8125C4.94549 37 1 33.0968 1 28.2821V13.359C1 10.9516 2.97275 9 5.40625 9H42.5938C45.0273 9 47 10.9516 47 13.359V28.2821C47 33.0968 43.0545 37 38.1875 37H28.6406"
				strokeWidth="2"
				className="stroke-current"
			/>
			<path
				d="M13 9H34V4C34 2.34315 32.6569 1 31 1H16C14.3431 1 13 2.34315 13 4V9Z"
				strokeWidth="2"
				className="stroke-current"
			/>
			<path
				className="stroke-current"
				d="M17 8H30V5H17L17 8Z"
				strokeWidth="2"
			/>
			<path
				d="M46 33V42.8947C46 45.162 44.0301 47 41.6 47H6.4C3.96995 47 2 45.162 2 42.8947V33"
				strokeWidth="2"
				className="stroke-current"
			/>
			<rect
				x="19"
				y="33"
				width="9"
				height="7"
				rx="1"
				className="stroke-current"
				strokeWidth="2"
			/>
			<mask id="path-6-inside-1_265_11838" fill="white">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M35 10V38H33V10H35ZM38 38V10H40V38H38Z"
				/>
			</mask>
			<path
				d="M35 38V40H37V38H35ZM35 10H37V8H35V10ZM33 38H31V40H33V38ZM33 10V8H31V10H33ZM38 10V8H36V10H38ZM38 38H36V40H38V38ZM40 10H42V8H40V10ZM40 38V40H42V38H40ZM37 38V10H33V38H37ZM33 40H35V36H33V40ZM31 10V38H35V10H31ZM35 8H33V12H35V8ZM36 10V38H40V10H36ZM40 8H38V12H40V8ZM42 38V10H38V38H42ZM38 40H40V36H38V40Z"
				className="fill-current"
				mask="url(#path-6-inside-1_265_11838)"
			/>
			<mask id="path-8-inside-2_265_11838" fill="white">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M9 9V38H7V9H9ZM12 38V9H14V38H12Z"
				/>
			</mask>
			<path
				d="M9 38V40H11V38H9ZM9 9H11V7H9V9ZM7 38H5V40H7V38ZM7 9V7H5V9H7ZM12 9V7H10V9H12ZM12 38H10V40H12V38ZM14 9H16V7H14V9ZM14 38V40H16V38H14ZM11 38V9H7V38H11ZM7 40H9V36H7V40ZM5 9V38H9V9H5ZM9 7H7V11H9V7ZM10 9V38H14V9H10ZM14 7H12V11H14V7ZM16 38V9H12V38H16ZM12 40H14V36H12V40Z"
				mask="url(#path-8-inside-2_265_11838)"
				className="fill-current stroke-current"
			/>
		</svg>
	);
};

export default Briefcase;
