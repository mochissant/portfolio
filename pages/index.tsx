
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>

      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm a developer passionate about creating amazing web experiences.</p>
      </main>
    </div>
  )
}

export default Home
