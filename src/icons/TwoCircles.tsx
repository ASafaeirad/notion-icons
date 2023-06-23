import type { SvgProps } from './SvgProps';
const SvgTwoCircles = (props: SvgProps) => (
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
      d="M12.381 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12.411 16.23a4.23 4.23 0 1 0 0-8.46 4.23 4.23 0 0 0 0 8.46Z"
    />
  </svg>
);
export default SvgTwoCircles;
