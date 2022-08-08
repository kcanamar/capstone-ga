import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout home>
      <h1 className="text-3xl font-bold underline">
        Hello from Tailwind!
      </h1>
    </Layout>
  )
}
