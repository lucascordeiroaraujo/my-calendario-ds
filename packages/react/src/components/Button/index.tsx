import { ComponentProps, ElementType } from 'react'

import { Button, Loading } from './styles'

import { CircleNotch } from 'phosphor-react'

export interface MyCalendarioButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

export function MyCalendarioButton({
  children,
  ...props
}: MyCalendarioButtonProps) {
  return (
    <Button {...props}>
      <span>{children}</span>

      <Loading>{!!props.loading && <CircleNotch />}</Loading>
    </Button>
  )
}

MyCalendarioButton.displayName = 'MyCalendarioButton'
