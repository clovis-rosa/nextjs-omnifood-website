import Head from 'next/head'
import Layout, { siteTitle } from '@/components/Layout'
import styled from 'styled-components'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Title>Hello World!</Title>
      </section>
    </Layout>
  )
}


const Title = styled.h1`
  font-size: 50px;
  color: rgb(40, 40, 40);
`

