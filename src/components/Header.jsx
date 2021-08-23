import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  return (
    <>
      <HeaderStyles>
        <Link href="#" passHref>
          <a>
            <img src="/images/omnifood.logo.png" alt="Omnifood logo" />
          </a>
        </Link>
      </HeaderStyles>
    </>
  )
}

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdf2e9;

  /* Because we want header to be sticky later */
  height: 9.6rem;
  padding: 0 4.8rem;
`
