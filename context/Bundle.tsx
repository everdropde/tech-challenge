import { createContext, Dispatch, SetStateAction } from 'react'
import { Bundle, BundleComponent } from 'types/types'

export const BundleContext = createContext<{
  bundle: Bundle
  productID?: BundleComponent['product_id']
  setBundle: Dispatch<SetStateAction<Bundle>>
  setProductID: Dispatch<
    SetStateAction<BundleComponent['product_id'] | undefined>
  >
}>({
  bundle: [],
  setBundle: () => {},
  setProductID: () => {},
})
