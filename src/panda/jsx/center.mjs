import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getCenterStyle } from '../patterns/center.mjs';
import { styled } from './factory.mjs';

export const Center = /* @__PURE__ */ function Center(props) {
  const [patternProps, restProps] = splitProps(props, ["inline"])

const styleProps = getCenterStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}