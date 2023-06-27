import {
  useSignal,
  useVisibleTask$,
  type Signal,
  component$,
  $,
} from '@builder.io/qwik';
import { css } from 'pandacss';

interface Props {
  ref: Signal<any>;
  color?: string;
}

export const Popup = component$(({ ref, color = 'brand' }: Props) => {
  const inputRef = useSignal<Element | undefined>();

  useVisibleTask$(() => {
    ref.value = {
      showPopup: $(function showPopup(text: string, time = 1000) {
        if (!inputRef.value) return;

        inputRef.value.textContent = text;
        inputRef.value.classList.add('show');
        setTimeout(() => {
          inputRef.value?.classList.remove('show');
        }, time);
      }),
    };
  });
  return (
    <div
      ref={inputRef}
      id="popup"
      style={{ color }}
      class={css({
        background: 'highlight',
        fontWeight: '400',
        borderRadius: 'md',
        padding: 4,
        position: 'fixed',
        bottom: 0,
        opacity: 0,
        left: '50%',
        translate: '-50% 0',
        margin: '0 auto',
        transitionProperty: 'opacity, bottom',
        transitionDuration: '100ms',
        transitionTimingFunction: 'ease-in',
        boxShadow: 'xl',
      })}
    >
      Copied!
    </div>
  );
});
