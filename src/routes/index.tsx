import { $, component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const isRoot = (dirname: string) => {
  const pkg = path.resolve(dirname, 'package.json');
  return fs.existsSync(pkg) && !!JSON.parse(fs.readFileSync(pkg, 'utf-8')).name;
};

const getRoot = () => {
  // eslint-disable-next-line prefer-const
  let dirname = path.dirname(fileURLToPath(import.meta.url));

  while (!isRoot(dirname) && dirname !== '/')
    dirname = path.resolve(dirname, '..');

  return dirname;
};

export const useFiles = routeLoader$(async () => {
  // FIXME: Relative path does not work!!!
  const root = getRoot();
  const iconsDir = path.resolve(root, 'icons');

  const files = fs.readdirSync(iconsDir);
  const svgs = files
    .filter((f) => path.extname(f) === '.svg')
    .map((name) =>
      fs.promises
        .readFile(path.resolve(iconsDir, name), 'utf-8')
        .then((svg) => ({ svg, name: name })),
    );

  return Promise.all(svgs);
});

export default component$(() => {
  const svgsSignal = useFiles();

  const handleCopy = $((text: string) => {
    const base64 = btoa(text);
    const type = 'text/plain';
    const blob = new Blob([`data:image/svg+xml;base64,${base64}`], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
      () => {
        alert('Thank you!');
      },
      () => {
        alert('Shit!');
      },
    );
  });

  return (
    <>
      <h1>Icons</h1>
      <div class="container">
        {svgsSignal.value.map(({ svg, name }) => (
          <button
            onClick$={() => {
              handleCopy(svg);
            }}
            class="icon-button"
            key={name}
          >
            <div dangerouslySetInnerHTML={svg} />
            <div>{name}</div>
          </button>
        ))}
      </div>
    </>
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
