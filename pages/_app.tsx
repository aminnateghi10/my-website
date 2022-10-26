import '../styles/globals.css'
import '../styles/app.scss'
import '../styles/style.css'
import '../styles/animate.css'
import '../styles/simple-line-icons.css'
import '../styles/rtl.css'
import type { AppProps } from 'next/app'
import i18next from "../app/helpers/i8n";




function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
