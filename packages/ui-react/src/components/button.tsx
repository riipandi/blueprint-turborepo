import * as React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  return (
    <button
      className="mb-4 rounded-lg bg-blue-600 px-4 py-2 transition-colors hover:bg-blue-700"
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button }
