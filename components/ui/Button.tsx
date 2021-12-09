import cn from 'classnames'
import type { FC, HTMLAttributes } from 'react'

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        'h-9 px-2 py-1 text-sm font-semibold rounded-lg bg-light-gray',
        className
      )}
    >
      {children}
    </button>
  )
}
