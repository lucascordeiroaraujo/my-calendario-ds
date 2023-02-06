import type { Meta, StoryObj } from '@storybook/react'

import {
  MyCalendarioButton,
  MyCalendarioButtonProps,
} from '@my-calendario/react'

import { ArrowLeft, ArrowRight } from 'phosphor-react'

enum Icons {
  NoIcon = 'No Icon',
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
}

export default {
  title: 'Form/Button',
  component: (args: any) => (
    <div>
      <MyCalendarioButton {...args}>
        {args.icon === Icons.ArrowLeft && <ArrowLeft weight="bold" />}

        {args.children}

        {args.icon === Icons.ArrowRight && <ArrowRight weight="bold" />}
      </MyCalendarioButton>
    </div>
  ),
  args: {
    children: 'MyCalendário Button',
    theme: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
  },
  argTypes: {
    theme: {
      options: ['primary', 'secondary', 'tertiary', 'destructive', 'positive'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: { action: 'clicked' },
    icon: {
      options: [Icons.NoIcon, Icons.ArrowLeft, Icons.ArrowRight],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<MyCalendarioButtonProps>

export const Button: StoryObj<MyCalendarioButtonProps> = {}
