import styles from '@/styles/Menu.module.css'
import Image from 'next/image'
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function Menu({ cart, handleCart }) {
  const { data, error, isLoading } = useSWR('/api/menus', fetcher)


  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>


  function handelAddToCart(menu) {
    handleCart([...cart, menu]);
    // cart.push(menu)
    // console.log(cart)
  }

  return (
    <div className={styles['menu-page']}>
      <h3 className={styles['menu-item--text']}>On menu today...</h3>
      <div className={styles['menu-items']} >
        {data.map((menu) => {
          return (
            <div className={styles['menu-item']} key={menu._id}>
              <div className={styles['menu-item--img']}>
                <Image src={menu.image} height='150' width='150' alt={menu.name} />
              </div>
              <div className={styles['menu-item__details']}>
                <p className={styles['menu-item__details--name']}>{menu.name}</p>
                <p className={styles['menu-item__details--price']}>€{menu.price}</p>
              </div>
              <div className={styles['menu-item--button']}>
                <button onClick={() => handelAddToCart(menu)} className={styles['btn-wrapper']}>Add</button>
              </div>
            </div>
          )

        })}
      </div>

    </div>

  )
}       