import type { SvgProps } from './SvgProps';
const SvgLife = (props: SvgProps) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="life"
    {...props}
  >
    <path
      d="M21.361 14.55L14.971 20.94C13.571 22.34 11.271 22.34 9.86104 20.94L3.47102 14.55C2.07102 13.15 2.07102 10.85 3.47102 9.44001L9.86104 3.05C11.261 1.65 13.561 1.65 14.971 3.05L21.361 9.44001C22.761 10.85 22.761 13.15 21.361 14.55Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66101 6.25L18.161 17.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.161 6.25L6.66101 17.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgLife.fileName = 'life.svg';
export default SvgLife;
