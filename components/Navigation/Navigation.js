import Link from "next/link";
import styles from './Navigation.module.css'
import { IconShoppingCart } from "@tabler/icons-react";

export default function Navigation({cart}){
  // console.log("cart is", cart);
  return(
    <div className={styles['nav-bar']}>
    <div className={styles['nav-bar--logo']}>
    <h3>My Kitchen</h3>
    </div>
    <div className={styles['nav-bar__link']}> <Link href={"./"}>Home</Link>
    <Link href={"./menu"}>Menu</Link>
    <Link href="/checkout"><p>
        <IconShoppingCart/>
        <span>{cart?.length}</span>
      </p>
    </Link>
    <Link href={"./login"}>Login/Signup</Link>
    </div>
    </div>
    
  )
}