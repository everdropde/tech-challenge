import cn from 'classnames'
import Image from 'next/image'
import { BundleContext } from 'context/Bundle'
import { FC, HTMLAttributes, useContext } from 'react'

export const Details: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const { bundle } = useContext(BundleContext)

  return (
    <div className={cn(className, 'space-y-4')}>
      {bundle.map((item) => (
        <div key={item.product_id} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-14 h-14">
            <Image
              src={item.image}
              layout="responsive"
              width={200}
              height={200}
              objectFit="contain"
            />
          </div>
          <div className="flex-1 text-sm">
            <div className="mb-1 font-semibold">{item.title}</div>
            <div className=" text-xs">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
