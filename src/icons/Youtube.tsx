import type { SvgProps } from './SvgProps';
const SvgYoutube = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m11.4 9.5 2.5 1.5c.9.6.9 1.5 0 2.1l-2.5 1.5c-1 .6-1.8.1-1.8-1v-3c0-1.3.8-1.7 1.8-1.1Z"
    />
  </svg>
);
export default SvgYoutube;
