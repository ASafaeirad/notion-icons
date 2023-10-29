import type { SvgProps } from './SvgProps';
const SvgTimer = (props: SvgProps) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="timer"
    {...props}
  >
    <path
      d="M15.651 2H9.17099C5.41099 2 5.12099 5.38 7.15099 7.22L17.671 16.78C19.701 18.62 19.411 22 15.651 22H9.17099C5.41099 22 5.12099 18.62 7.15099 16.78L17.671 7.22C19.701 5.38 19.411 2 15.651 2Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgTimer.fileName = 'timer.svg';
export default SvgTimer;
