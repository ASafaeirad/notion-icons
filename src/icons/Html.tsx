import type { SvgProps } from './SvgProps';
const SvgHtml = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="html"
    {...props}
  >
    <path
      d="M4.09998 2H19.9C20.5 2 21 2.5 20.9 3.1L19.1 19.3C19.1 19.7 18.8 20 18.4 20.2L12.3 21.9C12.1 22 11.9 22 11.8 21.9L5.69998 20.2C5.29998 20.1 4.99998 19.8 4.99998 19.3L3.09998 3.1C3.09998 2.5 3.49998 2 4.09998 2Z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.2 6.79999H7.79999L8.19999 11.2H15.8L15.2 16.2L11.8 17.2L8.19999 16.2V14.2"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgHtml.fileName = 'html.svg';
export default SvgHtml;
