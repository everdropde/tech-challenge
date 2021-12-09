import type { AppProps } from 'next/app'
import 'assets/main.css'

import { StepProvider } from 'context/StepProvider'
import { BundleProvider } from 'context/BundleProvider'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <StepProvider>
      <BundleProvider>
        <Component {...pageProps} />
      </BundleProvider>
    </StepProvider>
  )
}

export default App
