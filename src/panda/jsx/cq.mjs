import { h } from '@builder.io/qwik'

import { splitProps } from '../helpers.mjs';
import { getCqStyle } from '../patterns/cq.mjs';
import { styled } from './factory.mjs';

export const Cq = /* @__PURE__ */ function Cq(props) {
  const [patternProps, restProps] = splitProps(props, ["name","type"])

const styleProps = getCqStyle(patternProps)
const mergedProps = { ...styleProps, ...restProps }

return h(styled.div, mergedProps)
}