import type { Meta, StoryObj } from '@storybook/react'

import { Box, Text, TextInput, TextInputProps } from '@scheduler-ui/react'

export default {
  title: 'Molecule/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (Story, ctx) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            border: 'none',
          }}
        >
          <Text size="md" error={ctx.args.error}>
            Label
          </Text>
          {Story()}
          <Text size="xs" error={ctx.args.error}>
            Helper Text
          </Text>
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Placeholder',
  },
}

export const Error: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Placeholder',
    error: true,
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
