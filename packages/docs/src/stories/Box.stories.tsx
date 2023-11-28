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
  argTypes: {
    border: {
      options: ['hidden', 'solid', 'dashed', 'dotted'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
