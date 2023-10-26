import styles from '@/styles/Checkout.module.css'
import Image from 'next/image'
import { useSession, signIn } from "next-auth/react";
import Link from 'next/link';

export default function Checkout({ cart }) {
  const { data: session } = useSession();
  const userId = session?.user?.userId
  const selectedItems = cart.map((item) => ({ itemId: item._id, qty: item.qty }))

  async function handleConfirmOrder() {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: selectedItems }),
    });
  }
  return (
    <div className={styles['checkout-page']}>
      <h3 className={styles['checkout-page--txt']}>Checkout</h3>
      <div className={styles['checkout-summaries']}>
        {cart.map((item) => {
          return (
            <div className={styles['checkout-summaries__items']} key={item._id}>
              <Image src={item.image} height='80' width='80' alt={item.name} className={styles['checkout-summaries__items--image']} />
              <p className={styles['checkout-summaries__items--name']}>{item.name}</p>
              <p className={styles['checkout-summaries__items--qty']}>Qty: {item.qty}</p>
              <p className={styles['checkout-summaries__items--price']}>€{item.price}</p>
              <p className={styles['checkout-summaries__items--total']}>€{item.qty * item.price}</p>
            </div>
          )
        })}
        <div className={styles['addtional-info']}>
          <textarea rows='4' cols='50' className={styles['addtional-info--txt']} placeholder='Instructions' />
          <div className={styles['gross-amt']}>
            <input className={styles['gross-amt__value']} type='text' name='gross' placeholder='Gross' />
            <input className={styles['gross-amt__tax']} type='text' name='tax' placeholder='Tax @ 5%' />
            <input className={styles['gross-amt__total']} type='text' name='total-amount' placeholder='Total' />
          </div>
        </div>
        <div className={styles['menu-order']}>
          <Link href='./menu' className={styles['menu-order__button']}>Back to menu</Link>

          {
            session ?
              <button onClick={handleConfirmOrder} className={styles['menu-order__order-btn']}>Confirm Order</button>
              :
              <button className={styles['signin-btn']} onClick={() => signIn()}>Log in</button>
          }

        </div>
      </div>
    </div>
  )
} 