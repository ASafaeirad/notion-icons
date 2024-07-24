import type { SvgProps } from './SvgProps';
const SvgRulerPen = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path d="M11.47 6H16.47" stroke="currentColor" stroke-linecap="round" />
    <path d="M11.47 18H15.47" stroke="currentColor" stroke-linecap="round" />
    <path
      d="M11.47 13.95L16.47 14"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path d="M11.47 10H14.47" stroke="currentColor" stroke-linecap="round" />
    <path
      d="M5.49003 2C3.86003 2 2.53003 3.33 2.53003 4.95V17.91C2.53003 18.36 2.72003 19.04 2.95003 19.43L3.77003 20.79C4.71003 22.36 6.26003 22.36 7.20003 20.79L8.02003 19.43C8.25003 19.04 8.44003 18.36 8.44003 17.91V4.95C8.44003 3.33 7.11003 2 5.49003 2Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path d="M8.44003 7H2.53003" stroke="currentColor" stroke-linecap="round" />
  </svg>
);
SvgRulerPen.fileName = 'ruler-pen.svg';
export default SvgRulerPen;
