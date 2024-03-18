import type { Preview } from '@storybook/vue3'

// This is needed to apply tailwind and other styles to the stories preview
import '../src/assets/main.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
