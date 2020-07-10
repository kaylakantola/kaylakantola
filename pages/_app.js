import '../assets/styles/styles.css'
import { useRouter } from 'next/router'

function App ({Component, pageProps}) {
  const router = useRouter()
  return <Component {...pageProps} key={router.route} />
}
export default App