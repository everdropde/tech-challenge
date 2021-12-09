import { useCallback, useContext } from 'react'
import Image from 'next/image'
import FrequencySlider from 'components/FrequencySlider'
import PrimaryButton from 'components/ui/PrimaryButton'
import Repeat from 'components/icons/Repeat'
import { StepContext } from 'context/Step'
import { BundleContext } from 'context/Bundle'

import type { FC } from 'react'

const StepOverview: FC = () => {
  const { next } = useContext(StepContext)
  const { bundle, productID, setBundle } = useContext(BundleContext)

  const product = bundle.find((item) => item.product_id === productID)
  const cartItemInterval = product?.order_interval_frequency

  const sliderChangeHandler = useCallback((productID, freq) => {
    setBundle((b) =>
      b.map((item) => {
        if (item.product_id === productID) {
          item.order_interval_frequency = freq
          item.charge_interval_frequency = freq
        }
        return item
      })
    )
  }, [])

  return (
    <div className="w-full max-w-sm">
      <div className="p-4">
        <div className="mb-8 text-lg font-semibold">Delivery interval</div>

        {product && (
          <>
            <div className="flex flex-col items-center mb-10 gap-4">
              <Image
                quality="85"
                src={product.image}
                alt={product.title}
                height={104}
                width={104}
                layout="fixed"
              />

              <div className="text-center">
                <div className="mb-2 text-base font-semibold">
                  {product.title}
                </div>
                <div className="text-xs">{product.description_short}</div>
              </div>

              <div className="text-center text-blue">
                <div className="mb-2 text-sm font-semibold">
                  Delivery interval
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Repeat height={24} width={24} />
                  <p className="text-2xl font-bold">{cartItemInterval} Days</p>
                </div>
              </div>
            </div>

            {cartItemInterval && product.usages && (
              <FrequencySlider
                productID={product.product_id}
                productType={product.product_type}
                usages={product.usages}
                interval={cartItemInterval}
                onChange={sliderChangeHandler}
              />
            )}
          </>
        )}
      </div>

      <div className="sticky bottom-0 flex flex-col z-2 bg-panel md:items-center">
        <div className="p-4">
          <PrimaryButton onClick={next}>Save</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default StepOverview
