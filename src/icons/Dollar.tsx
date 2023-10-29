import type { SvgProps } from './SvgProps';
const SvgDollar = (props: SvgProps) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="dollar"
    {...props}
  >
    <path
      d="M9.08289 14.3298C9.08289 15.6198 10.0729 16.6598 11.3029 16.6598H13.8129C14.8829 16.6598 15.7529 15.7498 15.7529 14.6298C15.7529 13.4098 15.2229 12.9798 14.4329 12.6998L10.4029 11.2998C9.61289 11.0198 9.08289 10.5898 9.08289 9.36984C9.08289 8.24984 9.95289 7.33984 11.0229 7.33984H13.5329C14.7629 7.33984 15.7529 8.37984 15.7529 9.66984"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.411 6V18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.411 22H9.41101C4.41101 22 2.41101 20 2.41101 15V9C2.41101 4 4.41101 2 9.41101 2H15.411C20.411 2 22.411 4 22.411 9V15C22.411 20 20.411 22 15.411 22Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgDollar.fileName = 'dollar.svg';
export default SvgDollar;
