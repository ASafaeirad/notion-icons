import type { SvgProps } from './SvgProps';
const SvgTimer = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.24 2H8.75998C4.99998 2 4.70998 5.38 6.73998 7.22L17.26 16.78C19.29 18.62 19 22 15.24 22H8.75998C4.99998 22 4.70998 18.62 6.73998 16.78L17.26 7.22C19.29 5.38 19 2 15.24 2Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
SvgTimer.fileName = 'timer.svg';
export default SvgTimer;
