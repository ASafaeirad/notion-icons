import type { SvgProps } from './SvgProps';
const SvgAreas = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="areas"
    {...props}
  >
    <path
      d="M2.45 14.97C3.52 18.41 6.4 21.06 9.98 21.79"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.05 10.98C2.56 5.93 6.82 2 12 2C17.18 2 21.44 5.94 21.95 10.98"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.01 21.8C17.58 21.07 20.45 18.45 21.54 15.02"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgAreas.fileName = 'areas.svg';
export default SvgAreas;
