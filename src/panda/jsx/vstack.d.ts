/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { VstackProperties } from '../patterns/vstack';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface VstackProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<VstackProperties, "">> {}


export declare const VStack: Component<VstackProps>