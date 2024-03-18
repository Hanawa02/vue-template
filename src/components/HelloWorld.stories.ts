import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import HelloWorld from './HelloWorld.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/HelloWorld',
  component: HelloWorld,

  argTypes: {
    msg: { control: 'text' }
  }
} satisfies Meta<typeof HelloWorld>

export default meta
type Story = StoryObj<typeof meta>

export const WithMessage: Story = {
  args: {
    msg: 'The World says hello'
  }
}
