import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChevronRight from './ChevronRight';
import ChevronLeft from './ChevronLeft';

export const chevronRight = <ChevronRight />
export const chevronLeft = <ChevronLeft/>
export default {
  title: 'Icon',
  component: ChevronRight,
} as ComponentMeta<typeof ChevronRight>;