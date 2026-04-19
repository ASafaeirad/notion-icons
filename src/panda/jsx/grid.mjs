import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getGridStyle } from '../patterns/grid.mjs';
import { styled } from './factory.mjs';

export const Grid = /* @__PURE__ */ function Grid(props) {
  const [patternProps, restProps] = splitProps(props, ["gap","columnGap","rowGap","columns","minChildWidth"])

const styleProps = getGridStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}