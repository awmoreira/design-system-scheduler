import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@scheduler-ui/react'

export default {
  title: 'Molecule/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/awmoreira.png',
    alt: 'Allan Winckler',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: 'Allan Winckler',
  },
}
