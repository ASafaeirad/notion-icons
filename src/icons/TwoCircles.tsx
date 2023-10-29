import type { SvgProps } from './SvgProps';
const SvgTwoCircles = (props: SvgProps) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="two-circles"
    {...props}
  >
    <path
      d="M12.381 22C17.9038 22 22.381 17.5228 22.381 12C22.381 6.47715 17.9038 2 12.381 2C6.85813 2 2.38098 6.47715 2.38098 12C2.38098 17.5228 6.85813 22 12.381 22Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.411 16.23C14.7472 16.23 16.641 14.3362 16.641 12C16.641 9.66382 14.7472 7.76999 12.411 7.76999C10.0749 7.76999 8.18103 9.66382 8.18103 12C8.18103 14.3362 10.0749 16.23 12.411 16.23Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgTwoCircles.fileName = 'two-circles.svg';
export default SvgTwoCircles;
