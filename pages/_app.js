import Layout from '../layout/layout'
import 'react-toastify/dist/ReactToastify.min.css'
function MyApp({ Component, pageProps }) {
  return(
    <Layout>
     <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
