import { Check } from 'phosphor-react'

import { ComponentProps } from 'react'

import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface MyCalendarioCheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function MyCalendarioCheckbox(props: MyCalendarioCheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

MyCalendarioCheckbox.displayName = 'MyCalendarioCheckbox'
