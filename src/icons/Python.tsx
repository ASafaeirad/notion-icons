import type { SvgProps } from './SvgProps';
const SvgPython = (props: SvgProps) => (
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
      strokeLinejoin="round"
      d="M7.6 7.6V3.9c0-.8.6-1.5 1.4-1.7 2-.3 4-.3 6 0 .8.1 1.4.8 1.4 1.7v5.9c0 1.2-1 2.2-2.2 2.2H9.8c-1.2 0-2.2 1-2.2 2.2v5.9c0 .8.6 1.5 1.4 1.7 2 .3 4 .3 6 0 .8-.1 1.4-.8 1.4-1.7v-3.7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.4 7.6h3.7c.8 0 1.5.6 1.7 1.4.3 2 .3 4 0 6-.1.8-.8 1.4-1.7 1.4H12M12 7.6H3.9c-.8 0-1.5.6-1.7 1.4-.3 2-.3 4 0 6 .1.8.8 1.4 1.7 1.4h3.7M10 4.85v0M14 19.15v0"
    />
  </svg>
);
export default SvgPython;
