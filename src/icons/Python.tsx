import type { SvgProps } from './SvgProps';
const SvgPython = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="python"
    {...props}
  >
    <path
      d="M7.6 7.6V3.9C7.6 3.1 8.2 2.4 9 2.2C11 1.9 13 1.9 15 2.2C15.8 2.3 16.4 3 16.4 3.9V9.8C16.4 11 15.4 12 14.2 12H9.8C8.6 12 7.6 13 7.6 14.2V20.1C7.6 20.9 8.2 21.6 9 21.8C11 22.1 13 22.1 15 21.8C15.8 21.7 16.4 21 16.4 20.1V16.4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.4 7.6H20.1C20.9 7.6 21.6 8.2 21.8 9C22.1 11 22.1 13 21.8 15C21.7 15.8 21 16.4 20.1 16.4H12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7.6H3.9C3.1 7.6 2.4 8.2 2.2 9C1.9 11 1.9 13 2.2 15C2.3 15.8 3 16.4 3.9 16.4H7.6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 4.85V4.85"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 19.15V19.15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgPython.fileName = 'python.svg';
export default SvgPython;
