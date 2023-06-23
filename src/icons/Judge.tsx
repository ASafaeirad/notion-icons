import type { SvgProps } from './SvgProps';
const SvgJudge = (props: SvgProps) => (
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
      strokeMiterlimit={10}
      d="m20.42 18.51-4.95-4.95M15.471 13.56l-3.54 3.54c-.78.78-2.05.78-2.83 0l-4.24-4.24c-.78-.78-.78-2.05 0-2.83l7.07-7.07c.78-.78 2.05-.78 2.83 0l4.24 4.24c.78.78.78 2.05 0 2.83l-3.53 3.53ZM2.411 21h6M6.971 7.92l7.07 7.07"
    />
  </svg>
);
export default SvgJudge;
