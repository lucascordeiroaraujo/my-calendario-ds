import { ComponentProps } from 'react'

import {
  Input,
  TextInputContainer,
  TextInputLabel,
  InputContainer,
} from './styles'

export interface MyCalendarioInputProps extends ComponentProps<typeof Input> {
  prefix: any
  sufix: any
  label: string
  size?: ComponentProps<typeof Input>['size']
}

export function MyCalendarioInput({
  label,
  prefix,
  sufix,
  size,
  ...props
}: MyCalendarioInputProps) {
  return (
    <TextInputContainer>
      <TextInputLabel size={size} htmlFor="">
        {label}
      </TextInputLabel>

      <InputContainer>
        {prefix}

        <Input size={size} />

        {sufix}
      </InputContainer>
    </TextInputContainer>
  )
}

MyCalendarioInput.displayName = 'MyCalendarioInput'
