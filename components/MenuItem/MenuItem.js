import QuantitySelector from "../QuantitySelector/QuantitySelector"
import styles from "./MenuItem.module.css"
import Image from "next/image"

export default function MenuItem({item}){

  return (
    
   <div className={styles["menu-item"]}>
   <Image src={item.image} height={200} width={200} alt={item.name} className={styles["menu-item__image"]}/>
   <h3 className={styles["menu-item__dishName"]} data-testid="dish-name">{item.name}</h3>
   <h4 className={styles["menu-item__price"]} data-testid="dish-price">{item.price}</h4>
   <QuantitySelector/>
  </div>
 
   
  )
}