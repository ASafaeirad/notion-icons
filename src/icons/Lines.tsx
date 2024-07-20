import type { SvgProps } from './SvgProps';
const SvgLines = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="lines"
    {...props}
  >
    <path
      d="M3 4.5H21"
      stroke="#AEABA4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 9.5H21"
      stroke="#AEABA4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 14.5H21"
      stroke="#AEABA4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 19.5H21"
      stroke="#AEABA4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgLines.fileName = 'lines.svg';
export default SvgLines;
