import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getBoxStyle } from '../patterns/box.mjs';
import { styled } from './factory.mjs';

export const Box = /* @__PURE__ */ function Box(props) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBoxStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}