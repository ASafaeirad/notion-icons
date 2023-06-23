import type { SvgProps } from './SvgProps';
const SvgGlobal = (props: SvgProps) => (
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
      d="M12.411 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.411 3h1a28.424 28.424 0 0 0 0 18h-1M15.411 3a28.424 28.424 0 0 1 0 18"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.411 16v-1a28.424 28.424 0 0 0 18 0v1M3.411 9a28.424 28.424 0 0 1 18 0"
    />
  </svg>
);
export default SvgGlobal;
