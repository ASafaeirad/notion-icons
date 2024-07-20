import type { SvgProps } from './SvgProps';
const SvgEnvironment = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="environment"
    {...props}
  >
    <path
      d="M14.22 9.78L12 10.89M12 10.89L9.77998 9.78M12 10.89V13.67M20.89 6.44L18.67 7.55M20.89 6.44L18.67 5.33M20.89 6.44V9.22M14.22 3.11L12 2L9.77998 3.11M3.10999 6.44L5.32999 5.33M3.10999 6.44L5.32999 7.55M3.10999 6.44V9.22M12 22L9.77998 20.89M12 22L14.22 20.89M12 22V19.22M5.32999 18.67L3.10999 17.56V14.78M18.67 18.67L20.89 17.56V14.78"
      stroke="#AEABA4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgEnvironment.fileName = 'environment.svg';
export default SvgEnvironment;
