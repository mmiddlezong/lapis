import Head from "next/head";
import Layout from '../components/layout'
import { SessionProvider } from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={ pageProps.session }>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    
  )
}

export default MyApp
