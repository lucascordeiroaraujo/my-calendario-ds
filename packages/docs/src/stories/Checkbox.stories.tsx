import type { Meta, StoryObj } from '@storybook/react'

import {
  MyCalendarioBox,
  MyCalendarioText,
  MyCalendarioCheckbox,
  MyCalendarioCheckboxProps,
} from '@my-calendario/react'

export default {
  title: 'Form/Checkbox',
  component: MyCalendarioCheckbox,
  args: {},
  decorators: [
    (Story: any) => {
      return (
        <MyCalendarioBox
          as="label"
          css={{ display: 'flex', alignItems: 'center', gap: '$3' }}
        >
          {Story()}
          <MyCalendarioText size="sm" css={{ margin: 0 }}>
            Accept terms of use
          </MyCalendarioText>
        </MyCalendarioBox>
      )
    },
  ],
} as Meta<MyCalendarioCheckboxProps>

export const Primary: StoryObj<MyCalendarioCheckboxProps> = {}
