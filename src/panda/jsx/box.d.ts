/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { BoxProperties } from '../patterns/box';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface BoxProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<BoxProperties, "">> {}


export declare const Box: Component<BoxProps>