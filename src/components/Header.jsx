import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Button from '@/components/Button'

const navigationData = [
  {
    id: '001',
    label: 'How it works',
    href: '#how',
  },
  {
    id: '002',
    label: 'Meals',
    href: '#meals',
  },
  {
    id: '003',
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    id: '004',
    label: 'Pricing',
    href: '#pricing',
  },
]

export default function Navbar() {
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
    <NavbarStyles active={scroll}>
      <Link href="/">
        <a onClick={closeMobileMenu}>
          <NavbarLogo src="/images/omnifood-logo.png" alt="Omnifood logo" />
        </a>
      </Link>

      <Nav onClick={handleClick} click={click}>
        <NavList>
          {navigationData.map(({ id, href, label }) => (
            <NavItem key={id}>
              <NavLink href={href}>{label}</NavLink>
            </NavItem>
          ))}

          <NavItem>
            <Button href="#cta" label="Try for free" />
          </NavItem>
        </NavList>
      </Nav>

      <MobileMenu onClick={handleClick}>
        {click ? <MobileMenuClose /> : <MobileMenuOpen />}
      </MobileMenu>
    </NavbarStyles>
  )
}

const NavbarStyles = styled.header`
  height: ${({ active }) => (active ? '8rem' : '9.6rem')};
  width: 100%;
  min-width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4.8rem;
  color: var(--clr-dark);
  background: ${({ active }) =>
    active ? 'rgba(255, 255, 255, 0.97)' : 'var(--clr-link-outline)'};
  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
  z-index: 100;
  transition: all 0.2s ease;
  /* backface-visibility: hidden; */

  position: fixed;
  top: 0;
  bottom: 0;
  max-width: 100%;

  @media (max-width: 75em) {
    justify-content: space-between;
    padding: 0 3.2rem;
  }
`

const NavbarLogo = styled.img`
  height: 2.2rem;
  width: 100%;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  @media (max-width: 75em) {
    position: fixed;
    top: 9.6rem;
    left: 0;
    width: 100%;
    display: flex;
    visibility: ${({ click }) => (click ? 'visible' : 'hidden')};
    opacity: ${({ click }) => (click ? '1' : '0')};
    padding-bottom: 24px;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.97);
    z-index: 1;
    backface-visibility: hidden;
    transition: all 0.2s ease-in-out;

    &::after {
      content: '';
      visibility: ${({ click }) => (click ? 'visible' : 'hidden')};
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);
      pointer-events: none;
      transition: all 0.2s ease-in-out;
    }
  }
`

const NavList = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 75em) {
    flex-direction: column;
  }
`

const NavItem = styled.li`
  margin-left: 24px;
  font-size: inherit;
  font-weight: 500;
  white-space: nowrap;
  /* 
  @media (max-width: 59em) {
    width: calc(100% - 32px);
    margin: 0;
  } */
`

const NavLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: var(--clr-heading);
  font-weight: 500;
  font-size: 1.8rem;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: var(--clr-link-hover);
  }

  @media (max-width: 75em) {
    width: 100%;
    display: block;
    padding: 24px 0 24px 12px;
    cursor: pointer;

    &:link,
    &:visited {
      font-size: 3rem;
    }
  }
`

const MobileMenu = styled.div`
  svg {
    height: 32px;
    width: 32px;
    margin: 0 4px;
    stroke: black;
    cursor: pointer;
  }

  @media (min-width: 75em) {
    svg {
      display: none;
    }
  }
`

const MobileMenuOpen = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )
}

const MobileMenuClose = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}
