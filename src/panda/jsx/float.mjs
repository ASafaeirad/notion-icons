import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getFloatStyle } from '../patterns/float.mjs';
import { styled } from './factory.mjs';

export const Float = /* @__PURE__ */ function Float(props) {
  const [patternProps, restProps] = splitProps(props, ["offsetX","offsetY","offset","placement"])

const styleProps = getFloatStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}