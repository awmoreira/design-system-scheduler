import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, TextInputContainer } from './styles'

export type TextInputProps = ComponentProps<typeof Input> & { error: boolean }

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  (props: TextInputProps, ref) => {
    return (
      <TextInputContainer error={!!props.error}>
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
