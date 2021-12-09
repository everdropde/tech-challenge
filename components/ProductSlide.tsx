import { FC, useContext } from 'react'
import Image from 'next/image'
import { StepContext } from 'context/Step'
import Repeat from 'components/icons/Repeat'
import { Button } from 'components/ui/Button'
import { BundleContext } from 'context/Bundle'
import { BundleComponent } from 'types/types'

export type ProductProps = {
  product: BundleComponent
  subscriptionMode?: boolean
  interval?: number
}

const ProductSlide: FC<ProductProps> = ({
  product,
  interval,
  subscriptionMode,
}) => {
  const { goto } = useContext(StepContext)
  const { setProductID } = useContext(BundleContext)

  const title = product.title
  const image = product.image_abo
  const productID = product.product_id
  const description = product.description_short

  const editButtonHandler = (): void => {
    setProductID(productID)
    goto('edit')
  }

  return (
    <div className="px-2">
      <div className="relative flex justify-center w-full mb-2 h-28">
        <Image
          quality="100"
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
        />

        {!subscriptionMode && (
          <div className="absolute bottom-0 right-0 p-1 w-7 h-7 z-2 bg-light-blue rounded-md">
            <Repeat className="w-5 h-5 text-blue" />
          </div>
        )}
      </div>

      <div className="relative flex flex-col h-full text-center gap-1 ">
        <div className="text-xs font-semibold truncate">
          {title.replace(' Starter Set', '')}
        </div>
        <div className="mb-4 text-xs text-gray-600">{description}</div>

        {!subscriptionMode ? (
          <Button className="truncate">
            <span className="text-xs font-bold">
              {product.subscriptionDiscountedPrice}€
            </span>{' '}
            <span className="text-xs text-gray-400 line-through">
              {product.subscriptionOriginalPrice}€
            </span>
          </Button>
        ) : (
          <div
            className="overflow-hidden border-2 rounded-lg border-light-blue text-blue"
            onClick={editButtonHandler}
          >
            <div className="flex items-center justify-center px-1 py-2 gap-1">
              <div className="flex items-end text-xs font-bold gap-1">
                <Repeat /> {product.subscriptionDiscountedPrice}€
              </div>
              {interval && (
                <div className="text-xs whitespace-nowrap">
                  / {interval} Days
                </div>
              )}
            </div>

            <div className="w-full p-2 text-xs bg-light-blue">Customize</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductSlide
