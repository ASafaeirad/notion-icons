import type { SvgProps } from './SvgProps';
const SvgUserTag = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97C3 3.33 4.34 2 6 2H18C19.66 2 21 3.33 21 4.97V15.88C21 17.52 19.66 18.86 18 18.86Z"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.07 8.94999C12.03 8.94999 11.97 8.94999 11.92 8.94999C10.87 8.90999 10.04 8.05999 10.04 6.99999C10.04 5.91999 10.91 5.04999 11.99 5.04999C13.07 5.04999 13.94 5.92999 13.94 6.99999C13.95 8.05999 13.12 8.91999 12.07 8.94999Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.25 11.96C7.92 12.85 7.92 14.3 9.25 15.19C10.76 16.2 13.24 16.2 14.75 15.19C16.08 14.3 16.08 12.85 14.75 11.96C13.24 10.96 10.77 10.96 9.25 11.96Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
SvgUserTag.fileName = 'user-tag.svg';
export default SvgUserTag;
