import type { SvgProps } from './SvgProps';
const SvgBrush = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.81 3.94C20.27 7.78 16.41 13 13.18 15.59L11.21 17.17C10.96 17.35 10.71 17.51 10.43 17.62C10.43 17.44 10.42 17.24 10.39 17.05C10.28 16.21 9.89999 15.43 9.22999 14.76C8.54999 14.08 7.71999 13.68 6.86999 13.57C6.66999 13.56 6.46999 13.54 6.26999 13.56C6.37999 13.25 6.54999 12.96 6.75999 12.72L8.31999 10.75C10.9 7.52 16.14 3.64 19.97 2.11C20.56 1.89 21.13 2.05 21.49 2.42C21.87 2.79 22.05 3.36 21.81 3.94Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.43 17.62C10.43 18.72 10.01 19.77 9.22 20.57C8.61 21.18 7.78 21.6 6.79 21.73L4.33 22C2.99 22.15 1.84 21.01 2 19.65L2.27 17.19C2.51 15 4.34 13.6 6.28 13.56C6.48 13.55 6.69 13.56 6.88 13.57C7.73 13.68 8.56 14.07 9.24 14.76C9.91 15.43 10.29 16.21 10.4 17.05C10.41 17.24 10.43 17.43 10.43 17.62Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.24 14.47C14.24 11.86 12.12 9.73999 9.51001 9.73999"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
SvgBrush.fileName = 'brush.svg';
export default SvgBrush;
