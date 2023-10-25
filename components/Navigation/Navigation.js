import Link from "next/link";
import styles from './Navigation.module.css'
import { IconShoppingCart } from "@tabler/icons-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navigation({ cart }) {
  const { data: session } = useSession()
  return (
    <div className={styles['nav-bar']}>
      <div className={styles['nav-bar--logo']}>
        <h3>My Kitchen</h3>
      </div>
      <div className={styles['nav-bar__link']}> <Link href={"./"}>Home</Link>
        <Link href={"./menu"}>Menu</Link>
        <Link href="/checkout"><p>
          <IconShoppingCart />
          <span>{cart?.length}</span>
        </p>
        </Link>
        <p>Welcome {session?.user.name.split(' ')[0]}</p>
        <button className={styles['sign-in--btn']} onClick={() => signIn()}>Log in</button>
      </div>
    </div>

  )
}