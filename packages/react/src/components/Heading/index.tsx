import { ComponentProps, ElementType } from 'react'

import { Heading } from './styles'

export interface MyCalendarioHeadingProps
  extends ComponentProps<typeof Heading> {
  as?: ElementType
}

export function MyCalendarioHeading({
  children,
  ...props
}: MyCalendarioHeadingProps) {
  return <Heading {...props}>{children}</Heading>
}

MyCalendarioHeading.displayName = 'MyCalendarioHeading'
