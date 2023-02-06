import type { Meta, StoryObj } from '@storybook/react'

import {
  MyCalendarioDialog,
  MyCalendarioDialogProps,
  MyCalendarioText,
  MyCalendarioButton,
} from '@my-calendario/react'

export default {
  title: 'Surfaces/Dialog',
  component: MyCalendarioDialog,
  args: {
    size: 'lg',
    title: 'My Custom modal Title',
    body: (
      <>
        <MyCalendarioText>
          “At Yonder we prefer ownership over consensus.” Following my last
          post, I thought about this more. I think the key is actually not
          ownership, but a culture of loyal opposition. sdsd.
        </MyCalendarioText>
      </>
    ),
    footer: (
      <>
        <MyCalendarioButton size="sm" theme="secondary">
          Cancelar
        </MyCalendarioButton>

        <MyCalendarioButton size="sm">Enviar</MyCalendarioButton>
      </>
    ),
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<MyCalendarioDialogProps>

export const Dialog: StoryObj<MyCalendarioDialogProps> = {}
