import styles from '@/styles/Confirmation.module.css';
import { IconClock } from "@tabler/icons-react";

export default function Confirmation() {
  return (
    <div className={styles["confirmation-page"]}>
      <h2>Order Confirmed</h2>
      <div className={styles['confirmation-page__content']}>
        <p>
          We are preparing your order and it should reach you in the next 60-80 minutes.
        </p>
        <p className={styles['confirmation-page--clock']}><IconClock size={40} color='#1e1e63' fill='transparent' /></p>
      </div>
    </div>
  )
} 