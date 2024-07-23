import type { SvgProps } from './SvgProps';
const SvgMenuBoard = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="menu-board"
    {...props}
  >
    <path
      d="M21.93 6.76001L18.56 20.29C18.32 21.3 17.42 22 16.38 22H3.24001C1.73001 22 0.650023 20.5199 1.10002 19.0699L5.31001 5.55005C5.60001 4.61005 6.47003 3.95996 7.45003 3.95996H19.75C20.7 3.95996 21.49 4.53997 21.82 5.33997C22.01 5.76997 22.05 6.26001 21.93 6.76001Z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
    <path
      d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.67999 6.38L10.72 2.06006"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.38 6.39001L17.32 2.05005"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.70001 12H15.7"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.70001 16H14.7"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgMenuBoard.fileName = 'menu-board.svg';
export default SvgMenuBoard;
