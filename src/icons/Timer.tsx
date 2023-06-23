import type { SvgProps } from './SvgProps';
const SvgTimer = (props: SvgProps) => (
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
      d="M15.651 2h-6.48c-3.76 0-4.05 3.38-2.02 5.22l10.52 9.56c2.03 1.84 1.74 5.22-2.02 5.22h-6.48c-3.76 0-4.05-3.38-2.02-5.22l10.52-9.56c2.03-1.84 1.74-5.22-2.02-5.22Z"
    />
  </svg>
);
export default SvgTimer;
