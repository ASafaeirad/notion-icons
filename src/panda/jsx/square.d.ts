/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { SquareProperties } from '../patterns/square';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface SquareProps extends Assign<HTMLStyledProps<'div'>, DistributiveOmit<SquareProperties, "">> {}


export declare const Square: Component<SquareProps>