import Slider from 'react-slick'
import NextArrow from 'components/ui/Slider/NextArrow'
import PrevArrow from 'components/ui/Slider/PrevArrow'
import ProductSlide from 'components/ProductSlide'
import { BundleContext } from 'context/Bundle'

import type { Settings } from 'react-slick'
import { FC, useContext, Dispatch, SetStateAction } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Next = <NextArrow outside hasBackground />
const Prev = <PrevArrow outside hasBackground />

type ProductProps = {
  subscriptionMode?: boolean
  focusSlide?: number
  setFocusSlide?: Dispatch<SetStateAction<number>>
}

const ProductSlider: FC<ProductProps> = ({
  subscriptionMode,
  focusSlide = 0,
  setFocusSlide,
}) => {
  const { bundle } = useContext(BundleContext)

  const sliderSettings: Partial<Settings> = {
    afterChange: (index) => sliderChangeHandler(index),
    initialSlide: focusSlide,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    centerMode: false,
    centerPadding: '0',
    dots: true,
    arrows: false,
    nextArrow: Next,
    prevArrow: Prev,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const sliderChangeHandler = (index: number): void => {
    if (!setFocusSlide) return
    setFocusSlide(index)
  }

  return (
    <div>
      <div className="relative h-full bg-panel">
        <Slider {...sliderSettings}>
          {bundle.map((product, idx) => (
            <ProductSlide
              key={idx}
              product={product}
              subscriptionMode={subscriptionMode}
              interval={bundle[idx].order_interval_frequency}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ProductSlider
