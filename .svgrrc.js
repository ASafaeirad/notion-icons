/** @type {import('@svgr/core').Config} */
module.exports = {
  template({ componentName, imports, exports, jsx }, { tpl }) {
    return tpl`
      import type { SvgProps } from './SvgProps';
      const ${componentName} = (props: SvgProps) => ${jsx};

      ${exports}
  `;
  },
  jsxRuntime: 'automatic',
  typescript: true,
  replaceAttrValues: { '#FFD667': 'currentColor' },
};
