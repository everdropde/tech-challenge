import cn from 'classnames'
import React, { FC } from 'react'
import ArrowRight from 'components/icons/ArrowRight'

type ArrowProps = {
  onClick?: never
  outside?: boolean
  hasBackground?: boolean
}

const NextArrow: FC<ArrowProps> = (props) => {
  const { onClick, outside, hasBackground } = props
  return (
    <button
      className={cn(
        'absolute z-10 flex items-center justify-center w-10 outline-none cursor-pointer focus:outline-none right-2 top-1/2 -translate-y-1/2 transform',
        {
          'lg:-right-16': outside,
          'bg-white p-2 rounded-lg': hasBackground,
        }
      )}
      onClick={onClick}
      aria-label="Next"
    >
      <ArrowRight />
    </button>
  )
}

export default NextArrow
