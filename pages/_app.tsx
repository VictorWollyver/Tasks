
import type { AppProps } from 'next/app'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import Theme from '../styles/Theme'


function MyApp({ Component, pageProps }: AppProps) {
  return (
        <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
  ) 
}

export default MyApp
