import type { SvgProps } from './SvgProps';
const SvgLines = (props: SvgProps) => (
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
      d="M3.411 4.5h18M3.411 9.5h18M3.411 14.5h18M3.411 19.5h18"
    />
  </svg>
);
export default SvgLines;
