import cn from 'classnames'
import type { FC, HTMLAttributes } from 'react'

export const PrimaryButton: FC<HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        className,
        'w-full py-4 px-10 text-base font-semibold text-center rounded-xl cursor-p bg-yellow font-display md:inline-block md:w-auto'
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
