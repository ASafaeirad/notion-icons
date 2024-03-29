import type { SvgProps } from './SvgProps';
const SvgFlash = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="flash"
    {...props}
  >
    <path
      d="M6.09001 13.28H9.18001V20.48C9.18001 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52C14.81 1.84 13.9 1.5 12.79 2.76L5.22001 11.36C4.30001 12.42 4.69001 13.28 6.09001 13.28Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgFlash.fileName = 'flash.svg';
export default SvgFlash;
