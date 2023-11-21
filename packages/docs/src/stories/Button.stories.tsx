import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@scheduler-ui/react'

export default {
  title: 'Molecule/Button',
  component: Button,

  args: {
    children: 'Enviar',
    tags: ['autodocs'],
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
