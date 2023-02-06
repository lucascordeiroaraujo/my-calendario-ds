import type { Meta, StoryObj } from '@storybook/react'

import {
  MyCalendarioHeading,
  MyCalendarioHeadingProps,
} from '@my-calendario/react'

export default {
  title: 'Typography/Heading',
  component: MyCalendarioHeading,
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<MyCalendarioHeadingProps>

export const Primary: StoryObj<MyCalendarioHeadingProps> = {}

export const CustomTag: StoryObj<MyCalendarioHeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
