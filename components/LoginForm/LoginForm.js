import styles from "./LoginForm.module.css"
export default function LoginForm(){
  return(
    <div className={styles["signup-page--form"]}>
       
       <input type="text"  name="fname" placeholder="Full Name" className={styles["singup-page--input"]}/>
      
       <input type="text"  name="email" placeholder="Email"className={styles["singup-page--input"]}/>
     
       <input type="tel" name="number" placeholder="Contact Number"className={styles["singup-page--input"]}/>
     
       <input type="text"  name="address" placeholder="Address"className={styles["singup-page--input"]}/>
      </div>
  )
}