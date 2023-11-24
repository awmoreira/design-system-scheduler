import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@scheduler-ui/react'

export default {
  title: 'Molecule/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Test element box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
