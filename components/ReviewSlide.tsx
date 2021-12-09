import cn from 'classnames'
import Panel from 'components/ui/Panel'
import Star from 'components/icons/Star'
import type { FC, HTMLAttributes } from 'react'

export type ReviewProps = {
  text: string
  rating: number
  name: string
} & HTMLAttributes<HTMLDivElement>

const ReviewSlide: FC<ReviewProps> = ({ text, name, rating, className }) => {
  return (
    <Panel className={cn('flex flex-col ', className)} size="lg">
      <p className="mb-6 text-center">{text}</p>
      <hr className="w-24 mx-auto mb-6" />

      <p className="mb-4 font-bold text-center text-gray-600">{name}</p>

      <div className="flex items-center justify-center">
        <div className="flex items-center ml-4">
          {Array.from({ length: rating }, (_, i) => (
            <Star key={i} />
          ))}
        </div>
      </div>
    </Panel>
  )
}

export default ReviewSlide
