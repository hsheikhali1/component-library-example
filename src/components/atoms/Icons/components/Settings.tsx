import { DefaultProps } from "../types";

interface SettingsProps extends DefaultProps {}

const Settings: React.FC<SettingsProps> = ({ width, height }) => {
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
				d="M6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6ZM12 6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6C8 7.10457 8.89543 8 10 8C11.1046 8 12 7.10457 12 6Z"
				className="fill-current"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16 17C16 14.7909 17.7909 13 20 13C22.2091 13 24 14.7909 24 17C24 19.2091 22.2091 21 20 21C17.7909 21 16 19.2091 16 17ZM22 17C22 15.8954 21.1046 15 20 15C18.8954 15 18 15.8954 18 17C18 18.1046 18.8954 19 20 19C21.1046 19 22 18.1046 22 17Z"
				className="fill-current"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 27C5 24.7909 6.79086 23 9 23C11.2091 23 13 24.7909 13 27C13 29.2091 11.2091 31 9 31C6.79086 31 5 29.2091 5 27ZM11 27C11 25.8954 10.1046 25 9 25C7.89543 25 7 25.8954 7 27C7 28.1046 7.89543 29 9 29C10.1046 29 11 28.1046 11 27Z"
				className="fill-current"
			/>
			<path
				d="M3 6H6"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M17 6H29"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M23 17H29"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M3 27H6"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M3 17H13"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M16 27H29"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
};
export default Settings;
