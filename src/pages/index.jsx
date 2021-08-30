import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Featured from '@/components/Featured'
import HowItWorks from '@/components/HowItWorks'
import Meals from '@/components/Meals'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Featured />
      <HowItWorks />
      <Meals />
    </Layout>
  )
}
