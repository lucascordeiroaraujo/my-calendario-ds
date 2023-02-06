import { User } from 'phosphor-react'

import { ComponentProps } from 'react'

import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface MyCalendarioAvatarProps
  extends ComponentProps<typeof AvatarImage> {}

export function MyCalendarioAvatar(props: MyCalendarioAvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

MyCalendarioAvatar.displayName = 'MyCalendarioAvatar'
