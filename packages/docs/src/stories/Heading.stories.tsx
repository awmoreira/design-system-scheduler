import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@scheduler-ui/react'

export default {
  title: 'Atom/Heading',
  component: Heading,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },

  args: {
    children: 'Heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {
    size: '4xl',
  },
}

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
