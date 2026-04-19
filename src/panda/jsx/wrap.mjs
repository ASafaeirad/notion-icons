import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getWrapStyle } from '../patterns/wrap.mjs';
import { styled } from './factory.mjs';

export const Wrap = /* @__PURE__ */ function Wrap(props) {
  const [patternProps, restProps] = splitProps(props, ["gap","rowGap","columnGap","align","justify"])

const styleProps = getWrapStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}