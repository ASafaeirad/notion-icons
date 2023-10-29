import type { SvgProps } from './SvgProps';
const SvgGlobal = (props: SvgProps) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="global"
    {...props}
  >
    <path
      d="M12.411 22C17.9339 22 22.411 17.5228 22.411 12C22.411 6.47715 17.9339 2 12.411 2C6.88816 2 2.41101 6.47715 2.41101 12C2.41101 17.5228 6.88816 22 12.411 22Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.41099 3H9.41099C7.46099 8.84 7.46099 15.16 9.41099 21H8.41099"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.411 3C17.361 8.84 17.361 15.16 15.411 21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.41101 16V15C9.25101 16.95 15.571 16.95 21.411 15V16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.41101 9.00001C9.25101 7.05001 15.571 7.05001 21.411 9.00001"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgGlobal.fileName = 'global.svg';
export default SvgGlobal;
