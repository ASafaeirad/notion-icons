import type { SvgProps } from './SvgProps';
const SvgTwoCircles = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="two-circles"
    {...props}
  >
    <path
      d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z"
      stroke="#AEABA4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 16.23C14.3362 16.23 16.23 14.3362 16.23 12C16.23 9.66386 14.3362 7.77002 12 7.77002C9.66382 7.77002 7.76999 9.66386 7.76999 12C7.76999 14.3362 9.66382 16.23 12 16.23Z"
      stroke="#AEABA4"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgTwoCircles.fileName = 'two-circles.svg';
export default SvgTwoCircles;
