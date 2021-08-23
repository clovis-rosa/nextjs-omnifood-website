import { createGlobalStyle } from 'styled-components'
import '@/styles/global.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

const GlobalStyle = createGlobalStyle`

`
