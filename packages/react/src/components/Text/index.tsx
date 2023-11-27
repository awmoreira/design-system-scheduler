import { ComponentProps } from 'react'
import { TextContainer } from './styles'

export type TextProps = ComponentProps<typeof TextContainer> & {
  error: boolean
}
export const Text = function (props: TextProps) {
  console.log('props', !!props.error)
  return <TextContainer {...props} error={!!props.error} />
}
