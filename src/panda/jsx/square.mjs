import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getSquareStyle } from '../patterns/square.mjs';
import { styled } from './factory.mjs';

export const Square = /* @__PURE__ */ function Square(props) {
  const [patternProps, restProps] = splitProps(props, ["size"])

const styleProps = getSquareStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}