import type { SvgProps } from './SvgProps';
const SvgBox = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="box"
    {...props}
  >
    <path
      d="M3.16998 7.44L12 12.55L20.77 7.47"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 21.61V12.54"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.93001 2.47998L4.59001 5.43998C3.38001 6.10998 2.39001 7.78998 2.39001 9.16998V14.82C2.39001 16.2 3.38001 17.88 4.59001 18.55L9.93001 21.52C11.07 22.15 12.94 22.15 14.08 21.52L19.42 18.55C20.63 17.88 21.62 16.2 21.62 14.82V9.16998C21.62 7.78998 20.63 6.10998 19.42 5.43998L14.08 2.46998C12.93 1.83998 11.07 1.83998 9.93001 2.47998Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgBox.fileName = 'box.svg';
export default SvgBox;
