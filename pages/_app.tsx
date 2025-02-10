
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link href="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link href="/work" style={{ marginRight: '15px' }}>Work</Link>
        <Link href="/about" style={{ marginRight: '15px' }}>About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
