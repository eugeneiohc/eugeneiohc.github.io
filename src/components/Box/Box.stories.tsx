import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, BoxProps } from './Box';

export default {
  title: 'components/Box',
  component: Box,
  args: {
    width: 240,
    height: 240,
    p: 16,
  }
} as Meta<BoxProps>;

export const Example: Story<BoxProps> = (args) => (
  <Box {...args} css={{ border: '1px solid #CCC', backgroundColor: '#EEE' }}>
    <div css = {{ width: '100%', height: '100%', backgroundColor: '#DDD', border: '1px solid #999' }}/>
  </Box>
);