import Navigation from '@/components/Navigation/Navigation'
import '@/styles/globals.css'
import { useState } from 'react'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [cart, setCart] = useState([])
  return <>
    <SessionProvider session={session}>
      <Navigation cart={cart} />
      <Component {...pageProps} cart={cart} handleCart={setCart} />
    </SessionProvider>
  </>
}
