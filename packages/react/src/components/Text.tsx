import { ComponentProps, ElementType } from 'react'

import { styled } from '../styles'

export const MyCalendarioText = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  color: '$gray800',
  margin: '$0',
  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface MyCalendarioTextProps
  extends ComponentProps<typeof MyCalendarioText> {
  as?: ElementType
}

MyCalendarioText.displayName = 'MyCalendarioText'
