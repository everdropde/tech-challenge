import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useAsyncFn } from 'react-use'
import useGeolocation from 'hooks/useGeolocation'
import { Countries } from '../data/countries'

type GoogleGeocoderResponse = { results?: google.maps.GeocoderResult[] }
const findInGoogleGeocoderDataByType = (
  data: GoogleGeocoderResponse,
  type: string
) =>
  data?.results?.[0]?.address_components?.find((item) => item.types[0] === type)

type LocationStateType = {
  zip?: string
  countryCode?: keyof Countries
  isDetected: boolean
}

function useDetectLocationData(): {
  startGeolocationDetection: Dispatch<SetStateAction<boolean>>
  locationData: LocationStateType & { isLoading: boolean, geolocationError?: GeolocationPositionError }
} {
  const [locationData, setLocationData] = useState<LocationStateType>({
    isDetected: false,
  })
  const { startGeolocationDetection, latitude, longitude, error: geolocationError } = useGeolocation()

  const [mapGeocodeState, getMapGeocodeState] = useAsyncFn(async (lat, lng) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`
    )
    return await response.json()
  }, [])

  useEffect(() => {
    if (!latitude || !longitude) {
      return
    }
    getMapGeocodeState(latitude, longitude).then(
      (result: GoogleGeocoderResponse) => {
        const detectedZipCode = findInGoogleGeocoderDataByType(
          result,
          'postal_code'
        )?.long_name
        const detectedCountryCode = findInGoogleGeocoderDataByType(
          result,
          'country'
        )?.short_name

        if (
          detectedZipCode &&
          detectedCountryCode &&
          Object.keys(Countries).includes(detectedCountryCode.toLowerCase())
        ) {
          setLocationData({
            zip: detectedZipCode,
            countryCode: detectedCountryCode.toLowerCase() as keyof Countries,
            isDetected: true,
          })
        }
      }
    )
  }, [latitude, longitude])

  return {
    startGeolocationDetection,
    locationData: { ...locationData, isLoading: mapGeocodeState.loading, geolocationError },
  }
}

export default useDetectLocationData
