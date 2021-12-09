import Slider from 'rc-slider'
import { useState, FC } from 'react'
import type { BundleComponent, ProductType } from 'types/types'

import 'rc-slider/assets/index.css'

const sliderConfig = {
  cleaning_tabs: {
    question: 'How often a week do you clean in your household?',
    sliderMax: 10,
  },
  stain_powder: {
    question: 'How often do you use stain powder per week?',
    sliderMax: 20,
  },
  dishwasher_tabs: {
    question: 'How often do you use your dishwasher per week?',
    sliderMax: 20,
  },
  laundry_detergent: {
    question: 'How often do you wash per week?',
    sliderMax: 20,
  },
  toilet_tabs: {
    question: 'How many toilets do you have in your household?',
    sliderMax: 5,
  },
  toilet_cleaner: {
    question: 'How many toilets do you have in your household?',
    sliderMax: 5,
  },
  accessories: { sliderMax: 5, question: 'How much do you want' },
}

const frequencyToSlider = (
  interval: number,
  calculation_factor: number
): number => {
  return (calculation_factor / interval) * 7
}

const sliderToFrequency = (
  sliderValue: number,
  calculation_factor: number
): number => {
  return Math.floor((calculation_factor / sliderValue) * 7)
}

type Props = {
  productType: ProductType
  usages: number
  interval: number
  productID: BundleComponent['product_id']
  onChange: (id: BundleComponent['product_id'], freq: number) => void
}

const FrequencySlider: FC<Props> = (props) => {
  const { productType, usages, interval, productID, onChange } = props

  const sliderMax = sliderConfig[productType].sliderMax
  const initialSliderValue = frequencyToSlider(interval, usages)
  const clampedValue = Math.min(sliderMax, Math.ceil(initialSliderValue))

  const [sliderValue, setSliderValue] = useState(clampedValue)

  const sliderChangeHandler = (value: number): void => {
    setSliderValue(value)
    onChange(productID, sliderToFrequency(value, usages))
  }

  return (
    <div className="p-6 rounded-xl bg-light-gray">
      {productType && (
        <div className="mb-4 text-base font-semibold">
          {sliderConfig[productType].question}
        </div>
      )}

      <div className="flex items-center justify-between">
        <Slider
          min={1}
          max={sliderMax}
          className="flex-1"
          defaultValue={sliderValue}
          trackStyle={{ backgroundColor: '#ededed', height: 7, marginTop: -1 }}
          railStyle={{ backgroundColor: '#ededed', height: 7, marginTop: -1 }}
          handleStyle={{
            backgroundColor: '#656565',
            borderColor: '#656565',
            height: 24,
            width: 24,
            boxShadow: 'none',
            marginTop: -10,
          }}
          onChange={sliderChangeHandler}
        />

        <div className="flex-shrink-0 w-16 text-2xl font-semibold text-right font-display">
          {sliderValue}×
        </div>
      </div>
    </div>
  )
}

export default FrequencySlider
