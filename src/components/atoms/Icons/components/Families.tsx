import { DefaultProps } from "../types";

interface FamiliesProps extends DefaultProps {}

const Families: React.FC<FamiliesProps> = ({ width, height }) => {
	return (
		<svg
			width={width ?? 32}
			height={height ?? 32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M27 24H31V20.2671C31 19.2749 30.6565 18.3549 29.7989 17.8575C29.016 17.4035 27.6309 17.0254 26.0192 17.0012"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<circle
				cx="26"
				cy="11"
				r="3"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				d="M5.01923 24H1.01923V20.2671C1.01923 19.2749 1.36274 18.3549 2.22036 17.8575C3.00326 17.4035 4.38836 17.0254 6 17.0012"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<circle
				r="3"
				transform="matrix(-1 0 0 1 6 11)"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M24 26H8V20.3955C8 19.3891 8.97484 18.4919 10.0902 18.0513C11.3917 17.5369 13.3776 17 15.9977 17C18.6177 17 20.6037 17.5369 21.9052 18.0513C23.0205 18.4919 24 19.4157 24 20.4222V26Z"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="square"
			/>
			<circle
				cx="16"
				cy="10"
				r="4"
				className="stroke-current"
				strokeWidth="2"
			/>
		</svg>
	);
};

export default Families;
