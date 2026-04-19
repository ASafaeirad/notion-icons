import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getCircleStyle } from '../patterns/circle.mjs';
import { styled } from './factory.mjs';

export const Circle = /* @__PURE__ */ function Circle(props) {
  const [patternProps, restProps] = splitProps(props, ["size"])

const styleProps = getCircleStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}