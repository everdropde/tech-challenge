import HalfStar from 'components/icons/HalfStar'
import Star from 'components/icons/Star'
import Link from 'next/link'

import type { FC } from 'react'

export type ReviewProps = {
  link: string
  name: string
  rating: number
  totalRatingsCount: number
}

const ReviewSummary: FC<ReviewProps> = ({
  name,
  rating,
  link,
  totalRatingsCount,
}) => {
  const roundedRating = Math.round(rating)

  return (
    <div className="flex flex-col items-center gap-4">
      <Link href={link}>
        <a className="text-sm underline hover:no-underline">{name}</a>
      </Link>

      <div className="flex items-center">
        {[...Array(5)].map((_, idx) =>
          idx < roundedRating ? (
            <Star key={idx} width={32} />
          ) : (
            <HalfStar key={idx} width={32} />
          )
        )}

        <div className="ml-2 text-sm font-semibold">{rating} / 5</div>
      </div>

      <div className="text-xs text-gray-500">{totalRatingsCount} Reviews</div>
    </div>
  )
}

export default ReviewSummary
