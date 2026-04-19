import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getLinkOverlayStyle } from '../patterns/link-overlay.mjs';
import { styled } from './factory.mjs';

export const LinkOverlay = /* @__PURE__ */ function LinkOverlay(props) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getLinkOverlayStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.a, mergedProps)
}