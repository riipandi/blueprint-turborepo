import { tv } from 'tailwind-variants'

export const errorStyles = tv({
  slots: {
    wrapper: 'relative min-h-screen overflow-hidden bg-white dark:bg-gray-900',
    decorativeGradient: 'absolute inset-0 overflow-hidden',
    gradientInner: '-inset-[10px] absolute opacity-50',
    gradientBg: [
      'absolute top-0 h-[40rem] w-full',
      'bg-gradient-to-b from-gray-100 via-transparent to-transparent dark:from-gray-800',
      'before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] before:from-gray-100/10 before:via-transparent before:to-transparent dark:before:from-gray-800/10',
      'after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] after:from-blue-500/10 after:via-transparent after:to-transparent',
    ],
    content:
      'relative flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8',
    container: 'relative z-20 text-center',
    decorativeCode:
      'pointer-events-none fixed inset-0 z-10 flex select-none items-center justify-center',
    decorativeText:
      'font-black text-[12rem] text-red-500/10 mix-blend-overlay sm:text-[16rem] md:text-[20rem] dark:text-red-400/10',
    errorCode: 'font-bold text-2xl text-red-600 dark:text-red-500',
    title: 'mt-4 font-bold text-3xl text-gray-900 dark:text-white tracking-tight sm:text-5xl',
    description: 'mt-6 text-base text-gray-600 dark:text-gray-400 leading-7',
    pre: [
      'w-full overflow-x-auto rounded-lg bg-gray-50 dark:bg-gray-800/50 p-6 my-6',
      'ring-1 ring-gray-200 dark:ring-gray-800 backdrop-blur supports-[backdrop-filter]:bg-gray-50/50',
      'dark:supports-[backdrop-filter]:bg-gray-800/50',
    ],
    code: [
      'block w-full font-mono text-sm text-gray-700 dark:text-gray-300',
      'selection:bg-gray-200 dark:selection:bg-gray-700',
      'selection:text-gray-900 dark:selection:text-gray-100',
    ],
    actions: 'mt-8 flex items-center justify-center gap-x-4',
    primaryButton: [
      'min-w-[140px] cursor-pointer rounded-md bg-blue-600 px-4 py-2.5 font-semibold text-sm text-white',
      'transition-all duration-200 hover:bg-blue-700 hover:shadow-blue-200/20 hover:shadow-lg dark:hover:shadow-blue-900/20',
      'focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:ring-offset-2',
      'focus:ring-offset-white dark:focus:ring-offset-gray-900',
      'border border-gray-200 dark:border-gray-800',
    ],
    secondaryButton: [
      'min-w-[140px] rounded-md border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 px-4 py-2.5',
      'cursor-pointer font-semibold text-gray-900 dark:text-white text-sm',
      'transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800',
      'hover:text-gray-900 dark:hover:text-white hover:shadow-gray-200/10 dark:hover:shadow-gray-800/10 hover:shadow-lg',
      'focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:ring-offset-2',
      'focus:ring-offset-white dark:focus:ring-offset-gray-900',
    ],
  },
})
