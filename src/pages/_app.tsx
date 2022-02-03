import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { light, dark } from '../styles/themes'
import { GlobalStyles } from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
