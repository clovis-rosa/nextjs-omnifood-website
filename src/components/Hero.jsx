import styled from 'styled-components'
import Button from '@/components/Button'
import { buttonData } from '@/data/MenuLinkData'
import { heroDeliveredData } from '@/data/HeroDeliveredData'

export default function Hero() {
  return (
    <>
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
              fontWeight="600"
              fontSize="2rem"
              fontSizeMobile="2rem"
              color="var(--clr-white)"
              background="var(--clr-link)"
            />
            <Button
              href={buttonData[2].href}
              label={buttonData[2].label}
              padding="1.6rem 3.2rem;"
              fontWeight="600"
              fontSize="2rem"
              fontSizeMobile="2rem"
              color="var(--clr-dark)"
              background="var(--clr-white)"
              hover="var(--clr-link-outline)"
              outline="inset 0 0 0 3px var(--clr-white)"
            />
            <HeroDeliveredMeals>
              <div>
                {heroDeliveredData.map(({ id, image, alt }) => (
                  <img key={id} src={`/images/customers/${image}`} alt={alt} />
                ))}
              </div>
              <p>
                <span>250,000 </span>meals delivered last year!
              </p>
            </HeroDeliveredMeals>
          </HeroTextBox>
          <HeroImageBox>
            <picture>
              <source srcSet="images/hero.webp" type="image/webp" />
              <source srcSet="images/hero-min.png" type="image/png" />
              <img
                src="/images/hero-min.png"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </picture>
          </HeroImageBox>
        </HeroGrid>
      </HeroSectionStyles>
    </>
  )
}

const HeroSectionStyles = styled.section`
  background-color: var(--clr-link-outline);
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

  a {
    &:first-of-type {
      margin-right: 1.6rem;

      @media (max-width: 59em) {
        margin-bottom: 4.5rem;
      }
    }

    @media (max-width: 34em) {
      padding: 2.4rem 1.6rem;
    }
  }

  @media (max-width: 59em) {
    text-align: center;
  }
`

const HeroDeliveredMeals = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 8rem;

  div {
    display: flex;

    img {
      height: 4.8rem;
      width: 4.8rem;
      border-radius: 50%;
      margin-right: -1.6rem;
      border: 3px solid var(--clr-link-outline);

      &:last-child {
        margin: 0;
      }
    }
  }

  p {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;

    span {
      color: var(--clr-link-hover);
      font-weight: 700;
    }
  }
`

const HeroImageBox = styled.div`
  @media (max-width: 59em) {
    text-align: center;
  }

  picture {
    img {
      width: 100%;

      @media (max-width: 59em) {
        width: 60%;
      }

      @media (max-width: 34em) {
        width: 80%;
      }
    }
  }
`
