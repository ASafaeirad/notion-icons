/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { BleedProperties } from '../patterns/bleed';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface BleedProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<BleedProperties, "">> {}


export declare const Bleed: Component<BleedProps>