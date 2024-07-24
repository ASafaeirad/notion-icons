import type { SvgProps } from './SvgProps';
const SvgFlake = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.1533 17.0704L17.6404 15.0422M17.6404 15.0422L12.3711 12M17.6404 15.0422L20.4788 13.1681M17.6404 15.0422L17.4366 18.4374M12.3711 12L7.10184 8.95778M12.3711 12L12.4206 18.0845M12.3711 12L12.2899 2M12.3711 12L17.6651 9.0006M12.3711 12L7.07712 14.9994M7.10184 8.95778L3.58899 6.92963M7.10184 8.95778L4.26341 10.8319M7.10184 8.95778L7.30563 5.56258M7.07712 14.9994L3.67024 16.9296M7.07712 14.9994L7.30564 18.4374M7.07712 14.9994L4.26342 13.1682M12.4524 22L12.4206 18.0845M12.4206 18.0845L15.4134 19.6056M12.4206 18.0845L9.32893 19.6056M21.072 7.07037L17.6651 9.0006M17.6651 9.0006L17.4366 5.56261M17.6651 9.0006L20.4788 10.8319M9.32893 4.39446L12.3711 5.91557L15.4134 4.39446"
      stroke="currentColor"
    />
  </svg>
);
SvgFlake.fileName = 'flake.svg';
export default SvgFlake;
