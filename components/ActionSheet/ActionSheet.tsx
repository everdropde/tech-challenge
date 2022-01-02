import { FC, useState, useEffect, useContext, MouseEvent } from 'react'
import { WaterHardness } from 'types/types'

import StepOverview from 'components/sections/StepOverview'
import StepWaterhardness from 'components/sections/StepWaterhardness'
import StepEditInterval from 'components/sections/StepEditInterval'
import StepCheckout from 'components/sections/StepCheckout'
import { StepContext } from 'context/Step'
import { BundleContext } from 'context/Bundle'
import StepDetails from 'components/sections/StepDetails'

type Props = {
  position?: 'relative' | 'fixed'
}

export const ActionSheet: FC<Props> = () => {
  const { step, goto } = useContext(StepContext)
  const { bundle, setBundle } = useContext(BundleContext)
  const [hardness, setHardness] = useState<WaterHardness>('hard')
  const [focusSlide, setFocusSlide] = useState(0)

  useEffect(() => {
    setBundle((bundle) =>
      bundle.map((item) => {
        item.variant_id = item.variant_ids?.[hardness] ?? item.variant_ids?.hard

        return item
      })
    )
  }, [hardness, setBundle])

  const parentHandler = (): void => {
    goto('init')
  }

  const childHandler = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation()
    return
  }

  return (
    <>
      {step !== 'init' && (
        <div
          onClick={parentHandler}
          className="fixed top-0 bottom-0 left-0 right-0 z-10 flex items-end justify-center bg-gray-900 bg-opacity-40 md:items-center"
        >
          <div
            onClick={childHandler}
            className="w-full md:w-auto md:min-w-[50%] overflow-auto max-h-95vh bg-panel rounded-t-xl shadow-bottom-panel md:rounded-b-xl md:px-8"
          >
            {step === 'overview' && (
              <StepOverview
                focusSlide={focusSlide}
                setFocusSlide={setFocusSlide}
              />
            )}
            {step === 'details' && <StepDetails />}
            {step === 'waterhardness' && (
              <StepWaterhardness
                hardness={hardness}
                setHardness={setHardness}
              />
            )}
            {step === 'edit' && <StepEditInterval />}
            {step === 'checkout' && <StepCheckout />}
          </div>
        </div>
      )}
    </>
  )
}

export default ActionSheet
