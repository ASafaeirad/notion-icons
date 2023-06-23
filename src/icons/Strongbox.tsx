import type { SvgProps } from './SvgProps';
const SvgStrongbox = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.411 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.411 19h8c2 0 3-1 3-3V8c0-2-1-3-3-3h-8c-2 0-3 1-3 3v8c0 2 1 3 3 3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.411 9.5h2.48a2.5 2.5 0 0 1 0 5h-2.48M19.411 9.99h-3M19.411 14h-3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7.611 12h.1"
    />
  </svg>
);
export default SvgStrongbox;
