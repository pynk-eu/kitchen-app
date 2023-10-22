import styles from '@/styles/Menu.module.css'
 import Image from 'next/image'

export default function Menu() {
  return(
    <div className={styles['menu-item']}>
      <div className={styles['menu-item--text']}>
        <h3>On menu today...</h3>
      </div>
      <div className={styles['menu-item--image']}>
        <Image src='/chole 1.png' height='150' width='150' alt='chole'/>
        < div className={styles['menu-item__name--price']}>
          <h3>Chola Bhatura</h3>
          <h4>€ 9.5</h4>
        </div>
        <div className={styles['menu-item--button']}>Add</div>
      </div>
      
    </div>
  )
}