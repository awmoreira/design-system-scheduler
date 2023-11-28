import { styled } from '../../styles'

export const Steps = styled('div', {
  width: '100%',
  height: '$2',
  backgroundColor: '$background100',
  overflow: 'hidden',
})

export const Step = styled('div', {
  width: 'var(--step-current)',
  height: '$2',
  backgroundColor: '$brandPrimary50',
  borderRadius: '0 var(--border-right-top) var(--border-right-bottom) 0',
})
