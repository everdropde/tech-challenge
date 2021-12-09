import { FC, useCallback, useEffect, useState } from 'react'
import { Stepper } from 'types/types'
import { StepContext } from './Step'

type Step = {
  next: Stepper
}

export const STEPS: Record<Stepper, Step> = {
  init: {
    next: 'overview',
  },
  edit: {
    next: 'overview',
  },
  details: {
    next: 'overview',
  },
  overview: {
    next: 'waterhardness',
  },
  waterhardness: {
    next: 'checkout',
  },
  checkout: {
    next: 'init',
  },
}

export const StepProvider: FC = ({ children }) => {
  const [value, setValue] = useState<Stepper>('init')

  // prevent body scrolling
  useEffect(() => {
    if (value !== 'init') {
      window?.document.body.classList.add('overflow-hidden')
    } else {
      window?.document.body.classList.remove('overflow-hidden')
    }
  }, [value])

  const handleNext = useCallback(() => {
    setValue(STEPS[value].next)
  }, [value])

  const handleGoto = useCallback((step: Stepper) => {
    setValue(step)
  }, [])

  return (
    <StepContext.Provider
      value={{
        step: value,
        next: handleNext,
        goto: handleGoto,
      }}
    >
      {children}
    </StepContext.Provider>
  )
}
