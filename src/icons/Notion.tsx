import type { SvgProps } from './SvgProps';
const SvgNotion = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="notion"
    {...props}
  >
    <path
      d="M15.025 1.99881L2.46616 2.90834C2.46232 2.90862 2.45848 2.90894 2.45465 2.9093C2.44823 2.91013 2.44184 2.91109 2.43546 2.91218C2.42356 2.91366 2.41172 2.91558 2.39996 2.91794C2.39515 2.91914 2.39035 2.92042 2.38557 2.92177C2.38011 2.92296 2.37468 2.92424 2.36926 2.92561C2.35729 2.929 2.34544 2.93284 2.33376 2.93712C2.32601 2.94013 2.31833 2.94333 2.31074 2.94672C2.30623 2.94857 2.30175 2.95049 2.2973 2.95247C2.2715 2.96438 2.24679 2.97851 2.22343 2.99469C2.21923 2.99718 2.21508 2.99974 2.21096 3.00236C2.20073 3.00997 2.19081 3.01797 2.18121 3.02635C2.17928 3.02825 2.17736 3.03017 2.17546 3.03211C2.16722 3.03919 2.15922 3.04655 2.15147 3.05417C2.14656 3.0595 2.14176 3.06494 2.13708 3.07048C2.12977 3.07856 2.12273 3.08688 2.11597 3.09543C2.11337 3.09859 2.11082 3.10179 2.1083 3.10502C2.10088 3.11499 2.09384 3.12523 2.08719 3.13572C2.08524 3.1389 2.08332 3.1421 2.08143 3.14532C2.07497 3.15564 2.06889 3.1662 2.06321 3.17698C2.0609 3.18142 2.05866 3.1859 2.05649 3.19041C2.05123 3.20205 2.04643 3.21389 2.0421 3.22591C2.04145 3.22719 2.04081 3.22846 2.04018 3.22975C2.03028 3.25749 2.02289 3.28607 2.01811 3.31514C2.01707 3.32024 2.01611 3.32535 2.01523 3.33049C2.01343 3.34354 2.01215 3.35666 2.0114 3.36982C2.0114 3.37046 2.0114 3.3711 2.0114 3.37174C2.01083 3.38069 2.01051 3.38964 2.01044 3.3986V16.0419C2.01044 16.5457 2.16525 17.0383 2.45465 17.4512C2.46221 17.4621 2.47022 17.4727 2.47863 17.4829L5.51136 21.1325C5.54063 21.1852 5.57933 21.232 5.62554 21.2707L5.81742 21.501C5.84178 21.5303 5.86947 21.5567 5.89993 21.5796C6.18833 21.8595 6.58725 22.0246 7.01766 21.997L20.2807 21.1412C21.0515 21.0914 21.6594 20.4426 21.6594 19.6704V6.90241C21.6594 6.44879 21.446 6.04663 21.1211 5.77605C21.0982 5.74972 21.0724 5.72592 21.0444 5.70505L20.8065 5.52948C20.7767 5.50114 20.7435 5.47664 20.7076 5.45656L16.6608 2.4718C16.1896 2.12412 15.6088 1.95645 15.025 1.99881ZM15.096 2.97838C15.4464 2.95295 15.7951 3.05399 16.0775 3.26237L19.0891 5.48439L6.79603 6.28934C6.37278 6.31697 5.95874 6.16036 5.65816 5.86048H5.6572L3.60883 3.81116L15.096 2.97838ZM2.99288 4.58445L4.96354 6.5551L5.449 7.04057V19.5198L3.25768 16.8823C3.08618 16.6358 2.99288 16.343 2.99288 16.0419V4.58445ZM20.1541 6.41215C20.4445 6.39351 20.6769 6.61178 20.6769 6.90241V19.6704C20.6769 19.9337 20.4801 20.1437 20.2174 20.1607L6.95433 21.0165C6.81011 21.0257 6.68018 20.9763 6.58592 20.8889C6.5856 20.8885 6.58528 20.8882 6.58496 20.8879L6.584 20.8869C6.58199 20.8851 6.58117 20.8821 6.5792 20.8802C6.57731 20.8776 6.57539 20.8751 6.57344 20.8725C6.48658 20.7847 6.43145 20.6648 6.43145 20.5262V7.75821C6.43145 7.4942 6.62793 7.28496 6.89101 7.26795L20.1541 6.41215ZM18.4645 8.80206L15.9719 8.94022C15.5917 8.97952 15.1488 9.26283 15.1488 9.72311L16.254 9.81521V15.0671L12.4317 9.17144L9.56684 9.33262C9.03091 9.37192 8.88469 9.77024 8.88469 10.2767H9.98994V17.9223C9.98994 17.9223 9.47303 18.0618 9.30012 18.1065C8.93268 18.2013 8.88469 18.5209 8.88469 18.7513C8.88469 18.7513 10.728 18.6587 11.5759 18.5949C12.5382 18.5212 12.5698 17.8763 12.5698 17.8763L11.4646 17.646V11.9806C11.4646 11.9806 14.2742 16.4948 15.1334 17.8216C15.5377 18.4449 15.8395 18.5671 16.3711 18.5671C16.8073 18.5671 17.2198 18.4382 17.7267 18.1641V9.6358C17.7267 9.6358 17.8201 9.63083 18.1143 9.53602C18.4498 9.42746 18.4645 9.12431 18.4645 8.80206Z"
      fill="currentColor"
    />
  </svg>
);
SvgNotion.fileName = 'notion.svg';
export default SvgNotion;
