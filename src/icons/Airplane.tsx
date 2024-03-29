import type { SvgProps } from './SvgProps';
const SvgAirplane = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="airplane"
    {...props}
  >
    <path
      d="M9.86 19L11.54 17.58C11.79 17.37 12.21 17.37 12.47 17.58L14.14 19C14.53 19.2 15.01 19 15.15 18.58L15.47 17.62C15.55 17.39 15.47 17.05 15.3 16.88L13.66 15.23C13.54 15.11 13.45 14.88 13.45 14.72V12.87C13.45 12.45 13.76 12.25 14.15 12.41L17.5 13.85C18.05 14.09 18.51 13.79 18.51 13.19V12.26C18.51 11.78 18.15 11.22 17.7 11.03L13.76 9.33C13.59 9.26 13.46 9.05 13.46 8.87V6.8C13.46 6.12 12.96 5.32 12.36 5.01C12.14 4.9 11.89 4.9 11.67 5.01C11.06 5.31 10.57 6.12 10.57 6.8V8.87C10.57 9.05 10.43 9.26 10.27 9.33L6.33 11.03C5.89 11.22 5.52 11.78 5.52 12.26V13.19C5.52 13.79 5.97 14.09 6.53 13.85L9.88 12.41C10.26 12.24 10.58 12.45 10.58 12.87V14.72C10.58 14.89 10.48 15.12 10.37 15.23L8.7 16.87C8.53 17.04 8.45 17.38 8.53 17.61L8.85 18.57C8.99 19 9.46 19.2 9.86 19Z"
      stroke="currentColor"
      strokeWidth={0.75}
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
SvgAirplane.fileName = 'airplane.svg';
export default SvgAirplane;
