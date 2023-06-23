import type { SvgProps } from './SvgProps';
const SvgLinux = (props: SvgProps) => (
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
      strokeWidth={0.956}
      d="M16.301 16.78c-.764 0-.956 4.587-.956 4.778 0 .192-.286 1.434.956 1.434 1.243 0 1.72-.765 2.39-1.434.669-.669 2.39-.764 2.39-1.433 0-.67-.956-.956-1.434-1.434s.287-1.912-.478-1.912m-16.25 4.302a5.05 5.05 0 0 0 0-2.39c0-.765 1.625-.67 1.912-.956.287-.287.191-1.434.956-1.434.765 0 1.243 2.485 2.39 3.346 1.72 1.147 1.529 3.345.478 3.345-1.052 0-2.294-.86-2.868-.956-.573-.095-2.867-.095-2.867-.956Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.956}
      d="M13.912 7.22a18.463 18.463 0 0 1 2.39 9.56s-.096 1.433.955 1.433 1.912.191 1.912-2.39c0-4.874-3.824-6.404-3.824-8.602 0-1.434.192-6.213-3.345-6.213-1.625 0-2.868.573-2.868 5.257 0 2.007-1.242 3.537-1.911 5.257a21.152 21.152 0 0 0-1.434 4.78"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.956}
      d="M11.522 5.787c-.956 0-2.39.86-2.39 1.434 0 .573 1.53 1.434 1.912 1.434.383 0 2.868-1.147 2.868-1.434 0-.956-2.39-1.434-2.39-1.434ZM9.228 20.89c.956.19 4.588.573 6.309-1.339m-6.405 3.25c.383-.478 2.103-.765 2.868-.765h3.25"
    />
  </svg>
);
export default SvgLinux;