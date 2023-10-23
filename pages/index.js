import styles from '@/styles/Home.module.css'
import Link from 'next/link'




export default function HomePage() {
  return (
     <div className={styles['home-page']}>
     <p className={styles['home-page--txt']}>Welcome to my vegetarian kitchen. It specializes in Indian cuisine and I am proud to share the “taste of India” in Berlin. </p>
     <button className={styles['home-page--btn']}><Link href="/menu">Explore Menu</Link></button>
    </div>
  )
}
