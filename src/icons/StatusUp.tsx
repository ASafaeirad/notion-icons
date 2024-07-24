import type { SvgProps } from './SvgProps';
const SvgStatusUp = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.88 18.15V16.08" stroke="currentColor" stroke-linecap="round" />
    <path d="M12 18.15V14.01" stroke="currentColor" stroke-linecap="round" />
    <path d="M17.12 18.15V11.93" stroke="currentColor" stroke-linecap="round" />
    <path
      d="M17.12 5.84998L16.66 6.38998C14.11 9.36998 10.69 11.48 6.88 12.43"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M14.19 5.84998H17.12V8.76998"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
SvgStatusUp.fileName = 'status-up.svg';
export default SvgStatusUp;
