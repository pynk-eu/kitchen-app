import Navigation from '@/components/Navigation/Navigation'
import '@/styles/globals.css'
import { useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [cart, setCart] = useLocalStorageState('cart', { defaultValue: [] })
  return <>
    <SessionProvider session={session}>
      <Navigation cart={cart} />
      <Component {...pageProps} cart={cart} handleCart={setCart} />
    </SessionProvider>
  </>
}
