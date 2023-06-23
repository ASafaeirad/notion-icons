import type { SvgProps } from './SvgProps';
const SvgStatusUp = (props: SvgProps) => (
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
      d="M6.88 18.15v-2.07M12 18.15v-4.14M17.12 18.15v-6.22M17.12 5.85l-.46.54a18.882 18.882 0 0 1-9.78 6.04"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.19 5.85h2.93v2.92"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
    />
  </svg>
);
export default SvgStatusUp;
