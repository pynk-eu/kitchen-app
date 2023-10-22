import Link from "next/link";
import styles from './Navigation.module.css'

export default function Navigation(){
  return(
    <div className={styles['nav-bar']}>
    <div className={styles['nav-bar--logo']}>
    <h3>My Kitchen</h3>
    </div>
    <div className={styles['nav-bar__link']}> <Link href={"./"}>Home</Link>
    <Link href={"./menu"}>Menu</Link>
    <Link href={"./login"}>Login/Signup</Link>
    </div>
    </div>
    
  )
}