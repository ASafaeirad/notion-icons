import type { SvgProps } from './SvgProps';
const SvgJudge = (props: SvgProps) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="judge"
    {...props}
  >
    <path
      d="M20.4209 18.51L15.4709 13.56"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.471 13.56L11.931 17.1C11.151 17.88 9.88101 17.88 9.10101 17.1L4.861 12.86C4.081 12.08 4.081 10.81 4.861 10.03L11.931 2.96C12.711 2.18 13.981 2.18 14.761 2.96L19.001 7.20002C19.781 7.98002 19.781 9.25001 19.001 10.03L15.471 13.56Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.41101 21H8.41101"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.97095 7.92001L14.041 14.99"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgJudge.fileName = 'judge.svg';
export default SvgJudge;
