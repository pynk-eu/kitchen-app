import styles from '@/styles/Menu.module.css'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function Menu({ cart, handleCart }) {
  const { data, error, isLoading } = useSWR('/api/menus', fetcher)

  const [menuItems, setMenuItems] = useState([])
  useEffect(() => {
    const list = data && data.map((d) => {
      d.qty = 0;
      return d;
    })

    setMenuItems(list || [])
  }, [data])
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  function handelAddToCart(menu) {
    menu.qty = menu.qty + 1;
    const updatedCart = [...cart, { ...menu }]
    handleCart(updatedCart);

    const updatedMenuItems = menuItems.map((m) => {
      if (menu._id === m._id) {
        m.qty = menu.qty
      }
      return m;
    })
    setMenuItems(updatedMenuItems)

  }

  const updateQty = (menu, isIncrease) => {
    let newQty = menu.qty;
    if (isIncrease) {
      newQty = menu.qty + 1
    } else {
      newQty = menu.qty - 1
    }

    cart.forEach((c) => {
      if (menu._id === c._id) {
        c.qty = newQty
      }
    })
    handleCart([...cart]);

    const updatedMenuItems = menuItems.map((m) => {
      if (menu._id === m._id) {
        m.qty = newQty
      }
      return m;
    })
    setMenuItems(updatedMenuItems)
  }

  return (
    <div className={styles['menu-page']}>
      <h3 className={styles['menu-item--text']}>On menu today...</h3>
      <div className={styles['menu-items']} >
        {
          menuItems.map((menu) => {
            return (
              <div className={styles['menu-item']} key={menu._id}>
                <div className={styles['menu-item--img']}>
                  <Image src={menu.image} height='150' width='150' alt={menu.name} />
                </div>
                <div className={styles['menu-item__details']}>
                  <p className={styles['menu-item__details--name']}>{menu.name}</p>
                  <p className={styles['menu-item__details--price']}>€{menu.price}</p>
                </div>
                <div className={styles['menu-item--button']}>
                  {
                    !menu.qty
                      ?
                      <button onClick={() => handelAddToCart(menu)} className={styles['btn-wrapper']}>Add</button>
                      :
                      <div className='qty-selector'>
                        <button onClick={() => updateQty(menu, false)}><IconMinus /></button>
                        <span>{menu.qty}</span>
                        <button onClick={() => updateQty(menu, true)}><IconPlus /></button>
                      </div>
                  }
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}       