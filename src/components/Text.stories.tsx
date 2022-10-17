import { Meta, StoryObj } from '@storybook/react'
import { Text, IText } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem'
  }
} as Meta<IText>

export const Default: StoryObj<IText> = {}

export const Small: StoryObj<IText> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<IText> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<IText> = {
  args: {
    asChild: true,
    children: (
      <p>Testando</p>
    )
  }
}