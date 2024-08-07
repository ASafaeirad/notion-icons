/** @type {import('@svgr/core').Config} */
module.exports = {
  template({ componentName, imports, exports, jsx }, { tpl, options }) {
    const fileName = options.state.filePath.split('/').at(-1);
    return tpl`
      import type { SvgProps } from './SvgProps';
      const ${componentName} = (props: SvgProps) => ${jsx};

      ${componentName}.fileName = "${fileName}";
      ${exports}
  `;
  },
  jsxRuntime: 'automatic',
  typescript: true,
  plugins: [
    '@svgr/plugin-jsx',
    (code) =>
      code
        .replace(/strokeLinecap/g, 'stroke-linecap')
        .replace(/strokeLinejoin/g, 'stroke-linejoin')
        .replace(/strokeMiterlimit/g, 'stroke-miterlimit')
        .replace(/strokeWidth/g, 'stroke-width')
        .replace(/\{(\d+)\}/g, (_, group) => `"${group}"`),
  ],
  replaceAttrValues: {
    '#AEABA4': 'currentColor',
  },
  svgoConfig: {
    plugins: [
      {
        name: 'add-data-id-to-svg-icons',
        fn(root, _params, info) {
          const { basename } = info.path.match(
            /.*\/(?<basename>.*)\.svg$/,
          ).groups;
          // this changed
          if (root.children[0].name === 'svg') {
            root.children[0].attributes['data-name'] = basename;
            root.children[0].children;
          }
        },
      },
    ],
  },
};
