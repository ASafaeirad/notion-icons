import type { SvgProps } from './SvgProps';
const SvgAward = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.26001 11.02V15.99C4.26001 17.81 4.26001 17.81 5.98001 18.97L10.71 21.7C11.42 22.11 12.58 22.11 13.29 21.7L18.02 18.97C19.74 17.81 19.74 17.81 19.74 15.99V11.02C19.74 9.2 19.74 9.2 18.02 8.04L13.29 5.31C12.58 4.9 11.42 4.9 10.71 5.31L5.98001 8.04C4.26001 9.2 4.26001 9.2 4.26001 11.02Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.5 7.63V5C17.5 3 16.5 2 14.5 2H9.5C7.5 2 6.5 3 6.5 5V7.56"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.63 10.99L13.2 11.88C13.29 12.02 13.49 12.16 13.64 12.2L14.66 12.46C15.29 12.62 15.46 13.16 15.05 13.66L14.38 14.47C14.28 14.6 14.2 14.83 14.21 14.99L14.27 16.04C14.31 16.69 13.85 17.02 13.25 16.78L12.27 16.39C12.12 16.33 11.87 16.33 11.72 16.39L10.74 16.78C10.14 17.02 9.67999 16.68 9.71999 16.04L9.77999 14.99C9.78999 14.83 9.70999 14.59 9.60999 14.47L8.93999 13.66C8.52999 13.16 8.69999 12.62 9.32999 12.46L10.35 12.2C10.51 12.16 10.71 12.01 10.79 11.88L11.36 10.99C11.72 10.45 12.28 10.45 12.63 10.99Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
SvgAward.fileName = 'award.svg';
export default SvgAward;
