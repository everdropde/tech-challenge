import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export interface GeoLocationSensorState {
  loading: boolean
  accuracy: number | null
  altitude: number | null
  altitudeAccuracy: number | null
  heading: number | null
  latitude: number | null
  longitude: number | null
  speed: number | null
  timestamp: number | null
  error?: GeolocationPositionError
}

const useGeolocation = (
  options?: PositionOptions
): GeoLocationSensorState & {
  startGeolocationDetection: Dispatch<SetStateAction<boolean>>
} => {
  const [state, setState] = useState<GeoLocationSensorState>({
    loading: true,
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
    timestamp: Date.now(),
  })
  const [isGeolocationDetectionStarted, startGeolocationDetection] =
    useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(true)
  let watchId: number
  console.log('state', state)
  const onEvent = (event: GeolocationPosition): void => {
    if (mounted) {
      setState({
        loading: false,
        accuracy: event.coords.accuracy,
        altitude: event.coords.altitude,
        altitudeAccuracy: event.coords.altitudeAccuracy,
        heading: event.coords.heading,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
        timestamp: event.timestamp,
      })
    }
  }
  const onEventError = (error: GeolocationPositionError): void => {
    mounted && setState((oldState) => ({ ...oldState, loading: false, error }))
  }

  useEffect(() => {
    if (isGeolocationDetectionStarted) {
      navigator.geolocation.getCurrentPosition(onEvent, onEventError, options)
      watchId = navigator.geolocation.watchPosition(
        onEvent,
        onEventError,
        options
      )
    }

    return () => {
      setMounted(false)
      navigator.geolocation.clearWatch(watchId)
    }
  }, [isGeolocationDetectionStarted])

  return { startGeolocationDetection, ...state }
}

export default useGeolocation
