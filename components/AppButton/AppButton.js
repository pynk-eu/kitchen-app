import Link from 'next/link'
import styles from './AppButton.module.css'

export default function AppButton({ children, type, href, variant, handleClick }) {
  const classes = [styles.btn, styles[variant]].join(' ')
  return (
    <>
      {
        type === 'link' ?
          <Link href={href} className={classes}>{children}</Link>
          :
          <button className={classes} onClick={handleClick}>{children}</button>
      }
    </>
  )
}