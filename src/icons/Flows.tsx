import type { SvgProps } from './SvgProps';
const SvgFlows = (props: SvgProps) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="flows"
    {...props}
  >
    <path
      d="M2.41101 13.1L4.91101 11.6C6.45101 10.68 8.37101 10.68 9.91101 11.6C11.451 12.52 13.371 12.52 14.911 11.6C16.451 10.68 18.371 10.68 19.911 11.6L22.411 13.1"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.411 6.09L19.911 4.59C18.371 3.67 16.451 3.67 14.911 4.59C13.371 5.51 11.451 5.51 9.91101 4.59C8.37101 3.67 6.45101 3.67 4.91101 4.59L2.41101 6.09"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.41101 20.1L4.91101 18.6C6.45101 17.68 8.37101 17.68 9.91101 18.6C11.451 19.52 13.371 19.52 14.911 18.6C16.451 17.68 18.371 17.68 19.911 18.6L22.411 20.1"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgFlows.fileName = 'flows.svg';
export default SvgFlows;
