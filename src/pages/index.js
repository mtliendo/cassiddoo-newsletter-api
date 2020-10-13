import Head from 'next/head'
import styles from './styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <h2 className={styles.title}>
          Hey folks! I'm pretty basic right now, but soon I'll be pretty much
          what's in the{' '}
          <a href="https://github.com/mtliendo/cassiddoo-newsletter-api">
            README😉
          </a>
        </h2>
      </main>
    </div>
  )
}
