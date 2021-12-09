import cn from 'classnames'
import React, { FC } from 'react'

interface Props {
  className?: string
  children?: React.ReactNode
  el?: HTMLElement
  clean?: boolean
  style?: React.CSSProperties
  noPaddings?: boolean
}

const Container: FC<Props> = ({
  children,
  className,
  el = 'div',
  clean,
  style,
  noPaddings,
}) => {
  const rootClassName = cn(className, {
    'container px-6': !clean,
    'px-0': noPaddings,
    container: clean,
  })

  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    el as any

  return (
    <Component className={rootClassName} style={style}>
      {children}
    </Component>
  )
}

export default Container
