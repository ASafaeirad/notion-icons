/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { GridItemProperties } from '../patterns/grid-item';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface GridItemProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<GridItemProperties, "">> {}


export declare const GridItem: Component<GridItemProps>