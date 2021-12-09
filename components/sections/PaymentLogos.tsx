import cn from 'classnames'
import Image from 'next/image'
import type { FC, HTMLAttributes } from 'react'

const PATH = '/payment-methods'
const LOGOS = [
  'paypal.png',
  'visa.png',
  'american-express.png',
  'mastercard.png',
  'klarna.png',
]

const PaymentLogos: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div
      className={cn(
        className,
        'flex justify-between gap-2 w-full md:justify-start'
      )}
    >
      {LOGOS.map((src) => (
        <Image
          key={src}
          alt={src}
          width={53}
          height={35}
          quality={85}
          layout="fixed"
          src={`${PATH}/${src}`}
        />
      ))}
    </div>
  )
}

export default PaymentLogos
