import React, { FC, Dispatch, SetStateAction, useEffect } from 'react'
import { useAsyncFn, useGeolocation } from 'react-use'
import { Countries } from 'data/countries'

type GoogleGeocoderResponse = { results?: google.maps.GeocoderResult[] }
const findInGoogleGeocoderDataByType = (
  data: GoogleGeocoderResponse,
  type: string
) =>
  data?.results?.[0]?.address_components?.find((item) => item.types[0] === type)

type DetectZipCodeProps = {
  setGoogleZipCode: Dispatch<SetStateAction<string | null>>
  setGoogleCountry: Dispatch<SetStateAction<string | null>>
  setLocationDetected: Dispatch<SetStateAction<boolean>>
}

const DetectZipCode: FC<DetectZipCodeProps> = ({
  setGoogleZipCode,
  setGoogleCountry,
  setLocationDetected,
}) => {
  const { latitude, longitude } = useGeolocation()

  const [mapGeocodeState, getMapGeocodeState] = useAsyncFn(async (lat, lng) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`
    )
    return await response.json()
  }, [])

  useEffect(() => {
    if (latitude && longitude) {
      getMapGeocodeState(latitude, longitude).then(
        (result: GoogleGeocoderResponse) => {
          const googleZipCode = findInGoogleGeocoderDataByType(
            result,
            'postal_code'
          )?.long_name
          const googleCountryCode = findInGoogleGeocoderDataByType(
            result,
            'country'
          )?.short_name

          if (
            googleZipCode &&
            googleCountryCode &&
            Object.keys(Countries).includes(googleCountryCode.toLowerCase())
          ) {
            setGoogleZipCode(googleZipCode)
            setGoogleCountry(googleCountryCode.toLowerCase())
            setLocationDetected(true)
          }
        }
      )
    }
  }, [latitude, longitude])

  return null
}

export default DetectZipCode
