// tailwind config is required for editor support

import tailwindConfig from '@repo/tailwind-config'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./src/**/*!(*.stories|*.spec|*.test).{ts,tsx}'],
  presets: [tailwindConfig],
}

export default config
