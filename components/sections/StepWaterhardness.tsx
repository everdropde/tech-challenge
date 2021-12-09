import { useContext } from 'react'
import PrimaryButton from 'components/ui/PrimaryButton'

import { StepContext } from 'context/Step'

import type { FC, Dispatch, SetStateAction } from 'react'
import type { WaterHardness } from 'types/types'

type StepProps = {
  hardness: WaterHardness
  setHardness: Dispatch<SetStateAction<WaterHardness>>
}

const StepWaterhadrness: FC<StepProps> = () => {
  const { next } = useContext(StepContext)

  return (
    <div className="w-full max-w-sm">
      <div className="p-4">
        <div className="mb-4 text-lg font-semibold">Your water hardness</div>

        <div className="mb-6 text-sm">
          To determine your water hardness, please enter your zip code.
        </div>

        {/* TODO: implement a waterhardness calculator */}

        <div className="p-4 text-base text-center bg-gray-300 rounded-lg">
          TODO: implement a waterhardness calculator
        </div>
      </div>

      <div className="sticky bottom-0 flex flex-col z-2 bg-panel md:items-center">
        <div className="p-4">
          <PrimaryButton onClick={next}>To the cart</PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default StepWaterhadrness
