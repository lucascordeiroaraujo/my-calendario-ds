import type { Meta, StoryObj } from '@storybook/react'

import {
  MyCalendarioBox,
  MyCalendarioText,
  MyCalendarioTextArea,
  MyCalendarioTextAreaProps,
} from '@my-calendario/react'

export default {
  title: 'Form/Text Area',
  component: MyCalendarioTextArea,
  args: {},
  decorators: [
    (Story: any) => {
      return (
        <MyCalendarioBox
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <MyCalendarioText size="sm">Observations</MyCalendarioText>
          {Story()}
        </MyCalendarioBox>
      )
    },
  ],
} as Meta<MyCalendarioTextAreaProps>

export const Primary: StoryObj<MyCalendarioTextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<MyCalendarioTextAreaProps> = {
  args: {
    disabled: true,
  },
}
