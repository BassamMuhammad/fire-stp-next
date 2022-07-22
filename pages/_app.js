import Head from "next/head"
import Script from "next/script"
import { AuthProvider } from "../contexts/AuthContext"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Course app template - Sell online courses</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" 
      crossOrigin="anonymous" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" 
      crossOrigin="anonymous" />
      <Script type="module" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js" />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp