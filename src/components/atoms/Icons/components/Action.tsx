import { DefaultProps } from "../types";

interface ActionProps extends DefaultProps {}

const Action: React.FC<ActionProps> = ({ width, height }) => {
	return (
		<svg
			width={width ?? 25}
			height={height ?? 25}
			viewBox="0 0 33 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 13H4C2.34315 13 1 14.3431 1 16V16C1 17.6569 2.34315 19 4 19H21"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				d="M20 12V8.97753C20 7.17513 22.1969 6.2924 23.444 7.59371L30.8369 15.3081C31.2076 15.6949 31.2076 16.3051 30.8369 16.6919L23.444 24.4063C22.1969 25.7076 20 24.8249 20 23.0225V20"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 9C8 8.44772 8.44771 8 9 8H17C17.5523 8 18 8.44772 18 9C18 9.55228 17.5523 10 17 10H9C8.44771 10 8 9.55228 8 9ZM0 9C0 8.44772 0.447715 8 1 8H5C5.55228 8 6 8.44772 6 9C6 9.55228 5.55228 10 5 10H1C0.447715 10 0 9.55228 0 9Z"
				className="fill-current"
				fillOpacity="0.5"
			/>
			<path
				className="fill-current"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10 23C10 22.4477 9.55229 22 9 22H1C0.447716 22 0 22.4477 0 23C0 23.5523 0.447716 24 1 24H9C9.55229 24 10 23.5523 10 23ZM18 23C18 22.4477 17.5523 22 17 22H13C12.4477 22 12 22.4477 12 23C12 23.5523 12.4477 24 13 24H17C17.5523 24 18 23.5523 18 23Z"
				fillOpacity="0.5"
			/>
		</svg>
	);
};
export default Action;
