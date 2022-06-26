import { DefaultProps } from "../types";

interface LockProps extends DefaultProps {}

const Lock: React.FC<LockProps> = ({ width, height }) => {
	return (
		<svg
			width={width ?? 32}
			height={height ?? 32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="16"
				cy="20"
				r="11"
				className="stroke-current"
				strokeWidth="2"
			/>
			<path
				d="M25.2929 5.20714L26.7071 3.79292"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="square"
			/>
			<mask id="path-3-inside-1_265_11500" fill="white">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M18.9708 20.6785C19.6105 19.9694 20 19.0302 20 18C20 15.7909 18.2091 14 16 14C13.7909 14 12 15.7909 12 18C12 19.0144 12.3776 19.9407 13 20.6458V22.102V24C13 25.6569 14.3431 27 16 27C17.6569 27 19 25.6569 19 24V22.102L18.9708 20.6785Z"
				/>
			</mask>
			<path
				d="M18.9708 20.6785L17.4859 19.3388L16.955 19.9272L16.9713 20.7195L18.9708 20.6785ZM13 20.6458H15V19.8894L14.4995 19.3224L13 20.6458ZM19 22.102H21V22.0816L20.9996 22.0611L19 22.102ZM20.4558 22.0182C21.4141 20.956 22 19.5441 22 18H18C18 18.5163 17.807 18.9829 17.4859 19.3388L20.4558 22.0182ZM22 18C22 14.6863 19.3137 12 16 12V16C17.1046 16 18 16.8954 18 18H22ZM16 12C12.6863 12 10 14.6863 10 18H14C14 16.8954 14.8954 16 16 16V12ZM10 18C10 19.5203 10.568 20.9128 11.5005 21.9693L14.4995 19.3224C14.1872 18.9686 14 18.5086 14 18H10ZM15 22.102V20.6458H11V22.102H15ZM15 24V22.102H11V24H15ZM16 25C15.4477 25 15 24.5523 15 24H11C11 26.7614 13.2386 29 16 29V25ZM17 24C17 24.5523 16.5523 25 16 25V29C18.7614 29 21 26.7614 21 24H17ZM17 22.102V24H21V22.102H17ZM16.9713 20.7195L17.0004 22.143L20.9996 22.0611L20.9704 20.6375L16.9713 20.7195Z"
				className="fill-current"
				fill="#0572EC"
				mask="url(#path-3-inside-1_265_11500)"
			/>
			<path
				d="M25.05 9H27.45"
				className="stroke-current"
				strokeWidth="2"
				strokeLinecap="square"
			/>
			<path
				d="M16 1C12.6863 1 10 3.68629 10 7V10.6054C11.765 9.58437 13.8143 9 16 9C18.1857 9 20.235 9.58437 22 10.6054V7C22 3.68629 19.3137 1 16 1Z"
				className="stroke-current"
				strokeWidth="2"
			/>
		</svg>
	);
};

export default Lock;
