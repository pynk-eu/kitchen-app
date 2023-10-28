import AppButton from '@/components/AppButton/AppButton'
import styles from '@/styles/Home.module.css'

export default function HomePage() {
  return (
    <div className={styles['home-page']}>
      <p className={styles['home-page--txt']}>Welcome to my vegetarian kitchen. It specializes in Indian cuisine and I am proud to share the “taste of India” in Berlin. </p>
      <AppButton type='link' href='/menu' variant='animated'>Explore Menu</AppButton>
    </div>
  )
}
