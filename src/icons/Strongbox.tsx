import type { SvgProps } from './SvgProps';
const SvgStrongbox = (props: SvgProps) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="strongbox"
    {...props}
  >
    <path
      d="M9.41101 22H15.411C20.411 22 22.411 20 22.411 15V9C22.411 4 20.411 2 15.411 2H9.41101C4.41101 2 2.41101 4 2.41101 9V15C2.41101 20 4.41101 22 9.41101 22Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.41101 19H16.411C18.411 19 19.411 18 19.411 16V8C19.411 6 18.411 5 16.411 5H8.41101C6.41101 5 5.41101 6 5.41101 8V16C5.41101 18 6.41101 19 8.41101 19Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.41101 9.5H7.89101C9.27101 9.5 10.391 10.62 10.391 12C10.391 13.38 9.27101 14.5 7.89101 14.5H5.41101"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.411 9.98999H16.411"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.411 14H16.411"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.61121 12H7.71121"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgStrongbox.fileName = 'strongbox.svg';
export default SvgStrongbox;
