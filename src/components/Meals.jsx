import React from 'react'
import styled from 'styled-components'

export default function Meals() {
  return (
    <>
      <MealsSectionStyles id="meals">
        <Container>
          <Span>Meals</Span>
          <H2>Omnifood AI chooses from 5,000+ recipes</H2>
        </Container>
        <ContainerGrid>
          <div className="meal">
            <img
              className="meal-img"
              src="images/meals/meal-1.jpg"
              alt="Japanese Gyozas"
            />
            <div className="meal_content">
              <div className="meal_tags">
                <span className="tag_vegetarian">Vegetarian</span>
              </div>
              <p className="meal_title">Japanese Gyozas</p>
              <ul clasNames="meal_attributes">
                <li className="meal_attribute">
                  <span>
                    <strong>650 </strong>calories
                  </span>
                </li>
                <li className="meal_attribute">
                  <span>
                    NutriScore ® <strong>74</strong>
                  </span>
                </li>
                <li className="meal_attribute">
                  <span>
                    <strong>4.9 </strong>
                    rating (537)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </ContainerGrid>
      </MealsSectionStyles>
    </>
  )
}

const MealsSectionStyles = styled.section`
  padding: 9.6rem 0;
`

const Container = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  text-align: center;
`

const Span = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  color: #cf711f;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
`

const H2 = styled.h2`
  font-size: 4.4rem;
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-bottom: 9.6rem;

  @media (max-width: 75em) {
    font-size: 3.6rem;
  }
`

const ContainerGrid = styled.div`
  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;
  margin-bottom: 9.6rem;
  grid-template-columns: repeat(3, 1fr);

  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  margin-bottom: 4.8rem !important;

  &:not(:last-child) {
    margin-bottom: 9.6rem;
  }

  @media (max-width: 75em) {
    column-gap: 4.8rem;
    row-gap: 6.4rem;
  }
`
