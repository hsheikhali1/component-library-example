import { DefaultProps } from "../types";

interface WarningProps extends DefaultProps {}

const Warning: React.FC<WarningProps> = ({ width, height }) => {
	return (
		<svg
			width={width ?? 32}
			height={height ?? 32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.7832 4.21869L28.8945 26.0942C29.3948 27.079 29.0019 28.2829 28.0171 28.7831C27.7365 28.9256 27.4261 28.9999 27.1114 28.9999H4.88863C3.78406 28.9999 2.88863 28.1045 2.88863 26.9999C2.88863 26.6852 2.96292 26.3748 3.10547 26.0942L14.2168 4.21869C14.7171 3.23388 15.9209 2.84104 16.9057 3.34126C17.2838 3.53332 17.5911 3.84059 17.7832 4.21869Z"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.199 11.9901C14.0925 10.9246 14.9292 10 16 10C17.0708 10 17.9075 10.9246 17.801 11.9901L17.0081 19.9188C17.0035 19.9649 16.9647 20 16.9184 20H15.0816C15.0353 20 14.9965 19.9649 14.9919 19.9188L14.199 11.9901Z"
				className="fill-current"
			/>
			<circle cx="16" cy="24" r="2" className="fill-current" />
		</svg>
	);
};

export default Warning;
