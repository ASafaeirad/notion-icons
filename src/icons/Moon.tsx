import type { SvgProps } from './SvgProps';
const SvgMoon = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.03003 12.42C2.39003 17.57 6.76003 21.76 11.99 21.99C15.68 22.15 18.98 20.43 20.96 17.72C21.78 16.61 21.34 15.87 19.97 16.12C19.3 16.24 18.61 16.29 17.89 16.26C13 16.06 9.00003 11.97 8.98003 7.14002C8.97003 5.84002 9.24003 4.61002 9.73003 3.49002C10.27 2.25002 9.62003 1.66002 8.37003 2.19002C4.41003 3.86002 1.70003 7.85002 2.03003 12.42Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
SvgMoon.fileName = 'moon.svg';
export default SvgMoon;
