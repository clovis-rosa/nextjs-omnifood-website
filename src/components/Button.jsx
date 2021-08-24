import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Button = () => {
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
            <li key={id}>
              <a href={href}>{label}</a>
            </li>
          ))}
          <li>
            <MainNavCta>
              <a href="#cta">Try for free</a>
            </MainNavCta>
          </li>
        </NavList>
      </Nav>
      <MobileMenu onClick={handleClick}>
        {click ? <MobileMenuClose /> : <MobileMenuOpen />}
      </MobileMenu>
    </NavbarStyles>
  )
}

export default Navbar

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

  @media only screen and (max-width: 75em) {
    justify-content: space-between;
    padding: 0 3.2rem;
  }
`
