import cn from 'classnames'
import Repeat from 'components/icons/Repeat'
import type { FC, HTMLAttributes } from 'react'

const Headline: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div
      className={cn(
        className,
        'flex items-baseline justify-center p-4 rounded-lg gap-2 bg-light-blue text-blue'
      )}
    >
      <Repeat height={14} className=" flex-shrink-0" />

      <div>
        <span className="font-semibold">Full flexibility:</span> you can adjust
        the adjust the delivery intervals of your refill products at any time or
        cancel individual products{' '}
        <span role="img" aria-label="like">
          👍🏻
        </span>
      </div>
    </div>
  )
}

export default Headline
