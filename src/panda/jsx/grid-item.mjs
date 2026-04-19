import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getGridItemStyle } from '../patterns/grid-item.mjs';
import { styled } from './factory.mjs';

export const GridItem = /* @__PURE__ */ function GridItem(props) {
  const [patternProps, restProps] = splitProps(props, ["colSpan","rowSpan","colStart","rowStart","colEnd","rowEnd"])

const styleProps = getGridItemStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}