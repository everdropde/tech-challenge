import React, { FC, MouseEvent, ReactNode } from 'react'
import cn from 'classnames'
import { Button } from './Button'

type ToggleButtonProps = {
  className?: string
  children: ReactNode
  onChange?: (event: MouseEvent<HTMLElement>, value: string) => void
  value: string
  selected?: boolean
}

const ToggleButton: FC<ToggleButtonProps> = ({
  className,
  children,
  onChange,
  value,
  selected,
}) => {
  const handleChange = (event: MouseEvent<HTMLElement>): void => {
    if (onChange) {
      onChange(event, value)
    }
  }

  return (
    <Button
      onClick={handleChange}
      aria-pressed={selected}
      className={cn(
        className,
        { 'border-black': selected },
        { 'bg-beige': selected },
        'hover:bg-white border-2'
      )}
    >
      {children}
    </Button>
  )
}

export default ToggleButton
