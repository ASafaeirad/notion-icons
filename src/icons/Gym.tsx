import type { SvgProps } from './SvgProps';
const SvgGym = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="gym"
    {...props}
  >
    <path
      d="M9.32 13.28H12.41V20.48C12.41 21.54 13.73 22.04 14.43 21.24L22 12.64C22.66 11.89 22.13 10.72 21.13 10.72H18.04V3.52003C18.04 2.46003 16.72 1.96003 16.02 2.76003L8.45 11.36C7.8 12.11 8.33 13.28 9.32 13.28Z"
      stroke="#AEABA4"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 4H1.5"
      stroke="#AEABA4"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 20H1.5"
      stroke="#AEABA4"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 12H1.5"
      stroke="#AEABA4"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgGym.fileName = 'gym.svg';
export default SvgGym;
