
import type { AppProps } from 'next/app'
import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import Theme from '../styles/Theme'
import { TaskProvider } from '../context/TaskContext'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TaskProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </TaskProvider>
        
  ) 
}

export default MyApp
