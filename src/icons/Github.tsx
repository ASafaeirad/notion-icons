import type { SvgProps } from './SvgProps';
const SvgGithub = (props: SvgProps) => (
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
      strokeWidth={0.952}
      d="M9.383 19.151c-4.76 1.428-4.76-2.379-6.663-2.855m13.325 5.711v-3.684a3.207 3.207 0 0 0-.894-2.484c2.988-.333 6.13-1.466 6.13-6.663a5.178 5.178 0 0 0-1.428-3.569 4.826 4.826 0 0 0-.086-3.588s-1.123-.333-3.722 1.408a12.735 12.735 0 0 0-6.663 0C6.785 1.686 5.662 2.02 5.662 2.02a4.826 4.826 0 0 0-.086 3.588 5.178 5.178 0 0 0-1.428 3.598c0 5.159 3.141 6.291 6.13 6.663a3.208 3.208 0 0 0-.894 2.455v3.684"
    />
  </svg>
);
export default SvgGithub;
