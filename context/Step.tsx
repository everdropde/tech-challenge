import { createContext } from 'react'
import { Stepper } from 'types/types'

export const StepContext = createContext<{
  step: Stepper
  next: () => void
  goto: (s: Stepper) => void
}>({
  step: 'init',
  next: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  goto: (_: Stepper) => {},
})
