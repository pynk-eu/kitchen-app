// import Link from "next/link"
// import Image from "next/image"
// export default function Cart ({ cart, setCart }) {
//   return (
//     <div className="cart">
//       <Link href="/"> Menu</Link>
//       {
//         cart.length ? 
//           cart.map((item) => {
//             return (
//               <div className="item-wrapper" key={item.itemId}>
//                 <p>{item.name}</p>
//                 <Image width={300} height={300} src={item.image}/>
//                 <p>{item.quantity}</p>
//               </div>
//             )
//           })
//           :
//           <p>No Items added</p>
//       }
//     </div>
//   )
// }