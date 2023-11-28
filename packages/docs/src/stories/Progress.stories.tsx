import type { Meta, StoryObj } from '@storybook/react'

import { Box, Progress, ProgressProps } from '@scheduler-ui/react'

export default {
  title: 'Atom/Progress',
  component: Progress,
  args: {
    currentStep: 10,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            backgroundColor: '#222525',
            padding: 20,
          }}
          border="dashed"
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ProgressProps>

export const Percentage10: StoryObj<ProgressProps> = {}
export const Percentage20: StoryObj<ProgressProps> = {
  args: {
    currentStep: 20,
  },
}
export const Percentage30: StoryObj<ProgressProps> = {
  args: {
    currentStep: 30,
  },
}
export const Percentage40: StoryObj<ProgressProps> = {
  args: {
    currentStep: 40,
  },
}
export const Percentage50: StoryObj<ProgressProps> = {
  args: {
    currentStep: 50,
  },
}
export const Percentage60: StoryObj<ProgressProps> = {
  args: {
    currentStep: 60,
  },
}
export const Percentage70: StoryObj<ProgressProps> = {
  args: {
    currentStep: 70,
  },
}
export const Percentage80: StoryObj<ProgressProps> = {
  args: {
    currentStep: 80,
  },
}
export const Percentage90: StoryObj<ProgressProps> = {
  args: {
    currentStep: 90,
  },
}
export const Percentage100: StoryObj<ProgressProps> = {
  args: {
    currentStep: 100,
  },
}
