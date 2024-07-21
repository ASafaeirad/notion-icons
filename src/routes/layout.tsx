import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import { css } from 'pandacss';
import { NavLink } from '../components/NavLink';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <main
      class={css({
        background: 'dark',
        color: 'white',
        minHeight: 'screen',
        pb: 4,
      })}
    >
      <nav
        class={css({
          display: 'flex',
          justifyContent: 'space-between',
          px: 8,
          py: 4,
        })}
      >
        <h1 class={css({ fontSize: '2xl', fontWeight: 'bold' })}>
          Notion IconsSax
        </h1>
        <div class={css({ display: 'flex', alignItems: 'center', gap: 6 })}>
          <NavLink href="/">Icons</NavLink>
          <NavLink href="/cover">Cover Generator</NavLink>
        </div>
      </nav>
      <Slot />
      <footer class={css({ display: 'flex', justifyContent: 'center', p: 4 })}>
        <a
          class={css({ p: 2 })}
          href="https://github.com/asafaeirad/notion-icons/"
        >
          GitHub
        </a>
      </footer>
    </main>
  );
});
