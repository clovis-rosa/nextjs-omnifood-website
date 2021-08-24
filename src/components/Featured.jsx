import styled from 'styled-components'
import { featuredData } from '@/data/FeaturedData'

export default function Featured() {
  return (
    <>
      <FeaturedSectionStyles>
        <FeaturedContainer>
          <h2>As featured in</h2>
          <FeaturedLogos>
            {featuredData.map(({ id, image, alt }) => (
              <img key={id} src={`/images/logos/${image}`} alt={alt} />
            ))}
          </FeaturedLogos>
        </FeaturedContainer>
      </FeaturedSectionStyles>
    </>
  )
}

const FeaturedSectionStyles = styled.section`
  padding: 4.8rem 0 3.2rem 0;

  @media (max-width: 34em) {
    padding: 2.4rem 0 6.4rem 0;
  }
`

const FeaturedContainer = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  h2 {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2.4rem;
    color: #888;
  }
`

const FeaturedLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 84em) {
  }

  @media (max-width: 75em) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 59em) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 59em) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 34em) {
    grid-template-columns: repeat(1, auto);
  }

  img {
    height: 3.2rem;
    display: block;
    filter: brightness(0);
    opacity: 50%;
  }
`
