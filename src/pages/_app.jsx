import { createGlobalStyle, StyleSheetManager } from 'styled-components'
import '@/styles/global.scss'

export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager
      disableVendorPrefixes={process.env.NODE_ENV === 'development'}
    >
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </StyleSheetManager>
  )
}

const GlobalStyle = createGlobalStyle`

`
