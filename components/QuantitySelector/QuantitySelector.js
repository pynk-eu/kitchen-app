import { useState } from "react"
import styles from "./QuantitySelector.module.css"

export default function QuantitySelector(){
const[count, setCount]= useState(0)


function handelIncrementCount(){
 count<4 && setCount(count + 1) 
}

function handelDecrementCount(){
   count>0 && setCount(count - 1)
}

  return(
    <div className={styles["qty-selector"]}>
    <button type="button" onClick={handelDecrementCount} className={styles["qty-selector__decrement"]}>-</button>
    <span className={styles["qty-selector--count"]}>{count}</span>
    <button type="button" onClick={handelIncrementCount}className={styles["qty-selector__increment"]}>+</button>
    </div>
    
  )
}