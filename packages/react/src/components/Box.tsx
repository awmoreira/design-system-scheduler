import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$2',
  borderRadius: '$lg',
  backgroundColor: '$background100',
  border: '1px solid $brandPrimary50',
  gap: '$3',
  flexDirection: 'column',
  alignItems: 'flex-start',
})

export type BoxProps = ComponentProps<typeof Box>
