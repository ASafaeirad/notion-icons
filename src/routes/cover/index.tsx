import type { QRL } from '@builder.io/qwik';
import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { css } from 'pandacss';
import { Popup } from '~/components/Popup';
import * as Icons from '../../icons';
import { ColorPicker } from '~/components/ColorPicker';
import { isServer } from '@builder.io/qwik/build';
import { Grid } from '~/components/Grid';

type PopupHandler = (text: string, time?: number) => void;

const removeAttributes = (attributeList: string[], node: Element) => {
  if (node.removeAttribute) {
    attributeList.forEach((attr) => {
      node.removeAttribute(attr);
    });
  }

  if (node.childNodes)
    node.childNodes.forEach((child) => {
      if ('removeAttribute' in child)
        removeAttributes(attributeList, child as Element);
    });
};

export default component$(() => {
  const color = useSignal('#AEABA4');
  const bgColor = useSignal('#F3F3F3');

  useVisibleTask$(() => {
    if (isServer) return;
    const lastColor = window.localStorage.getItem('color');
    if (lastColor) color.value = lastColor;
  });

  useVisibleTask$(({ track }) => {
    track(() => color.value);
    if (isServer) return;
    window.localStorage.setItem('color', color.value);
  });

  const ref = useSignal<{ showPopup: QRL<PopupHandler> }>();

  const handleDraw = $((name: string, currentTarget: HTMLDivElement) => {
    if (currentTarget == null || currentTarget.parentElement == null)
      throw Error('Element not found');

    const el = currentTarget
      .closest('[data-box]')!
      .getElementsByTagName('svg')[0];

    removeAttributes(['data-qwik-inspector', 'q:key', 'q:id'], el);

    const outerHTML = el.outerHTML;
    const blob = new Blob([outerHTML], { type: 'image/svg+xml;charset=utf-8' });
    const blobURL = URL.createObjectURL(blob);
    const image = new Image();
    image.src = blobURL;

    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const width = canvas.width;
    const height = canvas.height;
    const ctx = canvas.getContext('2d')!;
    document.body.appendChild(image);
    ctx.fillStyle = bgColor.value;
    ctx.fillRect(0, 0, width, height);
    image.addEventListener('load', () => {
      ctx.drawImage(image, (width - 312) / 2, (height - 312) / 2, 312, 312);

      const png = canvas.toDataURL();
      const link = document.createElement('a');
      link.download = name;
      link.style.opacity = '0';
      document.body.append(link);
      link.href = png;
      link.click();
      link.remove();
    });
  });

  return (
    <div
      class={css({ display: 'flex', alignItems: 'center', flexDir: 'column' })}
    >
      <canvas
        class={css({ display: 'none' })}
        id="container"
        width="1992"
        height="800"
      ></canvas>

      <Popup color={color.value} ref={ref} />
      <div
        class={css({
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 8,
          my: 10,
        })}
      >
        <ColorPicker label="Color" value={color} />
        <ColorPicker label="BG Color" value={bgColor} />
      </div>
      <Grid>
        {Object.values(Icons).map((Svg, i) => {
          const name = Svg.fileName.replace(/.svg$/, '');
          return (
            <div
              data-box
              onClick$={$((_: any, target: any) => handleDraw(name, target))}
              class={css({
                display: 'flex',
                flexDir: 'column',
                alignItems: 'center',
                padding: '4',
                borderRadius: 'md',
                transitionProperty: 'background-color',
                transitionDuration: '300ms',
                bg: { base: 'transparent', _hover: 'highlight' },
                '& > svg': { width: '40px', height: '40px' },
              })}
              style={{ color: color.value }}
              key={i}
            >
              {/* @ts-expect-error */}
              <Svg style={{ color: color.value }} />
              <div class={css({ mt: 2, fontSize: 'xs' })}>{name}</div>
            </div>
          );
        })}
      </Grid>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Notion Icons',
  meta: [
    {
      name: 'description',
      content: 'IconSet for notion using IconSax',
    },
  ],
};
