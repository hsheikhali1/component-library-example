import { DefaultProps } from "../types";

interface LockWifiProps extends DefaultProps {}

const LockWifi: React.FC<LockWifiProps> = ({ width, height }) => {
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
				d="M16 13C13.2386 13 11 15.2386 11 18V21H13V18C13 16.3431 14.3431 15 16 15C17.6569 15 19 16.3431 19 18V21H21V18C21 15.2386 18.7614 13 16 13Z"
				className="fill-current"
			/>
			<path
				d="M16.0002 8C20.9678 8 25.1778 11.4713 25.9887 16.1402C26.0629 16.5674 25.7714 17 25.0935 17C24.4131 17 24.0536 16.6319 23.8524 15.9877L23.8117 15.8455C22.9118 12.4181 19.7072 9.97872 16.0002 9.97872C12.3802 9.97872 9.2393 12.3049 8.2559 15.606L8.18935 15.8434C7.9974 16.5737 7.63316 17 6.90693 17C6.23089 17 5.93775 16.5673 6.01095 16.1447C6.81987 11.4737 11.031 8 16.0002 8Z"
				className="fill-current"
			/>
			<path
				d="M16.0014 2C24.2263 2 31.1029 8.08124 31.9955 16.032C32.0458 16.4798 31.671 17 31.0072 17C30.3126 17 29.8728 16.4682 29.7835 15.8494C28.8181 9.15518 22.9559 4.1212 16.0014 4.1212C9.0467 4.1212 3.18448 9.15531 2.21917 15.8496C2.13071 16.4631 1.68737 16.997 0.992003 17C0.330691 17.0028 -0.0436885 16.4927 0.00407855 16.0601C0.883472 8.09664 7.76575 2 16.0014 2Z"
				className="fill-current"
			/>
			<rect
				x="9"
				y="20"
				width="14"
				height="9"
				rx="1"
				className="stroke-current"
				strokeWidth="2"
			/>
		</svg>
	);
};

export default LockWifi;
