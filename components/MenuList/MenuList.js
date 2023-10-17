import styles from "./MenuList.module.css"
import MenuItem from "../MenuItem/MenuItem";
import useSWR from "swr";


export default function MenuList({item}){
  const { data: menus, error, isLoading} = useSWR(`/api/menus`);
  if ( isLoading || error) return <h2>Loading...</h2>;

  return(
    <div className={styles["menu-list"]} data-testid="item-list">
      {menus.map((menu) =>{
        return <MenuItem item={menu}/>
      })} 
     
      </div>
  )
}