import {NextPage} from "next";
import {Provider} from 'react-redux'
import type {AppProps} from 'next/app'
import {ReactElement, ReactNode} from "react";
import {ToastContainer} from "react-toastify";

import {store} from "../app/store/index";

//style
import 'swiper/css';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css';

import '../public/styles/simple-line-icons.css'
import '../public/styles/style.css'
import '../public/styles/admin-styles.css'
// import '../public/styles/rtl.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const MyApp = ({Component, pageProps}: AppPropsWithLayout) => {

    const getLayout = Component.getLayout ?? (page => page)

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

export default MyApp;
