import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import LoginForm from '../components/login_form'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
