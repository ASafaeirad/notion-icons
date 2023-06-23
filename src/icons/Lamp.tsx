import type { SvgProps } from './SvgProps';
const SvgLamp = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.711 18.04v-1.16c-2.3-1.39-4.19-4.1-4.19-6.98 0-4.95 4.55-8.83 9.69-7.71 2.26.5 4.24 2 5.27 4.07 2.09 4.2-.11 8.66-3.34 10.61v1.16c0 .29.11.96-.96.96h-5.51c-1.1.01-.96-.42-.96-.95ZM8.911 22c2.29-.65 4.71-.65 7 0"
    />
  </svg>
);
export default SvgLamp;
