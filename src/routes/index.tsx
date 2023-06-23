import type { QRL, QwikMouseEvent } from '@builder.io/qwik';
import { $, component$, useSignal } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { css } from 'pandacss';
import { Popup } from '~/components/Popup';
import * as Icons from '../icons';
import { ColorPicker } from '~/components/ColorPicker';

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

function copySvg(svg: Element) {
  const base64 = btoa(svg.outerHTML);
  const type = 'text/plain';
  const blob = new Blob([`data:image/svg+xml;base64,${base64}`], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  return navigator.clipboard.write(data);
}

export default component$(() => {
  const color = useSignal('#ffd667');
  const ref = useSignal<{
    showPopup: QRL<(text: string, time?: number) => void>;
  }>();

  const handleCopy = $(
    (_: QwikMouseEvent<HTMLDivElement>, currentTarget: HTMLDivElement) => {
      const svg = currentTarget.getElementsByTagName('svg')[0];
      removeAttributes(['data-qwik-inspector', 'q:key', 'q:id'], svg);

      copySvg(svg)
        .then(() => {
          ref.value?.showPopup('Copied!');
        })
        .catch(() => {
          ref.value?.showPopup('Oops!');
        });
    },
  );

  return (
    <div>
      <h1>Icons</h1>
      <Popup ref={ref} />
      <div
        class={css({
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          my: 10,
        })}
      >
        <ColorPicker value={color} />
      </div>
      <div
        class={css({
          color: 'brand',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, auto)',
          gap: '4',
          placeItems: 'center',
        })}
      >
        {Object.values(Icons).map((Svg, i) => (
          <div
            onClick$={handleCopy}
            class={css({
              padding: '4',
              borderRadius: 'md',
              transitionProperty: 'background-color',
              transitionDuration: '300ms',
              bg: { base: 'transparent', _hover: 'highlight' },
              '& svg': {
                width: '40px',
                height: '40px',
              },
            })}
            key={i}
          >
            <Svg color={color.value} />
          </div>
        ))}
      </div>
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
