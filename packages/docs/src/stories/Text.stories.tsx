import type { Meta, StoryObj } from '@storybook/react'

import { MyCalendarioText, MyCalendarioTextProps } from '@my-calendario/react'

export default {
  title: 'Typography/Text',
  component: MyCalendarioText,
  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<MyCalendarioTextProps>

export const Primary: StoryObj<MyCalendarioTextProps> = {}

export const CustomTag: StoryObj<MyCalendarioTextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
