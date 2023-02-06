import { ComponentProps } from 'react'

import { styled } from '../styles'

export const MyCalendarioBox = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray300',
  border: '1px solid $gray900',
})

export interface MyCalendarioBoxProps
  extends ComponentProps<typeof MyCalendarioBox> {}

MyCalendarioBox.displayName = 'MyCalendarioBox'
