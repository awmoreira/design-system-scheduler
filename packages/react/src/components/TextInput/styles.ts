import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$brandPrimary25',

  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $brandPrimary25',
  display: 'flex',
  alignItems: 'center',
  width: '100%',

  '&:has(input:focus)': {
    borderColor: '$brandSecondary25',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: { padding: '$3 $4' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$brandPrimary100',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&::placeholder': {
    color: '$background70',
  },
})
