import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@scheduler-ui/react'

export default {
  title: 'Molecule/Text',
  component: Text,

  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut hic itaque aperiam excepturi earum enim, nisi nesciunt laudantium repellendus dignissimos, obcaecati iure minus totam unde dolores sed tempora a voluptates.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: { children: 'Strong text', as: 'strong' },
}
