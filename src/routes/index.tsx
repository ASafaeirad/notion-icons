import type { QRL } from '@builder.io/qwik';
import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { css } from 'pandacss';
import { Popup } from '~/components/Popup';
import * as Icons from '../icons';
import { ColorPicker } from '~/components/ColorPicker';
import { isServer } from '@builder.io/qwik/build';
import { ButtonIcon } from '~/components/ButtonIcon';

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

function copySvg(svg: Element) {
  const base64 = btoa(svg.outerHTML);
  const type = 'text/plain';
  const blob = new Blob([`data:image/svg+xml;base64,${base64}`], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  return navigator.clipboard.write(data);
}

export default component$(() => {
  const color = useSignal('#ffd667');

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

  const handleCopyInline = $((name: string, currentTarget: HTMLDivElement) => {
    if (currentTarget == null || currentTarget.parentElement == null)
      throw Error('Element not found');

    const el = currentTarget.closest('[data-box]')!.getElementsByTagName('svg')[0];

    removeAttributes(['data-qwik-inspector', 'q:key', 'q:id'], el);

    copySvg(el)
      .then(() => {
        ref.value?.showPopup(`${name} Copied!`);
      })
      .catch(() => {
        ref.value?.showPopup('Oops!');
      });
  });

  const handleCopyLink = $((name: string) => {
    const type = 'text/plain';
    const blob = new Blob([`https://raw.githubusercontent.com/ASafaeirad/notion-icons/main/icons/${name.toLowerCase()}.svg`], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard
      .write(data)
      .then(() => {
        ref.value?.showPopup(`${name} Link Copied!`);
      })
      .catch(() => {
        ref.value?.showPopup('Oops!');
      });
  });

  return (
    <div
      class={css({
        display: 'flex',
        alignItems: 'center',
        flexDir: 'column',
        py: '5rem',
      })}
    >
      <h1 class={css({ fontSize: '3xl', fontWeight: 'bold' })}>
        Notion IconsSax
      </h1>
      <Popup color={color.value} ref={ref} />
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
          maxWidth: '100%',
          gridTemplateColumns: {
            base: 'repeat(4, 1fr)',
            sm: 'repeat(5, 1fr)',
            md: 'repeat(8, 1fr)',
          },
          gap: '4',
          placeItems: 'center',
        })}
      >
        {Object.values(Icons).map((Svg, i) => {
          const name = Svg.fileName.replace(/.svg$/, '');
          return (
            <div
              data-box
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
              <div class={css({ p: 2, display: 'flex', flexDir: 'row' })}>
                <ButtonIcon
                  onClick$={$((_: any, target: any) =>
                    handleCopyInline(name, target),
                  )}
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </ButtonIcon>
                <ButtonIcon onClick$={$(() => handleCopyLink(name))}>
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </ButtonIcon>
              </div>
            </div>
          );
        })}
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
