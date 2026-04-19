import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getSpacerStyle } from '../patterns/spacer.mjs';
import { styled } from './factory.mjs';

export const Spacer = /* @__PURE__ */ function Spacer(props) {
  const [patternProps, restProps] = splitProps(props, ["size"])

const styleProps = getSpacerStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}