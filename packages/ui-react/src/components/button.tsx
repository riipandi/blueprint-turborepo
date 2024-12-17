import { ButtonVariants, buttonStyles } from '@repo/core-ui/button.css'
import { clx } from '@repo/core-ui/utils'
import * as React from 'react'

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
