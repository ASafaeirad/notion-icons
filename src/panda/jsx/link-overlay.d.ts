/* eslint-disable */
import type { Component } from '@builder.io/qwik'
import type { LinkOverlayProperties } from '../patterns/link-overlay';
import type { HTMLStyledProps } from '../types/jsx';
import type { Assign, DistributiveOmit } from '../types/system-types';

export interface LinkOverlayProps extends Assign<HTMLStyledProps<'a'>, DistributiveOmit<LinkOverlayProperties, "">> {}


export declare const LinkOverlay: Component<LinkOverlayProps>