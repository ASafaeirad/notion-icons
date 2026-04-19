/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { HstackProperties } from '../patterns/hstack';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface HstackProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<HstackProperties, "">> {}


export declare const HStack: Component<HstackProps>