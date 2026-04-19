/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { AspectRatioProperties } from '../patterns/aspect-ratio';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface AspectRatioProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<AspectRatioProperties, | 'aspectRatio'>> {}


export declare const AspectRatio: Component<AspectRatioProps>