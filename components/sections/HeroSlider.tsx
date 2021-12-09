import { useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import type { FC } from 'react'

const HeroSlider: FC = () => {
  const sliderContainerRef = useRef<HTMLDivElement>(null)

  const sliderSettings = {
    speed: 500,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const sliderImageSources = ['/heroshot-box.jpg', '/heroshot-box.jpg']

  return (
    <div
      ref={sliderContainerRef}
      className="relative w-full overflow-hidden h-52 lg:h-80vh"
    >
      <Slider {...sliderSettings}>
        {sliderImageSources.map((image, idx) => {
          return (
            <div className="relative h-52 lg:h-80vh" key={idx}>
              <Image
                src={image}
                alt={image}
                layout="fill"
                blurDataURL="/"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default HeroSlider
