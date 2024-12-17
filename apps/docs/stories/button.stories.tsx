import type { ButtonVariants } from '@repo/core-ui/button.css'
import { Button, type ButtonProps } from '@repo/ui-react/button'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import * as Lucide from 'lucide-react'
import * as React from 'react'

// Create array of options for variant
const variantOptions: NonNullable<ButtonVariants['variant']>[] = [
  'default',
  'destructive',
  'success',
  'warning',
  'outline',
  'secondary',
  'ghost',
  'link',
  'gradient',
]

// Create array of options for size
const sizeOptions: NonNullable<ButtonVariants['size']>[] = [
  'xs',
  'sm',
  'default',
  'lg',
  'xl',
  'icon',
]

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
Button component provides clickable elements with various styles and states.

## Example Usage
\`\`\`tsx
import { Button } from '@repo/ui-react/button'

// Basic usage
<Button>Click me</Button>

// With variant
<Button variant="destructive">Delete</Button>

// With icon
<Button>
  <Search />
  Search
</Button>
\`\`\``,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: variantOptions,
    },
    size: {
      control: { type: 'inline-radio' },
      options: sizeOptions,
    },
    isLoading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    grouped: {
      control: 'boolean',
    },
  },
  args: { onClick: fn() },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic variants
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
}

export const Success: Story = {
  args: {
    children: 'Button',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    children: 'Button',
    variant: 'warning',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
}

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
}

export const Gradient: Story = {
  args: {
    children: 'Button',
    variant: 'gradient',
  },
}

// Size variants
export const ExtraSmall: Story = {
  args: {
    children: 'Button',
    size: 'xs',
  },
}

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'lg',
  },
}

export const ExtraLarge: Story = {
  args: {
    children: 'Button',
    size: 'xl',
  },
}

// With icons
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Lucide.Search />
        Search
      </>
    ),
    variant: 'default',
  },
}

export const WithIconEnd: Story = {
  args: {
    children: (
      <>
        Login with Github
        <Lucide.Github />
      </>
    ),
    variant: 'outline',
  },
}

export const WithIconBoth: Story = {
  args: {
    children: (
      <>
        <Lucide.Mail />
        Login with Email
        <Lucide.Github />
      </>
    ),
    variant: 'secondary',
  },
}

export const IconOnly: Story = {
  args: {
    children: <Lucide.Plus />,
    size: 'icon',
    variant: 'default',
  },
}

export const IconOutline: Story = {
  args: {
    children: <Lucide.Calendar />,
    size: 'icon',
    variant: 'outline',
  },
}

// States
export const Loading: Story = {
  args: {
    children: (
      <>
        <Lucide.Loader2 className="animate-spin" />
        Please wait
      </>
    ),
    isLoading: true,
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
}

export const Grouped: Story = {
  args: {
    children: 'Grouped Button',
    grouped: true,
  },
}

// Disabled state
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}
