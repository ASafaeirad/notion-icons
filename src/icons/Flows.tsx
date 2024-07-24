import type { SvgProps } from './SvgProps';
const SvgFlows = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 13.1L4.5 11.6C6.04 10.68 7.96 10.68 9.5 11.6C11.04 12.52 12.96 12.52 14.5 11.6C16.04 10.68 17.96 10.68 19.5 11.6L22 13.1"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 6.09003L19.5 4.59003C17.96 3.67003 16.04 3.67003 14.5 4.59003C12.96 5.51003 11.04 5.51003 9.5 4.59003C7.96 3.67003 6.04 3.67003 4.5 4.59003L2 6.09003"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 20.1L4.5 18.6C6.04 17.68 7.96 17.68 9.5 18.6C11.04 19.52 12.96 19.52 14.5 18.6C16.04 17.68 17.96 17.68 19.5 18.6L22 20.1"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
SvgFlows.fileName = 'flows.svg';
export default SvgFlows;
