import type { Meta, StoryObj } from '@storybook/react'

import {
  MyCalendarioInput,
  MyCalendarioInputProps,
  MyCalendarioText,
} from '@my-calendario/react'

export default {
  title: 'Form/Text Input',
  component: MyCalendarioInput,
  args: {
    label: 'myCalendário InputText label',
    theme: 'info',
    size: 'sm',
  },
  argTypes: {
    theme: {
      options: ['primary', 'success', 'warning', 'danger', 'info'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<MyCalendarioInputProps>

export const Primary: StoryObj<MyCalendarioInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<MyCalendarioInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<MyCalendarioInputProps> = {
  args: {
    prefix: (
      <>
        <MyCalendarioText size="sm">cal.com/</MyCalendarioText>
      </>
    ),
    placeholder: 'your-username',
  },
}

export const WithSufix: StoryObj<MyCalendarioInputProps> = {
  args: {
    sufix: (
      <>
        <MyCalendarioText size="sm">.cal.com</MyCalendarioText>
      </>
    ),
    placeholder: 'your-username',
  },
}
