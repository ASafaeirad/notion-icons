import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getVstackStyle } from '../patterns/vstack.mjs';
import { styled } from './factory.mjs';

export const VStack = /* @__PURE__ */ function VStack(props) {
  const [patternProps, restProps] = splitProps(props, ["justify","gap"])

const styleProps = getVstackStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}