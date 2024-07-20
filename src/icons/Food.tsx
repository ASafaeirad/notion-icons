import type { SvgProps } from './SvgProps';
const SvgFood = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="food"
    {...props}
  >
    <path
      d="M9.77723 9.13007C8.96338 9.29613 8.49526 9.53309 7.87957 10.0906C7.2814 10.6323 7.00578 11.0572 6.75507 11.8243"
      stroke="#AEABA4"
      strokeWidth={0.833333}
      strokeLinecap="round"
    />
    <path
      d="M20.5 15.0908C20.5 11.1021 18.5 6.75745 12.2778 6.75745C6.05561 6.75744 3.88892 11.1021 3.88892 15.0908"
      stroke="#AEABA4"
      strokeWidth={0.833333}
      strokeLinecap="round"
    />
    <circle
      cx={12.2778}
      cy={5.92409}
      r={0.416667}
      stroke="#AEABA4"
      strokeWidth={0.833333}
    />
    <path
      d="M2.68342 16.0319C2.61255 15.7673 2.81195 15.5074 3.0859 15.5074H20.9752C21.2395 15.5074 21.437 15.7503 21.3831 16.0091L20.9348 18.1609C20.8946 18.3541 20.7243 18.4926 20.5269 18.4926H3.66224C3.47363 18.4926 3.30855 18.3659 3.25976 18.1837L2.68342 16.0319Z"
      stroke="#AEABA4"
      strokeWidth={0.833333}
    />
  </svg>
);
SvgFood.fileName = 'food.svg';
export default SvgFood;
