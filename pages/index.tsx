import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Home: NextPage = () => {
  console.log(process.env);
  return (
    
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/count"  >
            <a className={styles.card}>
              <h2>Count Page &rarr;</h2>
            </a>
          </Link>
          <Link href="/pokemon">
            <a className={styles.card}>
              <h2>Pokemon Page &rarr;</h2>
            </a>
          </Link>

        </div>
      </main>

      
      <p style={{textAlign: "center"}}>Author: {process.env.NEXT_PUBLIC_AUTHOR}</p>
    </div>
  )
}

export default Home
