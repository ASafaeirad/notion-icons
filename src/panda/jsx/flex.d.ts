/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { FlexProperties } from '../patterns/flex';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface FlexProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<FlexProperties, "">> {}


export declare const Flex: Component<FlexProps>