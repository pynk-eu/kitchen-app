import styles from "./CartItem.module.css"
import Image from 'next/image'
export default function CartItem({ item }) {
  return (
    <div className={styles['checkout-summaries__items']} key={item._id}>
      <Image src={item.image} height='80' width='80' alt={item.name} className={styles['checkout-summaries__items--image']} />
      <p className={styles['checkout-summaries__items--name']}>{item.name}</p>
      <p className={styles['checkout-summaries__items--qty']}>Qty: {item.qty}</p>
      <p className={styles['checkout-summaries__items--price']}>€{item.price}</p>
      <p className={styles['checkout-summaries__items--total']}>€{item.qty * item.price}</p>
    </div>
  )
}