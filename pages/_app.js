import '@/styles/globals.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    background-color: #eee;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
