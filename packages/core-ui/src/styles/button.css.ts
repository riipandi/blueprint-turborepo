import { type VariantProps, tv } from 'tailwind-variants'

export const buttonStyles = tv({
  base: 'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  variants: {
    variant: {
      default:
        'bg-blue-600 text-white shadow-md hover:bg-blue-700 active:bg-blue-800 active:scale-[0.98] hover:ring-2 hover:ring-offset-2 hover:ring-blue-500/50',
      destructive:
        'bg-red-600 text-white shadow-md hover:bg-red-700 active:bg-red-800 active:scale-[0.98] hover:ring-2 hover:ring-offset-2 hover:ring-red-500/50',
      success:
        'bg-green-600 text-white shadow-md hover:bg-green-700 active:bg-green-800 active:scale-[0.98] hover:ring-2 hover:ring-offset-2 hover:ring-green-500/50',
      warning:
        'bg-yellow-500 text-white shadow-md hover:bg-yellow-600 active:bg-yellow-700 active:scale-[0.98] hover:ring-2 hover:ring-offset-2 hover:ring-yellow-500/50',
      outline:
        'border-2 border-gray-300 bg-white/80 text-gray-700 backdrop-blur-sm hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100',
      secondary:
        'bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
      ghost:
        'text-gray-700 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800',
      link: 'text-blue-600 underline-offset-4 hover:underline hover:text-blue-700 active:text-blue-800',
      gradient:
        'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:from-blue-700 hover:to-purple-700 hover:shadow-lg',
    },
    size: {
      xs: 'h-7 px-2.5 text-xs rounded',
      sm: 'h-8 px-3 text-sm rounded-md',
      default: 'h-10 px-5 py-2 text-sm',
      lg: 'h-12 px-8 text-base rounded-md',
      xl: 'h-14 px-10 text-lg rounded-lg font-semibold',
      icon: 'size-9 aspect-square',
    },
    isLoading: {
      true: 'animate-pulse opacity-70 pointer-events-none',
      false: '',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
    grouped: {
      true: 'group-hover:translate-x-1 group-hover:scale-105',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: ['default', 'destructive', 'success', 'warning'],
      isLoading: true,
      className: 'text-white/70',
    },
    {
      variant: 'outline',
      size: ['icon', 'xs'],
      className: 'border',
    },
    {
      variant: ['ghost', 'link'],
      size: ['lg', 'xl'],
      className: 'font-semibold tracking-wide',
    },
    {
      variant: ['default', 'destructive', 'success', 'warning', 'gradient'],
      size: ['lg', 'xl'],
      className: 'shadow-lg',
    },
    {
      fullWidth: true,
      size: ['lg', 'xl'],
      className: 'justify-center',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'default',
    isLoading: false,
    fullWidth: false,
    grouped: false,
  },
})

export type ButtonVariants = VariantProps<typeof buttonStyles>
