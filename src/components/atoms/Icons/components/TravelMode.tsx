import { DefaultProps } from "../types";

interface TravelModeProps extends DefaultProps {}

const TravelMode: React.FC<TravelModeProps> = ({ width, height }) => {
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
				d="M24.4832 29.7129L26.7459 27.4501L23.3518 12.7423L29.5744 6.51978C30.5134 5.58074 30.5134 4.0647 29.5744 3.12567C28.6353 2.18663 27.1193 2.18663 26.1803 3.12567L19.9577 9.3482L5.24989 5.95409L2.98715 8.21683L14.8665 14.4394L8.64401 20.6619L4.68421 20.0962L2.98715 21.7933L8.07832 24.6217L10.9067 29.7129L12.6038 28.0158L12.0381 24.056L18.2607 17.8335L24.4832 29.7129Z"
				className="stroke-current"
				strokeWidth="2"
			/>
		</svg>
	);
};

export default TravelMode;
