import styles from '@/styles/Checkout.module.css'
import Image from 'next/image'
import { useSession, signIn } from "next-auth/react";
import Link from 'next/link';

export default function Checkout({ cart }) {
  const { data: session } = useSession();
  const userId = session?.user?.userId
  const selectedItems = cart.map((item) => ({ itemId: item._id, qty: item.qty }))
  let totalCartValue = cart.reduce((initialValue, item) => initialValue + (item.qty * item.price), 0)

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
      {cart.length > 0 ? <div className={styles['checkout-summaries']}>
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
            <p className={styles['gross-amt__value']} >Gross:{totalCartValue} </p>
            <p className={styles['gross-amt__tax']}>Tax@5%: {totalCartValue * 5 / 100} </p>
            <p className={styles['gross-amt__total']}>Total: </p>
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
      </div> : <p>Please Add Items to cart</p>}

    </div>
  )
} 