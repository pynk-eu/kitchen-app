import styles from '@/styles/Login.module.css'
import Link from 'next/link'

export default function Login(){
  return(
    <div className={styles["signup-page"]}>
      <div className={styles["signup-page--text"]}>
        <h3>Register with us for a seamless experience</h3>
      </div>
      <div className={styles["signup-page--form"]}>
       
       <input type="text"  name="fname" placeholder="Full Name" className={styles["singup-page--input"]}/>
      
       <input type="text"  name="email" placeholder="Email"className={styles["singup-page--input"]}/>
     
       <input type="tel" name="number" placeholder="Contact Number"className={styles["singup-page--input"]}/>
     
       <input type="text"  name="address" placeholder="Address"className={styles["singup-page--input"]}/>
      </div>
      <div  className={styles["singup-page--users"]}>
        <p>Already have account?<Link href={'/login'}>Login here</Link></p>
      </div>

    </div>
  )
}