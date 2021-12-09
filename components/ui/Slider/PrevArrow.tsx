import cn from 'classnames'
import React, { FC } from 'react'
import ArrowLeft from 'components/icons/ArrowLeft'

type ArrowProps = {
  onClick?: never
  outside?: boolean
  hasBackground?: boolean
}

const PrevArrow: FC<ArrowProps> = (props) => {
  const { onClick, outside, hasBackground } = props
  return (
    <button
      className={cn(
        'absolute z-10 flex items-center justify-center w-10 outline-none cursor-pointer focus:outline-none left-2 top-1/2 -translate-y-1/2 transform',
        {
          'lg:-left-16': outside,
          'bg-white p-2 rounded-lg': hasBackground,
        }
      )}
      onClick={onClick}
      aria-label="Previous"
    >
      <ArrowLeft />
    </button>
  )
}

export default PrevArrow
