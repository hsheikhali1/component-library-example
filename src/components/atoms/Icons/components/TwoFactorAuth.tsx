import { DefaultProps } from "../types";

interface TwoFactorAuthProps extends DefaultProps {}

const TwoFactorAuth: React.FC<TwoFactorAuthProps> = () => {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16 13.3794C13.2911 13.3794 11.3333 15.2905 11.3333 18.069V19.9139H13.1111V18.069C13.1111 17.2723 13.3423 16.5144 13.902 15.9564C14.4611 15.399 15.2162 15.1725 16 15.1725C16.779 15.1725 17.5415 15.3816 18.1066 15.9435C18.6727 16.5065 18.8889 17.2725 18.8889 18.069V19.9139H20.6667V18.069C20.6667 16.6249 20.1593 15.4652 19.3565 14.6679C18.5522 13.8692 17.3962 13.3794 16 13.3794Z"
				className="fill-current"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16 7.6897C10.8818 7.6897 6.62669 11.4296 5.80867 16.3434C5.79508 16.425 5.81334 16.6403 5.92312 16.8088C5.96907 16.8794 6.02722 16.9362 6.1064 16.9786C6.18541 17.0209 6.323 17.069 6.55555 17.069C6.979 17.069 7.1982 16.91 7.35166 16.7231C7.5366 16.498 7.64467 16.1975 7.70653 15.9527C8.64537 12.2371 11.999 9.4828 16 9.4828C20.0018 9.4828 23.356 12.2382 24.294 15.955C24.3562 16.2011 24.4633 16.5002 24.6471 16.7243C24.799 16.9094 25.0176 17.069 25.4444 17.069C25.6781 17.069 25.8159 17.0207 25.8946 16.9784C25.9734 16.9361 26.0312 16.8795 26.0769 16.8089C26.1861 16.6404 26.2047 16.4234 26.1905 16.3386C25.3705 11.4272 21.1165 7.6897 16 7.6897Z"
				className="fill-current"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16 2C7.75632 2 0.962667 8.26381 0.093899 16.3172C0.093899 16.3172 0.0933985 16.3219 0.0933915 16.3322C0.0933845 16.3423 0.093885 16.3561 0.0954768 16.3734C0.0987055 16.4083 0.105921 16.4519 0.118991 16.5008C0.145677 16.6007 0.191014 16.702 0.25276 16.7881C0.355262 16.9311 0.522681 17.0706 0.884453 17.069C1.24895 17.0674 1.46268 16.9217 1.61939 16.7285C1.80249 16.5028 1.89584 16.2146 1.91854 16.0535C2.89435 9.1263 8.82336 3.7931 16 3.7931C23.1766 3.7931 29.1055 9.12617 30.0814 16.0533C30.1045 16.2171 30.1979 16.5068 30.3801 16.7322C30.5353 16.9243 30.7467 17.069 31.1111 17.069C31.4721 17.069 31.6395 16.9285 31.7431 16.7813C31.8825 16.5832 31.9101 16.3538 31.903 16.2885C31.0212 8.24896 24.2339 2 16 2Z"
				className="fill-current"
			/>
			<rect
				x="9"
				y="20"
				width="14"
				height="10"
				rx="1"
				className="stoke-current"
				strokeWidth="2"
			/>
		</svg>
	);
};

export default TwoFactorAuth;