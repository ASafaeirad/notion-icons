/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { DividerProperties } from '../patterns/divider';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface DividerProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<DividerProperties, "">> {}


export declare const Divider: Component<DividerProps>