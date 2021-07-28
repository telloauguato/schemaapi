import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Schema API</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Schema API
        </h1>
      </main>
    </div>
  )
}
