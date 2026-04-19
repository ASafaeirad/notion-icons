/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { StackProperties } from '../patterns/stack';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface StackProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<StackProperties, "">> {}


export declare const Stack: Component<StackProps>