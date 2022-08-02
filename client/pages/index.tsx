import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Context } from './_app'
import { useContext } from 'react'
import Header from './../src/components/Header/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const {user} = useContext(Context)
  return (
    <div className='page'>
      <Head>
        <title>Catalog</title>
        <meta name="description" content="catalog shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <main>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
