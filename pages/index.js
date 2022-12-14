import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>lorem ipsum</p>
      <p className={styles.text}>lorem ipsum</p>
      <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
    </div>
  )
}
