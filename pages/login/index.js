import NewMenu from '@/components/NewMenu/NewMenu'
import styles from '@/styles/Login.module.css'
import Link from 'next/link'

export default function Login() {
  return (
    <div className={styles["signup-page"]}>
      <div className={styles["signup-page--text"]}>
        <h3>Register with us for a seamless experience</h3>
      </div>
      <NewMenu />
      <div className={styles["singup-page--users"]}>
        <p>Already have account?<Link href={'/login'}>Login here</Link></p>
      </div>

    </div>
  )
}