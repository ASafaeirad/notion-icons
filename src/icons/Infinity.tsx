import type { SvgProps } from './SvgProps';
const SvgInfinity = (props: SvgProps) => (
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
      d="M10.18 9.32a4.474 4.474 0 0 0-3.64-1.87c-2.51 0-4.55 2.04-4.55 4.55s2.04 4.55 4.55 4.55c1.69 0 3.26-.89 4.13-2.34L12 12l1.32-2.21a4.821 4.821 0 0 1 4.13-2.34C19.96 7.45 22 9.49 22 12s-2.04 4.55-4.55 4.55c-1.5 0-2.81-.74-3.64-1.87"
    />
  </svg>
);
export default SvgInfinity;
