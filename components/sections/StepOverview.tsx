import { FC, useContext, Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { StepContext } from 'context/Step'
import ProductSlider from 'components/sections/ProductSlider'
import PrimaryButton from 'components/ui/PrimaryButton'
import PanelHeader from 'components/ui/PanelHeader'
import { Button } from 'components/ui/Button'

type Props = {
  focusSlide: number
  setFocusSlide: Dispatch<SetStateAction<number>>
}

const StepOverview: FC<Props> = ({ focusSlide, setFocusSlide }) => {
  const { next, goto } = useContext(StepContext)

  return (
    <div className="w-full max-w-3xl">
      <div className="p-4">
        <div className="divide-y-2 divide-solid">
          <div className="pb-6">
            <PanelHeader
              className="mb-1"
              headline="Starter-Box"
              subline="70€ Discount"
            />
            <div className="mb-4 text-xs">19-piece starter set</div>

            <div className="flex items-center">
              <div className="flex-1">
                <Image
                  quality="85"
                  src={'/starter-box.png'}
                  alt="verified"
                  height={70}
                  width={130}
                  layout="fixed"
                />
              </div>

              <Button className="ml-6" onClick={() => goto('details')}>
                One time 79,99€
              </Button>
            </div>
          </div>

          <div className="py-6">
            <PanelHeader
              className="mb-1"
              headline="Refill products"
              subline="3x 10€ Discount"
            />

            <div className="mb-4 text-xs">
              You will receive these products regularly
            </div>

            <ProductSlider
              subscriptionMode
              focusSlide={focusSlide}
              setFocusSlide={setFocusSlide}
            />
          </div>

          <div className="pt-6 text-xs text-center">
            <p className="mx-auto max-w-prose">
              You can adjust the delivery intervals of your refill products at
              any time or cancel individual products{' '}
            </p>

            <span role="img" aria-label="like">
              👍🏻
            </span>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 flex flex-col items-center z-2 bg-panel md:items-center">
        <div className="p-4">
          <PrimaryButton onClick={next}>Next</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default StepOverview
