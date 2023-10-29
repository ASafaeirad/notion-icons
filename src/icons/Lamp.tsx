import type { SvgProps } from './SvgProps';
const SvgLamp = (props: SvgProps) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="lamp"
    {...props}
  >
    <path
      d="M8.711 18.04V16.88C6.411 15.49 4.521 12.78 4.521 9.89999C4.521 4.94999 9.071 1.06999 14.211 2.18999C16.471 2.68999 18.451 4.18999 19.481 6.25999C21.571 10.46 19.371 14.92 16.141 16.87V18.03C16.141 18.32 16.251 18.99 15.181 18.99H9.671C8.571 19 8.711 18.57 8.711 18.04Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.91101 22C11.201 21.35 13.621 21.35 15.911 22"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgLamp.fileName = 'lamp.svg';
export default SvgLamp;
