import { component$, Slot } from '@builder.io/qwik';
import { css } from '~/panda/css';

interface Props {}

export const Grid = component$((props: Props) => {
  return (
    <div
      class={css({
        color: 'brand',
        display: 'grid',
        maxWidth: '100%',
        gridTemplateColumns: {
          base: 'repeat(4, 1fr)',
          sm: 'repeat(5, 1fr)',
          md: 'repeat(7, 1fr)',
          lg: 'revert(8, 1fr)',
          xl: 'revert(8, 1fr)',
        },
        gap: '4',
        placeItems: 'center',
      })}
      {...props}
    >
      <Slot />
    </div>
  );
});
