import type { SvgProps } from './SvgProps';
const SvgGlass = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.16001 22C3.98001 22 3.14001 19.47 4.50001 16.39L8.75001 6.74H8.45001C7.80001 6.74 7.20001 6.48 6.77001 6.05C6.33001 5.62 6.07001 5.02 6.07001 4.37C6.07001 3.07 7.13001 2 8.44001 2H15.55C16.21 2 16.8 2.27 17.23 2.7C17.79 3.26 18.07 4.08 17.86 4.95C17.59 6.03 16.55 6.74 15.44 6.74H15.28L19.5 16.4C20.85 19.48 19.97 22 15.83 22H8.16001Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.94 13.12C5.94 13.12 9 13 12 14C15 15 17.83 13.11 17.83 13.11"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
SvgGlass.fileName = 'glass.svg';
export default SvgGlass;
