import Navigation from '@/components/Navigation/Navigation'
import '@/styles/globals.css'
import { useState } from 'react'


export default function App({ Component, pageProps }) {
  const[cart, setCart] = useState([])
  return  <>
    <Navigation cart={cart} />
    <Component {...pageProps} cart={cart} handleCart= {setCart}/>
   </>
  }
