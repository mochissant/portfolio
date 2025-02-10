
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Top Page</title>
        <meta name="description" content="Top page of our site" />
      </Head>

      <main style={{ padding: '20px' }}>
        <h1>This is the top page</h1>
      </main>
    </div>
  )
}

export default Home
