import MenuItems from '@/components/MenuItems/MenuItems'
import styles from '@/styles/Menu.module.css'
import { useEffect, useState } from 'react'
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function Menu({ cart, handleCart }) {
  const { data, error, isLoading } = useSWR('/api/menus', fetcher)

  const [menuItems, setMenuItems] = useState([])
  useEffect(() => {
    const list = data && data.map((listItem) => {
      const itemsAddedToCart = cart.filter((cartItem) => {
        return cartItem._id === listItem._id
      })
      if (!itemsAddedToCart.length) {
        listItem.qty = 0;
      } else {
        listItem.qty = itemsAddedToCart[0].qty;
      }
      return listItem;
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
    let newQty;
    if (isIncrease) {
      newQty = menu.qty + 1
    } else {
      newQty = menu.qty - 1
    }

    let matchedItemIdx = -1;
    const itemInCart = cart.find((cartItem, idx) => {
      matchedItemIdx = idx;
      return cartItem._id === menu._id
    })

    if (newQty < 1) {
      cart.splice(matchedItemIdx, 1)
    } else {
      itemInCart.qty = newQty
    }

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
      <MenuItems menuItems={menuItems} updateQty={updateQty} handelAddToCart={handelAddToCart}></MenuItems>
    </div>
  )
}       