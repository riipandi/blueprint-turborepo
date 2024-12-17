import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import '@repo/core-ui/tailwind.css'
import DocumentationTemplate from './doc-template.mdx'
import '../src/main.css'

const preview: Preview = {
  // Optional parameter to center the component in the Canvas.
  // More info: https://storybook.js.org/docs/configure/story-layout
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      defaultName: 'Documentation',
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? themes.dark : themes.light,
      page: DocumentationTemplate,
      toc: {
        /* 👈 Enables the table of contents */
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h2, h3',
        ignoreSelector: '#primary',
        title: 'On this page',
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
        },
      },
    },
  },
  tags: ['autodocs'],
}

export default preview
