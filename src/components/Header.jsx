import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    setMounted(true)
    changeNav()
    window.addEventListener('scroll', changeNav)
  }, [])

  if (!mounted) return null

  return (
    <>
      <HeaderStyles>
        <Link href="#" passHref>
          <a>
            <img src="/images/omnifood-logo.png" alt="Omnifood logo" />
          </a>
        </Link>
        <nav>
          <MainNavList>
            <li>
              <a href="#how">How it works</a>
            </li>
            <li>
              <a href="#meals">Meals</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <MainNavCta>
              <a href="#cta">Try for free</a>
            </MainNavCta>
          </MainNavList>
          <MobileMenu onClick={handleClick}>
            {click ? <MobileMenuClose /> : <MobileMenuOpen />}
          </MobileMenu>
        </nav>
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

  img {
    height: 2.2rem;
  }
`

const MainNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4.8rem;

  li {
    a:link,
    a:visited {
      display: inline-block;
      text-decoration: none;
      color: #333;
      font-weight: 500;
      font-size: 1.8rem;
      transition: all 0.3s;

      &:hover,
      &:active {
        color: var(--clr-link-hover);
      }
    }
  }
`

const MainNavCta = styled(MainNavList)`
  a:link,
  a:visited {
    padding: 1.2rem 2.4rem;
    border-radius: 9px;
    color: var(--clr-white);
    background-color: var(--clr-link);

    &:hover,
    &:active {
      background-color: var(--clr-link-hover);
    }
  }
`

const MobileMenu = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: none;

  svg {
    margin: 0 4px;
    stroke: var(--clr-dark);
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
    svg {
      display: none;
    }
  }
`

const MobileMenuOpen = () => {
  return (
    <svg
      id="headerMobileMenuOpen"
      className="menu"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 18h7m-7-6h14M5 6h14"></path>
    </svg>
  )
}

const MobileMenuClose = () => {
  return (
    <svg
      id="headerMobileMenuClose"
      className="menu"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
    >
      <path
        d="M17 7L7 17m10 0L7 7"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
