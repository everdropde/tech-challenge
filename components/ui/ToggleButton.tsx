import React, { FC, HTMLAttributes, MouseEvent } from 'react'
import cn from 'classnames'
import { Button } from './Button'

type ToggleButtonProps = {
  onChange?: (event: MouseEvent<HTMLElement>, value: string) => void
  value: string
  selected?: boolean
} & HTMLAttributes<HTMLDivElement>

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
