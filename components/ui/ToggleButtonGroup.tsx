import React, { FC, MouseEvent, ReactNode } from 'react'
import cn from 'classnames'

type ToggleButtonGroupProps = {
  className?: string
  children: ReactNode
  onChange: (event: MouseEvent<HTMLElement>, value: string) => void
  value: string
}

const ToggleButtonGroup: FC<ToggleButtonGroupProps> = ({
  className,
  children,
  onChange,
  value,
}) => (
  <div className={cn(className, 'flex flex-wrap gap-2')}>
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return null
      }

      return React.cloneElement(child, {
        onChange,
        selected: child.props.value === value,
      })
    })}
  </div>
)

export default ToggleButtonGroup
