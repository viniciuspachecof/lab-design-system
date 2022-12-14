import { Meta, StoryObj } from '@storybook/react'
import { CheckBox, ICheckBox } from './CheckBox'
import { Text } from './Text'

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta<ICheckBox>

export const Default: StoryObj<ICheckBox> = {}