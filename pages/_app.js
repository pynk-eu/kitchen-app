import Navigation from '@/components/Navigation/Navigation'
import '@/styles/globals.css'
import { useState } from 'react'


export default function App({ Component, pageProps }) {
  const[cart, setCart] = useState([])
  return  <>
    <Navigation/>
    <Component {...pageProps} cart={cart}/>
   </>
  }
