import styles from '@/styles/Menu.module.css'
 import Image from 'next/image'

export default function Menu() {
  return(
  <div className={styles['menu-page']}>
     <h3 className={styles['menu-item--text']}>On menu today...</h3>
     <div className={styles['menu-items']}> 
        <div className={styles['menu-item']}>
          <div className={styles['menu-item--img']}>
             <Image src='/chole 1.png' height='150' width='150' alt='chole'/>
           </div>     
          <div className={styles['menu-item__details']}>
              <h3 className={styles['menu-item__details--name']}>Chola Bhatura</h3>
              <h4 className={styles['menu-item__details--price']}>€ 9.5</h4>
          </div>
           <div className={styles['menu-item--button']}>
            <button className={styles['btn-wrapper']}>Add</button>
            </div>               
        </div>
        <div className={styles['menu-item']}>
          <div className={styles['menu-item--img']}>
             <Image src='/chole 1.png' height='150' width='150' alt='chole'/>
           </div>     
          <div className={styles['menu-item__details']}>
              <h3 className={styles['menu-item__details--name']}>Chola Bhatura</h3>
              <h4 className={styles['menu-item__details--price']}>€ 9.5</h4>
          </div>
           <div className={styles['menu-item--button']}>
            <button className={styles['btn-wrapper']}>Add</button>
            </div>               
        </div>
        <div className={styles['menu-item']}>
          <div className={styles['menu-item--img']}>
             <Image src='/chole 1.png' height='150' width='150' alt='chole'/>
           </div>     
          <div className={styles['menu-item__details']}>
              <h3 className={styles['menu-item__details--name']}>Chola Bhatura</h3>
              <h4 className={styles['menu-item__details--price']}>€ 9.5</h4>
          </div>
           <div className={styles['menu-item--button']}>
            <button className={styles['btn-wrapper']}>Add</button>
            </div>               
        </div>
        
     </div>  
  </div>
    
  )
}       