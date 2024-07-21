import type { SvgProps } from './SvgProps';
const SvgGithub = (props: SvgProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-name="github"
    {...props}
  >
    <path
      d="M9.38247 19.1515C4.62335 20.5792 4.62335 16.7719 2.7197 16.296M16.0452 22.0069V18.3234C16.081 17.8695 16.0196 17.4132 15.8654 16.9849C15.7111 16.5566 15.4674 16.166 15.1505 15.8391C18.1393 15.506 21.2803 14.3733 21.2803 9.17633C21.28 7.84742 20.7689 6.56947 19.8526 5.60699C20.2864 4.44434 20.2558 3.15922 19.7669 2.01861C19.7669 2.01861 18.6437 1.68547 16.0452 3.42731C13.8637 2.83605 11.564 2.83605 9.38247 3.42731C6.78399 1.68547 5.66084 2.01861 5.66084 2.01861C5.17196 3.15922 5.14128 4.44434 5.57517 5.60699C4.65202 6.57661 4.14032 7.86611 4.14743 9.20489C4.14743 14.3638 7.28846 15.4965 10.2772 15.8677C9.96404 16.1913 9.72253 16.5772 9.56837 17.0003C9.41422 17.4234 9.35088 17.8742 9.38247 18.3234V22.0069"
      stroke="currentColor"
      strokeWidth={0.951825}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
SvgGithub.fileName = 'github.svg';
export default SvgGithub;
