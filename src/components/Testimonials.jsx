import React from 'react'
import styled from 'styled-components'

export default function Testimonials() {
  return (
    <>
      <TestimonialsSectionStyles id="meals">
        <Container>
          <Span>Meals</Span>
          <H2>Omnifood AI chooses from 5,000+ recipes</H2>
        </Container>
      </TestimonialsSectionStyles>
    </>
  )
}

const TestimonialsSectionStyles = styled.section`
  background-color: #fdf2e9;
  display: grid;
  grid-template-columns: 55fr 45fr;
  align-items: center;
`

const Container = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  text-align: center;
`
