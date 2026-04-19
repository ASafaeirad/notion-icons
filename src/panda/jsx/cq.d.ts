/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { CqProperties } from '../patterns/cq';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface CqProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<CqProperties, "">> {}


export declare const Cq: Component<CqProps>