import styles from "./MenuItem.module.css"
import Image from "next/image"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function MenuItem(){
  const { data, error, isLoading } = useSWR('/api/menus', fetcher)
 
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
   return (
    <div className={styles['menu-page']}>
       <h3 className={styles['menu-item--text']}>On menu today...</h3>
       {data.map((menu) =>
       {return <div className={styles['menu-items']}> 
       <div className={styles['menu-item']}>
          <div className={styles['menu-item--img']}>
          <Image src={menu.image} height='150' width='150' alt={menu.name}/>
       </div>     
       <div className={styles['menu-item__details']}>
           <h3 className={styles['menu-item__details--name']}>{menu.name}</h3>
           <h4 className={styles['menu-item__details--price']}>€{menu.price}</h4>
       </div>
       <div className={styles['menu-item--button']}>
         <button className={styles['btn-wrapper']}>Add</button>
       </div>               
     </div>                       
  </div>
})}
       
  </div>
    
   )
      
  
}