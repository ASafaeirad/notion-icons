import type { SvgProps } from './SvgProps';
const SvgAttach = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="attach"
    {...props}
  >
    <path
      d="M12.2 11.8L10.79 13.21C10.01 13.99 10.01 15.26 10.79 16.04C11.57 16.82 12.84 16.82 13.62 16.04L15.84 13.82C17.4 12.26 17.4 9.72999 15.84 8.15999C14.28 6.59999 11.75 6.59999 10.18 8.15999L7.76 10.58C6.42 11.92 6.42 14.09 7.76 15.43"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgAttach.fileName = 'attach.svg';
export default SvgAttach;
