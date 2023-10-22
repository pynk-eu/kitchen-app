import styles from "./MenuList.module.css"
import MenuItem from "../MenuItem/MenuItem";
import useSWR from "swr";
import { useState } from "react";


export default function MenuList({menus, cart, setCart, isLoading}){
  if ( isLoading) return <h2>Loading...</h2>;

  // const[selectItem, setSelectItem]= useState([])
  // function handelSelect(){
    
  //   console.log(item);
  // }
  const onItemSelection = (isItemBeingAdded, item, quantity) => {
    const clonedCart = [...cart]
    const indexOfMatchedItem  = clonedCart.findIndex((i) => i._id === item._id)
    if(isItemBeingAdded) {
      // If the index is found, update the qty of the item
      if(indexOfMatchedItem > -1) {
        clonedCart[indexOfMatchedItem].quantity = quantity;
        setCart([...clonedCart])
      } else {
        // Otherwise add the item
        setCart([...clonedCart, { ...item, quantity }])
      }
    } else {
      // Remove item from the list
      clonedCart.splice(indexOfMatchedItem, 1);
      setCart([...clonedCart])
    }
  }

  return(
    <>
    <h1>Menu List</h1>
    <div className={styles["menu-list"]} data-testid="item-list">
      {menus?.map((menu) =>{
        return <MenuItem item={menu} onItemSelection={onItemSelection} key={menu._id}/>
      })} 
      </div>
      <button>Go To Cart</button>
     
      </>
  )
}