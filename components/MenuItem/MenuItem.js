import { IconMinus, IconPlus } from '@tabler/icons-react'
import Image from "next/image"
import styles from "./MenuItem.module.css"
import AppButton from '../AppButton/AppButton'


export default function MenuItem({ menu, updateQty, handelAddToCart }) {
  return (
    <div className={styles['menu-item']} key={menu._id}>
      <div className={styles['menu-item--img']}>
        <Image src={menu.image} height='150' width='150' alt={menu.name} />
      </div>
      <div className={styles['menu-item__details']}>
        <p className={styles['menu-item__details--name']}>{menu.name}</p>
        <p className={styles['menu-item__details--price']}>€{menu.price}</p>
      </div>
      <div className={styles['menu-item__options']}>
        {
          !menu.qty
            ?
            <AppButton handleClick={() => handelAddToCart(menu)}>Add</AppButton>
            :
            <div className={styles['qty-selector']}>
              <AppButton variant='transparent' handleClick={() => updateQty(menu, false)}><IconMinus /></AppButton>
              <span>{menu.qty}</span>
              <AppButton variant='transparent' handleClick={() => updateQty(menu, true)}><IconPlus /></AppButton>
            </div>
        }
      </div>
    </div>
  )
}