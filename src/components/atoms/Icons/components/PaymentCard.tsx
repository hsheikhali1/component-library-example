import { DefaultProps } from "../types";

interface PaymentCardProps extends DefaultProps {}

const PaymentCard: React.FC<PaymentCardProps> = ({ width, height }) => {
	return (
		<svg
			width={width ?? 32}
			height={height ?? 32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3.05949 26C1.92207 26 1 25.0779 1 23.9405L1 8.05949C1 6.92206 1.92207 6 3.05949 6H28.9405C30.0779 6 31 6.92206 31 8.05949V23.9405C31 25.0779 30.0779 26 28.9405 26H3.05949Z"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				d="M1 14L1 10L31 10V14L1 14Z"
				className="stroke-current"
				strokeWidth="2"
			/>
			<circle
				cx="26"
				cy="20"
				r="2.1"
				transform="rotate(-90 26 20)"
				className="stroke-current"
				strokeWidth="1.8"
			/>
			<circle
				cx="20"
				cy="20"
				r="2.1"
				transform="rotate(-90 20 20)"
				className="stroke-current"
				strokeWidth="1.8"
			/>
		</svg>
	);
};

export default PaymentCard;
