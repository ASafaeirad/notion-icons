import { $, component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const useFiles = routeLoader$(async () => {
  // FIXME: Relative path does not work!!!
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const iconsDir = path.resolve(dirname, "../icons");

  const files = fs.readdirSync(iconsDir);
  const svgs = files
    .filter((f) => path.extname(f) === ".svg")
    .map((svg) => fs.promises.readFile(path.resolve(iconsDir, svg), "utf-8"));
  return Promise.all(svgs);
});

export default component$(() => {
  const svgsSignal = useFiles();

  const handleCopy = $((text: string) => {
    const base64 = btoa(text);
    const type = "text/plain";
    const blob = new Blob([`data:image/svg+xml;base64,${base64}`], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
      () => {
        alert("Thank you!");
      },
      () => {
        alert("Shit!");
      }
    );
  });

  return (
    <>
      <h1>Icons</h1>
      <div class="container">
        {svgsSignal.value.map((svg) => (
          <button
            onClick$={() => {
              handleCopy(svg);
            }}
            class="icon-button"
            key={svg}
          >
            <div dangerouslySetInnerHTML={svg} />
          </button>
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Notion Icons",
  meta: [
    {
      name: "description",
      content: "IconSet for notion using IconSax",
    },
  ],
};
