import styles from '@/styles/Checkout.module.css'
import Image from 'next/image'

export  default function Checkout({cart}){

  return(
    <div className={styles['checkout-page']}>
      <h3 className={styles['checkout-page--txt']}>Checkout</h3>
      <div className={styles['checkout-summaries']}>
          {cart.map((item) =>{ return (
           <div className={styles['checkout-summaries__items']}>
           <Image src={item.image} height='80' width='80' alt={item.name} className={styles['checkout-summaries__items--image']}/>
           <p className={styles['checkout-summaries__items--name']}>{item.name}</p>
           <p className={styles['checkout-summaries__items--qty']}>Qty: 1</p>
           <p className={styles['checkout-summaries__items--price']}>€{item.price}</p>
           <p className={styles['checkout-summaries__items--total']}>€ 19.00</p>
           </div>
        )})}
            
         <div className={styles['addtional-info']}>
          <input className={styles['addtional-info--txt']} placeholder='Instructions' />
       
       <div className={styles['gross-amount']}>
         <p>Gross</p>
         <p>Tax @ 5%</p>
         <p>Total</p>
       </div>
       </div>
        <div className={styles['menu-order--btn']}>
        <button className={['menu-button']}>Back to menu</button>
        <button className={['order-button']}>Confirm Order</button>
       </div>       
    </div>
    </div>
  )
} 