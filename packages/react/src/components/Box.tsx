import { ComponentProps } from 'react';

import { styled } from '../styles';

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray300',
  border: '1px solid $gray900'
});

export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box';
