import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getVisuallyHiddenStyle } from '../patterns/visually-hidden.mjs';
import { styled } from './factory.mjs';

export const VisuallyHidden = /* @__PURE__ */ function VisuallyHidden(props) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getVisuallyHiddenStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}