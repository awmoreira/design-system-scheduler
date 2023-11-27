import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Image = styled('img', {
  width: '$16',
  height: '$16',
  objectFit: 'cover',
})

export type ImageProps = ComponentProps<typeof Image>
