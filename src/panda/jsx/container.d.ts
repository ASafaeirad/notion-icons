/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { ContainerProperties } from '../patterns/container';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface ContainerProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<ContainerProperties, "">> {}


export declare const Container: Component<ContainerProps>