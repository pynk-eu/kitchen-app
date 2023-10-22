import { useState } from "react"
import styles from "./MenuItem.module.css"
import Image from "next/image"

export default function MenuItem({item, onItemSelection}){
  const[text, setText] = useState(false)
  const[qty, setqty] = useState(1)

 const increaseQty = ()=> {
  // Add to cart
  const qtyOfItem = qty + 1
  setqty(qtyOfItem)
  onItemSelection(true, item, qtyOfItem)
 }

 const decreaseQty = ()=> {
  const qtyOfItem = qty - 1;
  if(qtyOfItem < 1) {
    // Remove from cart
    onItemSelection(false, item)
  } else {
    onItemSelection(true, item, qtyOfItem)
  }
  qtyOfItem >-1 && setqty(qtyOfItem)
 }

 const onAddItem = ()=> {
  setText(!text)
  onItemSelection(true, item, 1)
 }
  return (
    
   <div className={styles["menu-item"]}>
   <Image src={item.image} height={200} width={200} alt={item.name} className={styles["menu-item__image"]}/>
   <h3 className={styles["menu-item__dishName"]} data-testid="dish-name">{item.name}</h3>
   <h4 className={styles["menu-item__price"]} data-testid="dish-price">€{item.price}</h4>
   <button onClick={onAddItem}>AddItem</button>
    {text && <div><button onClick={increaseQty}>+</button>
   <span>{qty}</span>
   <button onClick={decreaseQty}>-</button></div>}

   </div>

 
   
  )
}