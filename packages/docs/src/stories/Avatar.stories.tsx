import type { Meta, StoryObj } from '@storybook/react'

import {
  MyCalendarioAvatar,
  MyCalendarioAvatarProps,
} from '@my-calendario/react'

export default {
  title: 'Data display/Avatar',
  component: MyCalendarioAvatar,
  args: {
    src: 'https://github.com/lucascordeiroaraujo.png',
    alt: 'Lucas Cordeiro Araujo',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<MyCalendarioAvatarProps>

export const Primary: StoryObj<MyCalendarioAvatarProps> = {}

export const WithFallback: StoryObj<MyCalendarioAvatarProps> = {
  args: {
    src: undefined,
  },
}
