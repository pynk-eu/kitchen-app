import { menus } from "@/lib/menus";
import styles from "./MenuList.module.css"
import MenuItem from "../MenuItem/MenuItem";

export default function MenuList({item}){
  return(
    <div className={styles["menu-list"]} data-testid="item-list">
      {menus.map((menu) =>{
        return <MenuItem item={menu}/>
      })}
    </div>
  )
}