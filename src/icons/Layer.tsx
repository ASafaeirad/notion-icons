import type { SvgProps } from './SvgProps';
const SvgLayer = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="layer"
    {...props}
  >
    <path
      d="M13.01 2.92001L18.91 5.54001C20.61 6.29001 20.61 7.53001 18.91 8.28001L13.01 10.9C12.34 11.2 11.24 11.2 10.57 10.9L4.66999 8.28001C2.96999 7.53001 2.96999 6.29001 4.66999 5.54001L10.57 2.92001C11.24 2.62001 12.34 2.62001 13.01 2.92001Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgLayer.fileName = 'layer.svg';
export default SvgLayer;
