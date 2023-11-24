import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@scheduler-ui/react'

export default {
  title: 'Molecule/Heading',
  component: Heading,

  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'By default the heading always is a `h2`.',
      },
    },
  },
}
