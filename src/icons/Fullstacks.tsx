import type { SvgProps } from './SvgProps';
const SvgFullstacks = (props: SvgProps) => (
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
      d="M4.773 14.136a1 1 0 0 0 .159 1.207l6.346 6.346a1 1 0 0 0 1.415 0l6.375-6.375a1 1 0 0 0 .159-1.207L12.874 3.104a1 1 0 0 0-1.732 0L4.773 14.136Zm8.101-5.283a1 1 0 0 0-1.732 0l-2.776 4.81a1 1 0 0 0 .159 1.207l2.753 2.754a1 1 0 0 0 1.415 0l2.782-2.783a1 1 0 0 0 .16-1.207l-2.76-4.78Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFullstacks;
