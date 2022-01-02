import type { Dispatch, FC, SetStateAction } from 'react'
import React, { MouseEvent, useContext, useState } from 'react'
import tailwindColors from 'tailwindcss/colors'
import PrimaryButton from 'components/ui/PrimaryButton'
import ToggleButtonGroup from 'components/ui/ToggleButtonGroup'
import ToggleButton from 'components/ui/ToggleButton'
import { StepContext } from 'context/Step'
import { WaterTypes } from 'data/hardness'
import type { WaterHardness } from 'types/types'
import WaterHardnessForm from './WaterHardnessForm'
import Location from '../../icons/Location'

type StepProps = {
  hardness: WaterHardness
  setHardness: Dispatch<SetStateAction<WaterHardness>>
}

const StepWaterhadrness: FC<StepProps> = () => {
  const { next } = useContext(StepContext)
  const [isCalculatorOpened, openCalculator] = useState<boolean>(false)
  const [waterHardness, setWaterHardness] = useState<WaterHardness>(
    Object.keys(WaterTypes)[0] as WaterHardness
  )
  const [recommendedWaterHardness, setRecommendedWaterHardness] =
    useState<WaterHardness | null>(null)

  const handleWaterHardness = (
    event: MouseEvent<HTMLElement>,
    newWaterHardness: string
  ): void => {
    setWaterHardness(newWaterHardness as WaterHardness)
    setRecommendedWaterHardness(null)
    openCalculator(false)
  }

  return (
    <div className="w-full max-w-sm">
      <div className="p-4">
        <div className="mb-4 text-lg font-semibold">Your water hardness</div>

        <ToggleButtonGroup
          className="mb-4"
          onChange={handleWaterHardness}
          value={waterHardness}
        >
          {Object.keys(WaterTypes).map((item) => {
            const isRecommended = recommendedWaterHardness === item
            return (
              <ToggleButton
                key={item}
                value={item}
                className={isRecommended ? '!border-green-600' : ''}
              >
                {isRecommended && (
                  <Location
                    className="inline-block mr-1 mt-[-2px] w-[1.2em] h-[1.2em]"
                    fill={tailwindColors.green[600]}
                  />
                )}
                {WaterTypes[item as keyof typeof WaterTypes]}
              </ToggleButton>
            )
          })}
        </ToggleButtonGroup>

        {!isCalculatorOpened ? (
          <>
            <button
              onClick={() => openCalculator((status) => !status)}
              className="underline hover:no-underline"
            >
              I don't know
            </button>
          </>
        ) : (
          <WaterHardnessForm
            setWaterHardness={setWaterHardness}
            openCalculator={openCalculator}
            setRecommendedWaterHardness={setRecommendedWaterHardness}
          />
        )}
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
