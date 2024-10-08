import type { Preview } from '@storybook/react'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from './gluestack-ui.config'

// process.env.STORYBOOK

const preview: Preview = {
  decorators: [
    (Story) => (
      <GluestackUIProvider config={config}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </GluestackUIProvider>
    ),
  ],
  
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F8F8F8',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
