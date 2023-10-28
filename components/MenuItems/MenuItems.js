import MenuItem from "../MenuItem/MenuItem"
import styles from "./MenuItems.module.css"


export default function MenuItems({ menuItems, updateQty, handelAddToCart }) {
  return (
    <div className={styles['menu-items']} >
      {
        menuItems.map((menu) => {
          return (
            <MenuItem menu={menu} updateQty={updateQty} handelAddToCart={handelAddToCart} key={menu._id}></MenuItem>
          )
        })}
    </div>
  )



}