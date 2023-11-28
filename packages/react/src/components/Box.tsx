import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$2',
  borderRadius: '$lg',
  backgroundColor: '$background100',
  border: '2px hidden $brandPrimary50',
  gap: '$3',
  flexDirection: 'column',
  alignItems: 'flex-start',

  variants: {
    border: {
      solid: {
        borderStyle: 'solid',
      },
      dashed: {
        borderStyle: 'dashed',
      },
      dotted: {
        borderStyle: 'dotted',
      },
      hidden: {
        borderStyle: 'hidden',
      },
    },
  },

  defaultVariants: {
    border: 'hidden',
  },
})

export type BoxProps = ComponentProps<typeof Box>
