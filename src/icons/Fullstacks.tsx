import type { SvgProps } from './SvgProps';
const SvgFullstacks = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.77307 14.1355C4.54677 14.5275 4.61195 15.0226 4.93199 15.3427L11.2785 21.6891C11.669 22.0797 12.3022 22.0797 12.6927 21.6891L19.068 15.3138C19.388 14.9938 19.4532 14.4987 19.2269 14.1067L12.8743 3.10376C12.4894 2.43709 11.5272 2.43709 11.1423 3.10376L4.77307 14.1355ZM12.8743 8.8534C12.4894 8.18673 11.5272 8.18673 11.1423 8.8534L8.3657 13.6626C8.1394 14.0545 8.20458 14.5496 8.52462 14.8697L11.2785 17.6235C11.669 18.014 12.3022 18.014 12.6927 17.6235L15.4753 14.8409C15.7954 14.5208 15.8606 14.0257 15.6343 13.6337L12.8743 8.8534Z"
      stroke="currentColor"
    />
  </svg>
);
SvgFullstacks.fileName = 'fullstacks.svg';
export default SvgFullstacks;
