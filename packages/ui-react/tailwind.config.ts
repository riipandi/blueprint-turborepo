import tailwindConfig from '@repo/tailwind-config'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
  content: ['./src/**/*!(*.stories|*.spec|*.test).{ts,tsx}'],
  prefix: 'ui-',
  presets: [tailwindConfig],
}

export default config
