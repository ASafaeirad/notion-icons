import type { QwikJSX } from '@builder.io/qwik';
import { css } from '~/panda/css';

// type x = ButtonHTMLAttributes<HTMLButtonElement>
interface Props {
  children: QwikJSX.Element | QwikJSX.Element[];
  onClick$: any;
}

export const ButtonIcon = ({ onClick$, ...props }: Props) => {
  return (
    <button
      onClick$={onClick$}
      class={css({
        stroke: 'rgb(255 255 255 / .3)',
        borderRadius: 4,
        p: 2,
        _hover: {
          bg: 'rgb(255 255 255 / .1)',
          stroke: 'rgb(255 255 255 / .5)',
        },
      })}
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      ></svg>
    </button>
  );
};
