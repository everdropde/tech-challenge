import Image from 'next/image'

import { FC, HTMLAttributes } from 'react'

export const Coupon: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={className}>
      <div className="md:hidden">
        <Image
          priority
          width={328}
          height={250}
          layout="responsive"
          src="/full-coupon.svg"
        />
      </div>
      <div className="hidden md:block">
        <Image
          priority
          width={328}
          height={150}
          layout="responsive"
          src="/full-coupon-desktop.svg"
        />
      </div>
    </div>
  )
}

export default Coupon
