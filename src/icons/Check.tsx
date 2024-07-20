import type { SvgProps } from './SvgProps';
const SvgCheck = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="check"
    {...props}
  >
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="#AEABA4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.10065 12.3169L10.6006 14.8169L15.8994 9.18304"
      stroke="#AEABA4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgCheck.fileName = 'check.svg';
export default SvgCheck;
