import type { SvgProps } from './SvgProps';
const SvgBath = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 12H4M4 12H20M4 12V14C4 15.138 4.583 17.248 6.745 17.841M20 12C20.2652 12 20.5196 11.8946 20.7071 11.7071C20.8946 11.5196 21 11.2652 21 11V7C21 6 20.4 4 18 4C15.6 4 15 6 15 7M20 12V14C20 15.138 19.417 17.248 17.255 17.841M15 7H13M15 7H17M17.255 17.841C16.8457 17.9502 16.4236 18.0037 16 18H8C7.532 18 7.115 17.943 6.745 17.841M17.255 17.841L18 20M6.745 17.841L6 20"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
SvgBath.fileName = 'bath.svg';
export default SvgBath;
