import { ComponentProps } from 'react'
import { Input, TextInputContainer } from './styles'

export type TextInputProps = ComponentProps<typeof Input>

export function TextInput(props: TextInputProps) {
  return (
    <TextInputContainer>
      <Input {...props} />
    </TextInputContainer>
  )
}
