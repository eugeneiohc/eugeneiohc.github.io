import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    content: 'Hello Text',
  },
} as Meta<TextProps>;

export const BasicExample: Story<TextProps> = (content, ...args) => (
  <Text {...args}>
    {content}
  </Text>
);