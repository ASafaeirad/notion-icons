import type { SvgProps } from './SvgProps';
const SvgFlows = (props: SvgProps) => (
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
      d="m2.411 13.1 2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5M22.411 6.09l-2.5-1.5a4.874 4.874 0 0 0-5 0c-1.54.92-3.46.92-5 0a4.874 4.874 0 0 0-5 0l-2.5 1.5M2.411 20.1l2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5"
    />
  </svg>
);
export default SvgFlows;
