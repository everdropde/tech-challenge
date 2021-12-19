import React, { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react'
import { useAsyncFn } from 'react-use'
import { WaterHardness } from 'types/types'
import { Countries } from 'data/countries'
import DetectZipCode from './DetectZipCode'
import { Button } from '../../ui/Button'

const waterHardnessGrades = [9, 14]
const waterHardnessNames: Array<WaterHardness> = ['soft', 'medium', 'hard']

const getHardnessName = (hardness: number): WaterHardness => {
  const position = waterHardnessGrades.findIndex((item) => hardness < item)
  return waterHardnessNames[
    position === -1 ? waterHardnessGrades.length : position
  ]
}

type WaterHardnessFormProps = {
  setWaterHardness: Dispatch<SetStateAction<WaterHardness>>
  openCalculator: Dispatch<SetStateAction<boolean>>
  setRecommendedWaterHardness: Dispatch<SetStateAction<WaterHardness | null>>
}

const defaultCountryValue = Object.keys(Countries)[0]

const WaterHardnessForm: FC<WaterHardnessFormProps> = ({
  setWaterHardness,
  openCalculator,
  setRecommendedWaterHardness,
}) => {
  const [countryCode, setCountryCode] = useState<keyof Countries>(
    defaultCountryValue as keyof Countries
  )
  const [zipCode, setZipCode] = useState<string>('')
  const [googleZipCode, setGoogleZipCode] = useState<string | null>(null)
  const [googleCountry, setGoogleCountry] = useState<string | null>(null)
  const [isLocationDetected, setLocationDetected] = useState<boolean>(false)

  const [waterHardnessState, getWaterHardnessState] = useAsyncFn(
    async (countryCode, zip) => {
      const response = await fetch(
        `https://real-time-sponsor.com/api.v1/hardness?country_code=${countryCode}&postal_code=${zip}`
      )
      return await response.json()
    },
    []
  )

  const makeZipCodeRequest = (country: keyof Countries, zip: string): void => {
    getWaterHardnessState(country, zip).then((result) => {
      const hardness = result?.[0]?.hardness ?? defaultCountryValue
      const error = result?.error
      if (hardness && !error) {
        const hardnessName = getHardnessName(hardness)
        setWaterHardness(hardnessName)
        setRecommendedWaterHardness(hardnessName)
        openCalculator(false)
      }
    })
  }

  const handleSubmitZipCode = (e?: FormEvent): void => {
    e?.preventDefault()
    makeZipCodeRequest(countryCode, zipCode)
  }

  return (
    <div>
      <DetectZipCode
        setGoogleZipCode={setGoogleZipCode}
        setLocationDetected={setLocationDetected}
        setGoogleCountry={setGoogleCountry}
      />
      {isLocationDetected && googleZipCode && googleCountry ? (
        <>
          <div>
            Is your Zip code:{' '}
            <span className="text-lg font-semibold">{googleZipCode}</span>
          </div>
          <div className="flex flex-wrap mt-2 gap-2">
            <Button
              onClick={() => {
                setZipCode(googleZipCode)
                setCountryCode(googleCountry as keyof Countries)
                setLocationDetected(false)
                makeZipCodeRequest(
                  googleCountry as keyof Countries,
                  googleZipCode
                )
              }}
              className="w-10"
            >
              Yes
            </Button>
            <Button onClick={() => setLocationDetected(false)} className="w-10">
              No
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="mb-6 text-sm">
            To determine your water hardness, please select country and enter
            your zip code.
          </div>

          <form onSubmit={handleSubmitZipCode}>
            <div className="items-end grid gap-3 grid-cols-[150px,1fr,50px]">
              <label htmlFor="country-input" className="block">
                <span className="text-gray-700">Country</span>
                {/* eslint-disable-next-line jsx-a11y/no-onchange */}
                <select
                  id="country-input"
                  value={countryCode as string}
                  onChange={(e) =>
                    setCountryCode(e.target.value as keyof Countries)
                  }
                  className="block w-full mt-1 text-xs border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  {Object.keys(Countries).map((item) => {
                    return (
                      <option key={item} value={item}>
                        {Countries[item as keyof typeof Countries]}
                      </option>
                    )
                  })}
                </select>
              </label>
              <label htmlFor="zip-input" className="block">
                <span className="text-gray-700">Zip code</span>
                <input
                  id="zip-input"
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="block w-full mt-1 text-xs border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              <button
                type="submit"
                className="px-2 py-2 font-semibold rounded-lg hover:bg-gray-200 bg-light-gray"
              >
                Ok
              </button>
            </div>
            {waterHardnessState.loading && <p>Loading...</p>}
            {!waterHardnessState.loading &&
              waterHardnessState?.value?.error && (
                <p className="mt-2 text-xs text-red-600 text-light">
                  Error: {waterHardnessState.value.error}
                </p>
              )}
          </form>
        </>
      )}
    </div>
  )
}

export default WaterHardnessForm
