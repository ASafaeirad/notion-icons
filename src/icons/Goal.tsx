import type { SvgProps } from './SvgProps';
const SvgGoal = (props: SvgProps) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18.19a6.19 6.19 0 1 0 0-12.38 6.19 6.19 0 0 0 0 12.38Z"
    />
  </svg>
);
export default SvgGoal;
