import { h } from '@builder.io/qwik'
import { defaultShouldForwardProp, composeShouldForwardProps, composeCvaFn, getDisplayName } from './factory-helper.mjs';
import { isCssProperty } from './is-valid-prop.mjs';
import { css, cx, cva } from '../css/index.mjs';
import { splitProps, normalizeHTMLProps } from '../helpers.mjs';

function styledFn(Dynamic, configOrCva = {}, options = {}) {
  const cvaFn = configOrCva.__cva__ || configOrCva.__recipe__ ? configOrCva : cva(configOrCva)

  const forwardFn = options.shouldForwardProp || defaultShouldForwardProp
  const shouldForwardProp = (prop) => forwardFn(prop, cvaFn.variantKeys)

  const defaultProps = Object.assign(
    options.dataAttr && configOrCva.__name__ ? { 'data-recipe': configOrCva.__name__ } : {},
    options.defaultProps,
  )

  const __cvaFn__ = composeCvaFn(Dynamic.__cva__, cvaFn)
  const __shouldForwardProps__ = composeShouldForwardProps(Dynamic, shouldForwardProp)
  const __base__ = Dynamic.__base__ || Dynamic

  const StyledComponent = function StyledComponent(props) {
    const { as: Element = __base__, children, className, ...restProps } = props

    const combinedProps = Object.assign({}, defaultProps, restProps)

    const [htmlProps, forwardedProps, variantProps, styleProps, elementProps] =
      splitProps(combinedProps, normalizeHTMLProps.keys, __shouldForwardProps__, __cvaFn__.variantKeys, isCssProperty)

    const { css: cssStyles, ...propStyles } = styleProps

    function recipeClass() {
      const { css: cssStyles, ...propStyles } = styleProps
      const compoundVariantStyles = __cvaFn__.__getCompoundVariantCss__?.(variantProps);
      return cx(__cvaFn__(variantProps, false), css(compoundVariantStyles, propStyles, cssStyles), combinedProps.class, className)
    }

    function cvaClass() {
      const { css: cssStyles, ...propStyles } = styleProps
      const cvaStyles = __cvaFn__.raw(variantProps)
      return cx(css(cvaStyles, propStyles, cssStyles), combinedProps.class, className)
    }

    const classes = configOrCva.__recipe__ ? recipeClass : cvaClass

    return h(Element, {
      ...forwardedProps,
      ...elementProps,
      ...normalizeHTMLProps(htmlProps),
      class: classes(),
    }, combinedProps.children ?? children)
  }

  const name = getDisplayName(__base__)

  StyledComponent.displayName = `styled.${name}`
  StyledComponent.__cva__ = __cvaFn__
  StyledComponent.__base__ = __base__
  StyledComponent.__shouldForwardProps__ = shouldForwardProp

  return StyledComponent
}

function createJsxFactory() {
  const cache = new Map()

  return new Proxy(styledFn, {
    apply(_, __, args) {
      return styledFn(...args)
    },
    get(_, el) {
      if (!cache.has(el)) {
        cache.set(el, styledFn(el))
      }
      return cache.get(el)
    },
  })
}

export const styled = /* @__PURE__ */ createJsxFactory()
