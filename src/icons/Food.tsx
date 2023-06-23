import type { SvgProps } from './SvgProps';
const SvgFood = (props: SvgProps) => (
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
      strokeWidth={0.833}
      d="M10.188 9.13c-.814.166-1.282.403-1.897.96-.599.542-.874.967-1.125 1.734"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={0.833}
      d="M20.911 15.09c0-3.988-2-8.333-8.222-8.333-6.222 0-8.39 4.345-8.39 8.334"
    />
    <circle
      cx={12.689}
      cy={5.924}
      r={0.417}
      stroke="currentColor"
      strokeWidth={0.833}
    />
    <path
      stroke="currentColor"
      strokeWidth={0.833}
      d="M3.497 15.507h17.89c.264 0 .461.243.407.502l-.448 2.152a.417.417 0 0 1-.408.332H4.073a.417.417 0 0 1-.402-.31l-.577-2.151a.417.417 0 0 1 .403-.525Z"
    />
  </svg>
);
export default SvgFood;
