import type { SvgProps } from './SvgProps';
const SvgTs = (props: SvgProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.292 18H11.811C11.7113 18 11.6614 17.9501 11.6614 17.8504V11.908C11.6614 11.8439 11.6258 11.8118 11.5545 11.8118H10.101C9.9941 11.8118 9.94066 11.7619 9.94066 11.6622V11.2774C9.94066 11.1777 9.9941 11.1278 10.101 11.1278H14.002C14.1089 11.1278 14.1623 11.1777 14.1623 11.2774V11.6622C14.1623 11.7619 14.1089 11.8118 14.002 11.8118H12.5485C12.4772 11.8118 12.4416 11.8439 12.4416 11.908V17.8504C12.4416 17.9501 12.3917 18 12.292 18ZM15.1002 16.4182V16.0762C15.1002 15.9765 15.1501 15.9266 15.2499 15.9266H15.7308C15.8306 15.9266 15.8805 15.9765 15.8805 16.0762V16.3541C15.8805 16.9954 16.1975 17.316 16.8317 17.316H17.7722C18.4063 17.316 18.7234 16.9882 18.7234 16.3327V15.9693C18.7234 15.4563 18.2994 15.1214 17.4516 14.9647C17.0953 14.9006 16.739 14.8257 16.3828 14.7402C16.0265 14.6547 15.7237 14.4909 15.4743 14.2486C15.2249 13.9992 15.1002 13.6608 15.1002 13.2333V12.7096C15.1002 12.2179 15.2392 11.8332 15.5171 11.5553C15.8021 11.2703 16.1904 11.1278 16.682 11.1278H17.8684C18.3529 11.1278 18.7376 11.2703 19.0227 11.5553C19.3077 11.8332 19.4502 12.2179 19.4502 12.7096V12.9768C19.4502 13.0836 19.4038 13.1371 19.3112 13.1371H18.8196C18.727 13.1371 18.6806 13.0836 18.6806 12.9768V12.7844C18.6806 12.136 18.3636 11.8118 17.7294 11.8118H16.821C16.1868 11.8118 15.8698 12.1502 15.8698 12.8271V13.2546C15.8698 13.618 16.1085 13.8674 16.5858 14.0028C16.7996 14.0598 17.0347 14.1132 17.2912 14.1631C17.5477 14.2059 17.8042 14.2664 18.0608 14.3448C18.3244 14.416 18.5631 14.5087 18.7768 14.6227C18.9906 14.7296 19.1616 14.897 19.2898 15.125C19.4252 15.3459 19.4929 15.6166 19.4929 15.9373V16.4182C19.4929 16.9099 19.3504 17.2982 19.0654 17.5832C18.7804 17.8611 18.3956 18 17.9111 18H16.682C16.1975 18 15.8128 17.8611 15.5278 17.5832C15.2428 17.2982 15.1002 16.9099 15.1002 16.4182Z"
      fill="currentColor"
    />
  </svg>
);
SvgTs.fileName = 'ts.svg';
export default SvgTs;
