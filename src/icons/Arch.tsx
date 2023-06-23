import type { SvgProps } from './SvgProps';
const SvgArch = (props: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.127 21.88a.415.415 0 0 0 .501.065c3.235-1.867 5.464-2.824 7.456-3.2a.416.416 0 0 0 .328-.503 5.1 5.1 0 0 1-.133-1.2l.003-.093c.027-1.102.398-2.103.968-2.613.266-.24.553-.344.84-.324.963.082 1.742 1.584 1.702 3.282-.01.341-.047.666-.114.967a.415.415 0 0 0 .327.499c1.964.384 4.167 1.336 7.368 3.184a.417.417 0 0 0 .575-.56c-3.191-5.9-6.456-11.77-9.07-17.956l-.497-1.17c-.066-.155-.227-.283-.386-.254a.416.416 0 0 0-.383.26l-.525 1.297c-2.351 5.833-5.413 11.325-8.47 16.812l-.562 1.007a.415.415 0 0 0 .072.5Zm18.402-1.368c-2.431-1.33-4.285-2.101-5.963-2.485.033-.23.052-.468.057-.71.053-2.196-1.03-4.011-2.465-4.132-.52-.045-1.028.14-1.466.533-.746.668-1.212 1.87-1.246 3.212l-.003.097v.006c-.003.328.021.655.073.98-1.697.378-3.569 1.15-6.02 2.487l.112-.201c3.039-5.478 6.05-10.973 8.397-16.79 2.482 5.845 5.514 11.419 8.524 17.003Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArch;
