import type { Signal } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { css } from 'pandacss';
import './ColorPicker.css';

interface Props {
  value: Signal<string>;
}

export const ColorPicker = component$(({ value }: Props) => {
  return (
    <div
      class={css({
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      })}
    >
      <input
        bind:value={value}
        class={css({
          color: 'inherit',
          borderRadius: 'md',
          background: 'highlight',
          borderColor: 'dark',
          fontSize: 'sm',
          width: '110px',
          py: '2',
          pl: '10',
        })}
      />
      <input
        type="color"
        bind:value={value}
        class={css({
          position: 'absolute',
          left: '4px',
        })}
      />
    </div>
  );
});
