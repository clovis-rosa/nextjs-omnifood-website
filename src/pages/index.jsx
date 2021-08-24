import Layout from '@/components/Layout'
import styled from 'styled-components'

export default function Home() {
  return (
    <Layout>
      <HeroSectionStyles>
        <h1>Hello World!</h1>
      </HeroSectionStyles>
    </Layout>
  )
}

const HeroSectionStyles = styled.section`
  background-color: #fdf2e9;
  padding: 4.8rem 0 9.6rem 0;
`
