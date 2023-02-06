import type { Meta, StoryObj } from '@storybook/react'

import { MyCalendarioBox, MyCalendarioBoxProps } from '@my-calendario/react'

export default {
  title: 'Surfaces/Box',
  component: MyCalendarioBox,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<MyCalendarioBoxProps>

export const Primary: StoryObj<MyCalendarioBoxProps> = {}
