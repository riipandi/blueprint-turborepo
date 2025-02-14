/**
 * Switch color scheme based on the global types or system preferences
 */

import { DocsContainer as BaseContainer } from '@storybook/blocks'
import { GLOBALS_UPDATED } from '@storybook/core-events'
import * as React from 'react'
import { Theme, dark, light } from '../themes'

const themes = { light, dark }

type EventListener = (
  eventName: string,
  callback: (context: { globals: Record<string, unknown> }) => void
) => void

export function listenToColorScheme(
  eventEmitter: { on: EventListener; off: EventListener },
  callback: (theme: Theme) => void
) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const handleMediaChange = (event: MediaQueryListEvent) => {
    callback(event.matches ? 'dark' : 'light')
  }

  const handleGlobalsChange = ({ globals }) => {
    const theme = globals.theme as Theme

    if (theme === 'system') {
      callback(mediaQuery.matches ? 'dark' : 'light')
      mediaQuery.addEventListener('change', handleMediaChange)
    } else {
      callback(theme)
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }

  const initColorScheme = () => {
    const globals = new URL(window.location.href).searchParams.get('globals')

    if (globals) {
      const [key, value] = globals.split(':')
      if (key === 'theme') {
        return handleGlobalsChange({ globals: { theme: value } })
      }
    }

    handleGlobalsChange({ globals: { theme: 'system' } })
  }

  initColorScheme()

  eventEmitter.on(GLOBALS_UPDATED, handleGlobalsChange)

  return () => {
    eventEmitter.off(GLOBALS_UPDATED, handleGlobalsChange)
  }
}

export const DocsContainer: typeof BaseContainer = ({ children, context }) => {
  const [theme, setTheme] = React.useState('light')

  React.useEffect(() => listenToColorScheme(context.channel, setTheme), [context.channel])

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <BaseContainer context={context} theme={themes[theme]}>
      {children}
    </BaseContainer>
  )
}
