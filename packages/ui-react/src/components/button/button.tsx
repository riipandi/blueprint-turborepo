import { clx } from '@repo/ui-react/utils'
import * as React from 'react'
import { type ButtonVariants, buttonStyles } from './button.css'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button className={clx(buttonStyles({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)

Button.displayName = 'Button'

export { Button }
