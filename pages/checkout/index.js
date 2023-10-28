import styles from '@/styles/Checkout.module.css'
import CartItem from '@/components/CartItem/CartItem';
import { useSession, signIn } from "next-auth/react";
import AppButton from '@/components/AppButton/AppButton';
import { useRouter } from 'next/router';

export default function Checkout({ cart, handleCart }) {
  const { data: session } = useSession();
  const router = useRouter()
  const selectedItems = cart.map((item) => ({ itemId: item._id, qty: item.qty }))
  const cartTotal = {
    gross: 0,
    taxes: 0,
    net: 0
  }
  cartTotal.gross = cart.reduce((initialValue, item) => initialValue + (item.qty * item.price), 0)
  cartTotal.taxes = (cartTotal.gross * 5 / 100).toFixed(2);
  cartTotal.net = cartTotal.gross + parseFloat(cartTotal.taxes)

  async function handleConfirmOrder() {
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: selectedItems }),
    });

    if (response.status === 200) {
      router.push('/confirmation')
      handleCart([])
    }
  }
  return (
    <div className={styles['checkout-page']}>
      <h3 className={styles['checkout-page--txt']}>Checkout</h3>
      {cart.length > 0 ? <div className={styles['checkout-summaries']}>
        {cart.map((item) => {
          return (
            <CartItem item={item} key={item._id}></CartItem>
          )
        })}
        <div className={styles['addtional-info']}>
          <textarea rows='4' cols='50' className={styles['addtional-info--txt']} placeholder='Instructions' />
          <div className={styles['gross-amt']}>
            <p className={[styles['gross-amt--field'], styles['gross-amt__value']].join(' ')}>
              <span>Gross:</span> <span>{cartTotal.gross}</span> </p>
            <p className={[styles['gross-amt--field'], styles['gross-amt__tax']].join(' ')}><span>Tax@5%: </span> <span>{cartTotal.taxes}</span> </p>
            <p className={[styles['gross-amt--field'], styles['gross-amt__total']].join(' ')}><span>Total: </span><span> {cartTotal.net} </span></p>
          </div>
        </div>
        <div className={styles['menu-order']}>
          <AppButton href='/menu' type='link' variant='secondary'>Back to menu</AppButton>

          {
            session ?
              <AppButton handleClick={handleConfirmOrder}>Confirm Order</AppButton>
              :
              <AppButton handleClick={() => signIn()}>Log in</AppButton>
          }
        </div>
      </div> :
        <div className={styles['checkout-page__no-item']}>
          <p>Please Add Items to cart</p>
          <AppButton href='/menu' type='link' variant='animated'>To the Menu</AppButton>
        </div>
      }

    </div>
  )
} 