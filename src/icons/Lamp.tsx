import type { SvgProps } from './SvgProps';
const SvgLamp = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="lamp"
    {...props}
  >
    <path
      d="M8.29999 18.04V16.88C5.99999 15.49 4.10999 12.78 4.10999 9.89999C4.10999 4.94999 8.65999 1.06999 13.8 2.18999C16.06 2.68999 18.04 4.18999 19.07 6.25999C21.16 10.46 18.96 14.92 15.73 16.87V18.03C15.73 18.32 15.84 18.99 14.77 18.99H9.25999C8.15999 19 8.29999 18.57 8.29999 18.04Z"
      stroke="#AEABA4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22"
      stroke="#AEABA4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgLamp.fileName = 'lamp.svg';
export default SvgLamp;
