import NewMenu from '@/components/NewMenu/NewMenu'
import styles from '@/styles/NewMenuItems.module.css'
import Link from 'next/link'

export default function NewMenuItems() {
  return (
    <div className={styles["signup-page"]}>
      <div className={styles["signup-page--text"]}>
        <h3>Adding new menu Items</h3>
      </div>
      <NewMenu />
    </div>
  )
}