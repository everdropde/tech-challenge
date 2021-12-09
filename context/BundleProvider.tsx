import { FC, useState } from 'react'
import { BundleContext } from './Bundle'
import { subscriptionProducts } from 'data/products'
import { BundleComponent } from 'types/types'

export const BundleProvider: FC = ({ children }) => {
  const [bundle, setBundle] = useState(subscriptionProducts)
  const [productID, setProductID] = useState<BundleComponent['product_id']>()

  return (
    <BundleContext.Provider
      value={{
        bundle,
        productID,
        setBundle,
        setProductID,
      }}
    >
      {children}
    </BundleContext.Provider>
  )
}
