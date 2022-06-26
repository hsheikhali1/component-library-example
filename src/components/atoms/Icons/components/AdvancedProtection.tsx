import { DefaultProps } from "../types";

interface AdvancedPropectionProps extends DefaultProps {}

const AdvancedPropection: React.FC<AdvancedPropectionProps> = ({
	width,
	height,
}) => {
	return (
		<svg
			width={width ?? 32}
			height={height ?? 32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.65459 3.26082L4.64735 3.26796L4.4287 3.31268C3.60334 3.48159 3.00097 4.23194 3 5.1117V12.7627C3 20.6325 6.68277 26.5353 14.1169 30.5578C15.1938 31.1406 16.4965 31.1477 17.58 30.5768C25.2183 26.5525 29 20.643 29 12.7627V5.11123C29.001 4.22813 28.3962 3.47541 27.5554 3.30507C27.2221 3.23416 26.8881 3.16675 26.5533 3.10285C25.6726 2.93536 24.7885 2.78545 23.9016 2.65322C21.411 2.28114 18.9344 2.04323 16.6287 2.00517C16.2097 1.99828 15.7907 1.99828 15.3718 2.00517C13.0661 2.04323 10.5895 2.28066 8.09893 2.65322C7.14179 2.79596 6.24982 2.94964 5.44714 3.10285C5.18251 3.15315 4.91832 3.20565 4.65459 3.26034V3.26082Z"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				d="M17.0078 15L17.0039 15H22V15.0389L17.0078 15ZM16 14.9922V15V15.9986L16 15.9971L15.9971 14.9923L15.9864 14.9924L15.9999 14.0138L16 14.0069V14.9922ZM9.96307 15H14.9961L14.9923 15L9.9659 15.0388L9.96307 15ZM16 21.5C16 21.4991 16 21.4981 16 21.4972L16 21.5Z"
				className="stroke-current"
				strokeWidth="2"
			/>
		</svg>
	);
};

export default AdvancedPropection;
