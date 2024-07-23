import type { SvgProps } from './SvgProps';
const SvgTelescope = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="telescope"
    {...props}
  >
    <path
      d="M15.03 10.77L20.69 6.97998C21.26 6.59998 21.41 5.81998 21.03 5.25998L19.21 2.54996C18.83 1.97996 18.05 1.82996 17.49 2.20996L11.83 5.99997L15.03 10.77Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.1739 6.4792L7.39618 9.67908L9.95608 13.5012L14.7338 10.3013L12.1739 6.4792Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83001 15.9L9.78001 13.26L7.54001 9.91998L3.59001 12.56C3.13001 12.87 3.01001 13.49 3.32001 13.95L4.45001 15.63C4.75001 16.08 5.37001 16.2 5.83001 15.9Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.05 12.2L7.56 22"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12.2L16.44 22"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgTelescope.fileName = 'telescope.svg';
export default SvgTelescope;
