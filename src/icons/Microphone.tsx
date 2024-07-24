import type { SvgProps } from './SvgProps';
const SvgMicrophone = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8V13C6 16.31 8.69 19 12 19Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.10999 7.47999C10.89 6.82999 12.83 6.82999 14.61 7.47999"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.03 10.48C11.23 10.15 12.5 10.15 13.7 10.48"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
SvgMicrophone.fileName = 'microphone.svg';
export default SvgMicrophone;
