/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { VisuallyHiddenProperties } from '../patterns/visually-hidden';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface VisuallyHiddenProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<VisuallyHiddenProperties, "">> {}


export declare const VisuallyHidden: Component<VisuallyHiddenProps>