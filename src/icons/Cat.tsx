import type { SvgProps } from './SvgProps';
const SvgCat = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.0975 3.05901C17.2534 3.1025 17.3613 3.24438 17.3613 3.40606C17.3613 4.67545 18.9761 9.01836 17.8616 13.1739C17.8232 17.3354 17.6913 21.1977 15.3058 21.1977C15.3058 21.1977 14.5731 21.0586 13.486 20.9445C12.7315 20.8654 11.8064 20.7983 10.837 20.7983C9.70305 20.7983 8.64647 20.89 7.85354 20.9856C6.9919 21.0894 6.44157 21.1977 6.44157 21.1977C3.99696 21.1977 3.69246 17.3483 3.58645 13.1739C2.28648 9.15686 4 4.39805 4 3.15701C4 2.99111 4.11352 2.84656 4.27497 2.80716C4.43509 2.76754 4.60334 2.84362 4.68 2.99111L6 4.5C6 4.5 11.6239 4.94527 14.5 5L16.6926 3.21975C16.7762 3.08138 16.942 3.01517 17.0975 3.05901Z"
      stroke="currentColor"
      stroke-width={1.14967}
      stroke-linejoin="round"
    />
    <path
      d="M21.0337 8.57306C20.9866 8.60187 19.469 9.3779 19.469 11.4641C19.469 12.7111 20.2515 13.4636 20.624 14.164C20.9253 14.7312 21.5925 15.5532 21.5925 16.3519C21.5925 17.2516 20.8703 18.4634 19.8697 18.4634H17.5532"
      stroke="currentColor"
      stroke-width={1.14967}
      stroke-linecap="round"
    />
    <path
      d="M13.4759 20.6445L14.1993 16.2823"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <path
      d="M7.7809 20.6583L7.25037 16.2686"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <circle cx={8.42706} cy={9.25574} r={0.75} stroke="currentColor" />
    <circle cx={12.5876} cy={9.25574} r={0.75} stroke="currentColor" />
  </svg>
);
SvgCat.fileName = 'cat.svg';
export default SvgCat;
