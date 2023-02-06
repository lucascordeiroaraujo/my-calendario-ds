import type { Meta, StoryObj } from '@storybook/react'

import {
  MyCalendarioBox,
  MyCalendarioMultiStep,
  MyCalendarioMultiStepProps,
} from '@my-calendario/react'

export default {
  title: 'Form/Multi Step',
  component: MyCalendarioMultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story: any) => {
      return (
        <MyCalendarioBox
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </MyCalendarioBox>
      )
    },
  ],
} as Meta<MyCalendarioMultiStepProps>

export const Primary: StoryObj<MyCalendarioMultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MyCalendarioMultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
