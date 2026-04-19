/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { FloatProperties } from '../patterns/float';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface FloatProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<FloatProperties, "">> {}


export declare const Float: Component<FloatProps>