import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getDividerStyle } from '../patterns/divider.mjs';
import { styled } from './factory.mjs';

export const Divider = /* @__PURE__ */ function Divider(props) {
  const [patternProps, restProps] = splitProps(props, ["orientation","thickness","color"])

const styleProps = getDividerStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}