import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export const basicButton = <Button label="Hello"/>
export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

