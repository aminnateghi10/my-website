import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/simple-line-icons.css'
import '../styles/globals.css'
import '../styles/app.scss'
import '../styles/style.css'
import '../styles/admin-styles.css'
import '../styles/animate.css'
// import '../styles/rtl.css'
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app'
import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import {ToastContainer} from "react-toastify";
import {store} from "../app/store/index";


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
const getLayout =Component.getLayout ?? (page => page)

  return getLayout(
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
      </Provider>
  )
}

export default MyApp
