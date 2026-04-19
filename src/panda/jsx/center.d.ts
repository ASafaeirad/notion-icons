/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { CenterProperties } from '../patterns/center';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface CenterProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<CenterProperties, "">> {}


export declare const Center: Component<CenterProps>