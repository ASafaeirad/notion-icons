/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { SpacerProperties } from '../patterns/spacer';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface SpacerProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<SpacerProperties, "">> {}


export declare const Spacer: Component<SpacerProps>