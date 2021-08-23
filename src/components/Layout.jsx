import Seo from '@/components/Seo'
import Header from '@/components/Header'

export default function Layout({ children }) {
  return (
    <>
      <Seo />
      <Header />
      <main>{children}</main> 
    </>
  )
}
