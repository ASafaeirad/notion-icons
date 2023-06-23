import type { SvgProps } from './SvgProps';
const SvgSlack = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14.5 2.3c-1 0-1.9.8-1.9 1.9v4.6c0 1 .8 1.9 1.9 1.9 1 0 1.9-.8 1.9-1.9V4.1c0-1-.8-1.8-1.9-1.8ZM18.6 10.6h1.6c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6v1.6ZM2 9.2c0 1 .8 1.9 1.9 1.9h4.6c1 0 1.9-.8 1.9-1.9 0-1-.8-1.9-1.9-1.9H3.9C2.8 7.4 2 8.2 2 9.2ZM10.4 5.1V3.6c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h1.6v-.1ZM9.4 21.8c1 0 1.9-.8 1.9-1.9v-4.6c0-1-.8-1.9-1.9-1.9-1 0-1.9.8-1.9 1.9v4.6c.1 1 .9 1.9 1.9 1.9ZM5.4 13.4H3.8c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-1.6ZM22 14.8c0-1-.8-1.9-1.9-1.9h-4.6c-1 0-1.9.8-1.9 1.9 0 1 .8 1.9 1.9 1.9h4.6c1 0 1.9-.9 1.9-1.9ZM13.6 18.8v1.6c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6h-1.6Z"
    />
  </svg>
);
export default SvgSlack;
