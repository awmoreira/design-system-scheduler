import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$background70',
  },

  variants: {
    variant: {
      primary: {
        color: '$brandPrimary100',
        background: '$brandPrimary50',

        '&:not(:disabled):hover': {
          background: '$brandPrimary75',
        },

        '&:disabled': {
          backgroundColor: '$background70',
        },
      },
      secondary: {
        color: '$brandPrimary50',
        border: '2px solid $brandPrimary25',

        '&:not(:disabled):hover': {
          background: '$brandPrimary75',
          color: '$brandPrimary100',
        },

        '&:disabled': {
          color: '$background70',
          borderColor: '$background70',
        },
      },
      tertiary: {
        color: '$brandPrimary75',

        '&:not(:disabled):hover': {
          color: '$brandPrimary100',
        },

        '&:disabled': {
          color: '$background70',
        },
      },
    },

    size: {
      md: {
        height: 46,
      },
      sm: {
        height: 38,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
