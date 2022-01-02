import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { useAsyncFn } from 'react-use'
import { WaterHardness } from 'types/types'
import { Countries, CountriesKeys } from 'data/countries'
import useDetectLocationData from 'hooks/useDetectLocationData'
import Location from '../../icons/Location'

const waterHardnessReference: Array<{ hardness: number; name: WaterHardness }> =
  [
    { hardness: 9, name: 'soft' },
    { hardness: 14, name: 'medium' },
  ]

const getHardnessName = (hardness: number): WaterHardness => {
  return (
    waterHardnessReference.find((ref) => hardness < ref.hardness)?.name ??
    'hard'
  )
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
  const [countryCode, setCountryCode] = useState<CountriesKeys>(
    defaultCountryValue as CountriesKeys
  )
  const [zipCode, setZipCode] = useState<string>('')
  const {
    startGeolocationDetection,
    locationData: {
      zip: detectedZipCode,
      countryCode: detectedCountry,
      isLoading: isGeolocationLoading,
      geolocationError,
    },
  } = useDetectLocationData()

  const [waterHardnessState, getWaterHardnessState] = useAsyncFn(
    async (countryCode, zip) => {
      const response = await fetch(
        `https://real-time-sponsor.com/api.v1/hardness?country_code=${countryCode}&postal_code=${zip}`
      )
      return await response.json()
    },
    []
  )

  useEffect(() => {
    if (detectedZipCode && detectedCountry) {
      makeZipCodeRequest(detectedCountry as CountriesKeys, detectedZipCode)
    }
  }, [detectedZipCode, detectedCountry])

  const makeZipCodeRequest = (country: CountriesKeys, zip: string): void => {
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
  const isDataLoading = isGeolocationLoading || waterHardnessState.loading

  return (
    <div>
      <div className="bg-gray-100 rounded-lg divide-y divide-divider">
        <div className="px-5 py-3 text-xs">
          To determine your water hardness, please select country and enter your
          zip code.
        </div>

        <div className="px-5 py-3">
          <form onSubmit={handleSubmitZipCode}>
            <div className="items-end grid gap-3 grid-cols-[118px,1fr,50px] sm:grid-cols-[150px,1fr,50px]">
              <label htmlFor="country-input" className="block">
                <span className="text-gray-700">Country</span>
                {/* eslint-disable-next-line jsx-a11y/no-onchange */}
                <select
                  id="country-input"
                  value={countryCode as string}
                  onChange={(e) =>
                    setCountryCode(e.target.value as CountriesKeys)
                  }
                  className="block w-full mt-1 text-xs border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  disabled={isDataLoading}
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
                  type="number"
                  min="0"
                  step="1"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="block w-full mt-1 text-xs border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  disabled={isDataLoading}
                />
              </label>
              <button
                type="submit"
                className="px-2 py-2 font-semibold rounded-lg hover:bg-gray-300 bg-gray-200 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:cursor-default"
                disabled={isDataLoading}
              >
                Ok
              </button>
            </div>
            {!waterHardnessState.loading &&
              waterHardnessState?.value?.error && (
                <p className="mt-2 text-xs text-red-600 text-light">
                  Error: {waterHardnessState.value.error}
                </p>
              )}
          </form>
        </div>

        <div className="px-5 py-3">
          <button
            onClick={() => startGeolocationDetection(true)}
            className="underline hover:no-underline"
          >
            <Location className="inline-block mt-[-2px] mr-1" />
            Use my location
          </button>
          {geolocationError?.code && (
            <p className="mt-2 text-xs text-red-600 text-light">
              {geolocationError.message}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default WaterHardnessForm
