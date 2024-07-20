import type { SvgProps } from './SvgProps';
const SvgCrown = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="crown"
    {...props}
  >
    <path
      d="M2 15.29V5.71002C2 4.38002 2.77 4.06002 3.71 5.00002L6.3 8.59002C6.69 8.98002 7.33 8.98002 7.71 8.59002L11.29 4.00002C11.68 3.61002 12.32 3.61002 12.7 4.00002L16.29 8.59002C16.68 8.98002 17.32 8.98002 17.7 8.59002L20.29 5.00002C21.23 4.06002 22 4.38002 22 5.71002V15.3C22 18.3 20 20.3 17 20.3H7C4.24 20.29 2 18.05 2 15.29Z"
      stroke="#AEABA4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgCrown.fileName = 'crown.svg';
export default SvgCrown;
