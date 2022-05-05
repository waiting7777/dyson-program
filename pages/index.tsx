import type { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { HOST } from '../config'
import type { Product } from '@prisma/client'

const Home = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Dyson Program Caculator</title>
        <meta name="description" content="Dyson Program Caculator" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <h1 className="text-3xl font-bold underline">
        {JSON.stringify(data)}
      </h1>
    </div>
  )
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await axios.get<Product[]>(`${HOST}/api/product`)

  // Pass data to the page via props
  return { props: { data: res.data } }
}

export default Home
