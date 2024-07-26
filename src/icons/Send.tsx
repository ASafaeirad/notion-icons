import type { SvgProps } from './SvgProps';
const SvgSend = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.2825 6.20297L14.7725 3.37297C18.5825 2.10297 20.6525 4.18297 19.3925 7.99297L16.5625 16.483C14.6625 22.193 11.5425 22.193 9.6425 16.483L8.8025 13.963L6.2825 13.123C0.5725 11.223 0.5725 8.11297 6.2825 6.20297Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.99249 13.533L12.5725 9.94299"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
SvgSend.fileName = 'send.svg';
export default SvgSend;
