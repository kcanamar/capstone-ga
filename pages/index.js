import Layout from '../components/Layout'
import Landing from '../components/Landing'
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (document.cookie && document.cookie.includes('authed')) {
                  window.location.href = "/dashboard"
                } else if (document.cookie ) {
                  window.location.href = "/"
                }
              `,
            }}
          />
        </Head>
      <Layout home>
            <Landing/>
      </Layout>
    </>
  )
}
