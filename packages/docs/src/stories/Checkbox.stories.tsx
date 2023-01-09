import type { Meta, StoryObj } from '@storybook/react';

import { Box, Text, Checkbox, CheckboxProps } from '@my-calendario/react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    Story => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', alignItems: 'center', gap: '$3' }}
        >
          {Story()}
          <Text size="sm" css={{ margin: 0 }}>
            Accept terms of use
          </Text>
        </Box>
      );
    }
  ]
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
