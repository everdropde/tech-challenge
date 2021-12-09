import Slider from 'react-slick'
import ReviewSlide from 'components/ReviewSlide'
import NextArrow from 'components/ui/Slider/NextArrow'
import PrevArrow from 'components/ui/Slider/PrevArrow'

import type { FC } from 'react'

const Next = <NextArrow outside hasBackground />
const Prev = <PrevArrow outside hasBackground />

const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  infinite: true,
  centerPadding: '0',
  dots: true,
  arrows: false,
  nextArrow: Next,
  prevArrow: Prev,
  centerMode: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 1,
      },
    },
  ],
}

const reviews = [
  {
    name: 'Monica Freundenberg',
    text: "It's great to take up less space and therefore less trash for cleaning!",
    rating: 5,
  },
  {
    name: 'Rieke',
    text: 'reliable, fast shipping, sustainable detergent that smells good and works well',
    rating: 5,
  },
  {
    name: 'Miriam',
    text: 'Great company. Products are super. The smell is very pleasant. Delivery and payment so far always unproblematic.',
    rating: 4,
  },
  {
    name: 'Sebastian',
    text: 'So far top satisfied with the products (especially the dishwasher tabs and the detergent), keep it up.',
    rating: 5,
  },
  {
    name: 'Sabrina',
    text: 'All the products I have tried so far are great. The sustainability aspect from the product itself to the packaging is so great and the quality of the products is super - the cleaning power...',
    rating: 4,
  },
]

const ReviewSlider: FC = () => {
  return (
    <Slider {...sliderSettings}>
      {reviews.map((review, idx) => (
        <ReviewSlide
          key={idx}
          className="mx-1 mb-4 md:mb-0"
          name={review.name}
          text={review.text}
          rating={review.rating}
        />
      ))}
    </Slider>
  )
}

export default ReviewSlider
