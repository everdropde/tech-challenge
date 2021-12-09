import cn from 'classnames'
import { FC, HTMLAttributes } from 'react'

type Props = {
  size?: 'md' | 'lg'
} & HTMLAttributes<HTMLDivElement>

export const Panel: FC<Props> = ({
  children,
  className,
  size = 'md',
  ...rest
}) => {
  return (
    <div
      className={cn('bg-panel', className, {
        'p-4 rounded-lg': size === 'md',
        'p-8 rounded-2xl': size === 'lg',
      })}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Panel
