import type { SvgProps } from './SvgProps';
const SvgFood = (props: SvgProps) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="food"
    {...props}
  >
    <path
      d="M10.1883 9.13007C9.37445 9.29613 8.90633 9.53309 8.29064 10.0906C7.69247 10.6323 7.41685 11.0572 7.16614 11.8243"
      stroke="currentColor"
      strokeWidth={0.833333}
      strokeLinecap="round"
    />
    <path
      d="M20.911 15.0908C20.911 11.102 18.911 6.75742 12.6888 6.75742C6.46662 6.75741 4.29993 11.102 4.29993 15.0908"
      stroke="currentColor"
      strokeWidth={0.833333}
      strokeLinecap="round"
    />
    <circle
      cx={12.6888}
      cy={5.92409}
      r={0.416667}
      stroke="currentColor"
      strokeWidth={0.833333}
    />
    <path
      d="M3.49691 15.5074H21.3862C21.6505 15.5074 21.848 15.7503 21.7941 16.0091L21.3458 18.1609C21.3056 18.3541 21.1353 18.4926 20.9379 18.4926H4.07325C3.88465 18.4926 3.71956 18.3659 3.67077 18.1837L3.09443 16.0319C3.02356 15.7673 3.22296 15.5074 3.49691 15.5074Z"
      stroke="currentColor"
      strokeWidth={0.833333}
    />
  </svg>
);
SvgFood.fileName = 'food.svg';
export default SvgFood;
