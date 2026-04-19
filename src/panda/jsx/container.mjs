import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getContainerStyle } from '../patterns/container.mjs';
import { styled } from './factory.mjs';

export const Container = /* @__PURE__ */ function Container(props) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getContainerStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}