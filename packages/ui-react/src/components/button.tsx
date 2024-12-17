import * as React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  return (
    <button
      className="ui-mb-4 ui-rounded-lg ui-bg-blue-500 ui-px-4 ui-py-2 ui-transition-colors ui-hover:ui-bg-blue-600"
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button }
