import Layout from '@/components/Layout'
import styled from 'styled-components'
import Button from '@/components/Button'
import { buttonData } from '@/data/MenuLinkData'

export default function Home() {
  return (
    <Layout>
      <HeroSectionStyles>
        <HeroGrid>
          <HeroTextBox>
            <h1>A healthy meal delivered to your door, every single day</h1>
            <p>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <Button
              href={buttonData[1].href}
              label={buttonData[1].label}
              padding="1.6rem 3.2rem;"
              color="var(--clr-white)"
              background="var(--clr-link)"
            />
            <Button
              href={buttonData[2].href}
              label={buttonData[2].label}
              padding="1.6rem 3.2rem;"
              color="var(--clr-dark)"
              background="var(--clr-white)"
              hover="var(--clr-link-outline)"
              outline="inset 0 0 0 3px var(--clr-white)"
            />
          </HeroTextBox>
        </HeroGrid>
      </HeroSectionStyles>
    </Layout>
  )
}

const HeroSectionStyles = styled.section`
  background-color: #fdf2e9;
  padding: 4.8rem 0 9.6rem 0;

  @media (max-width: 34em) {
    padding: 2.4rem 0 6.4rem 0;
  }
`

const HeroGrid = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9.6rem;
  align-items: center;

  @media (max-width: 84em) {
    max-width: 120rem;
  }

  @media (max-width: 75em) {
    gap: 4.8rem;
  }

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
    padding: 0 8rem;
    gap: 6.4rem;
  }

  @media (max-width: 34em) {
    padding: 0 3.2rem;
  }
`

const HeroTextBox = styled.div`
  h1 {
    font-size: 5.2rem;
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.5px;
    color: var(--clr-heading);
    margin-bottom: 3.2rem;

    @media (max-width: 84em) {
      font-size: 4.4rem;
    }
  }

  p {
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 4.8rem;
  }

  button:first-of-type {
    margin-right: 1.6rem;
  }

  @media (max-width: 59em) {
    text-align: center;
  }
`

const HeroImageBox = styled.div`
  @media (max-width: 59em) {
    text-align: center;
  }
`
