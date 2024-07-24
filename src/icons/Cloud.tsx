import type { SvgProps } from './SvgProps';
const SvgCloud = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.26998 13.01C6.73998 12.74 6.14998 12.6 5.54998 12.6C0.869978 12.93 0.869978 19.74 5.54998 20.07H16.64C17.99 20.08 19.29 19.58 20.28 18.67C23.57 15.8 21.81 10.03 17.48 9.48C15.92 0.110001 2.38998 3.67 5.59998 12.6"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.85 9.92001C16.37 9.66001 16.94 9.52001 17.52 9.51001"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
SvgCloud.fileName = 'cloud.svg';
export default SvgCloud;
