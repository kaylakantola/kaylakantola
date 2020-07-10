import '../assets/styles/styles.css'
import { useRouter } from 'next/router'
import Layout from '../components/layout'

function App ({Component, pageProps}) {
  const router = useRouter()
  return (<Layout><Component {...pageProps} key={router.route} /></Layout>)
}
export default App