import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$background100',

  borderRadius: '$lg',
  boxSizing: 'border-box',
  border: '2px solid $background70',
  display: 'flex',
  alignItems: 'center',
  width: '100%',

  '&:has(input:focus)': {
    borderColor: '$brandPrimary50',
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
    error: {
      true: {
        borderColor: '$alertDanger50',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$md',
  color: '$text',
  fontWeight: '$regular',
  background: '$background100',
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
