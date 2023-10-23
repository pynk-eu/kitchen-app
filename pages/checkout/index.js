import styles from '@/styles/Checkout.module.css'
import Image from 'next/image'

export  default function Checkout(){
  return(
    <div className={styles['checkout-page']}>
      <h3 className={styles['checkout-page--txt']}>Checkout</h3>
      <div className={styles['checkout-summaries']}>
        <div className={styles['checkout-summaries__items']}>
          <Image src= '/chole 1.png' height='80' width='80' alt='chole' className={styles['checkout-summaries__items--image']}/>
          <p className={styles['checkout-summaries__items--name']}>Chole Bhature</p>
          <p className={styles['checkout-summaries__items--qty']}>Qty: 2</p>
          <p className={styles['checkout-summaries__items--price']}>€ 9.50</p>
          <p className={styles['checkout-summaries__items--total']}>€ 19.00</p>
        </div>

        <div className={styles['checkout-summaries__items']}>
          <Image src= '/chole 1.png' height='80' width='80' alt='chole' className={styles['checkout-summaries__items--image']}/>
          <p className={styles['checkout-summaries__items--name']}>Chole Bhature</p>
          <p className={styles['checkout-summaries__items--qty']}>Qty: 2</p>
          <p className={styles['checkout-summaries__items--price']}>€ 9.50</p>
          <p className={styles['checkout-summaries__items--total']}>€ 19.00</p>
        </div>
      </div>
      {/* <div className={styles['addtional-info']}>
        <input className={styles['addtional-instructions--txt']} placeholder='Instructions' />
      <div className={styles['gross-amount']}>
         <p>Gross</p>
         <p>Tax @ 5%</p>
         <p>Total</p>
       </div>
      </div>
      <div classname={styles['menu-order--btn']}>
        <button onClick className={['menu-button']}>Back to menu</button>
        <button  onClick className={['order-button']}>Confirm Order</button>
      </div>
       */}
    </div>
  )
} 