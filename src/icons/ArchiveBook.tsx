import type { SvgProps } from './SvgProps';
const SvgArchiveBook = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15.5 2v7.86c0 .44-.52.66-.84.37l-2.32-2.14a.496.496 0 0 0-.68 0l-2.32 2.14c-.32.29-.84.07-.84-.37V2h7ZM13.25 14h4.25M9 18h8.5"
    />
  </svg>
);
export default SvgArchiveBook;
