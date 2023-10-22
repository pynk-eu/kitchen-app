import styles from '@/styles/Home.module.css'




export default function HomePage() {
  return (
     <div className={styles['home-page']}>
     <p className={styles['home-page--txt']}>Welcome to my vegetarian kitchen. It specializes in Indian cuisine and I am proud to share the “taste of India” in Berlin. </p>
     <button className={styles['home-page--btn']}>Explore Menu</button>
    </div>
  )
}
