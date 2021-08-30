import React from 'react'
import styled from 'styled-components'
import { HowItWorksData } from '@/data/HowItWorksData'

export default function HowItWorks() {
  return (
    <>
      <HowItWorksSectionStyles>
        <HowItWorksContainer>
          <HowItWorksSpan>How it works</HowItWorksSpan>
          <HowItWorksH2>
            Your daily dose of health in 3 simple steps
          </HowItWorksH2>
          <HowItWorksGrid>
            {HowItWorksData.map(
              ({
                id,
                step_number,
                heading_tertiary,
                step_description,
                step_img,
                step_img_alt,
              }) => (
                <React.Fragment key={id}>
                  <StepTextBox>
                    <p className="step-number">{step_number}</p>
                    <h3 className="heading-tertiary">{heading_tertiary}</h3>
                    <p className="step-description">{step_description}</p>
                  </StepTextBox>
                  <StepImgBox>
                    <img src={`/images/app/${step_img}`} alt={step_img_alt} />
                  </StepImgBox>
                </React.Fragment>
              )
            )}
          </HowItWorksGrid>
        </HowItWorksContainer>
      </HowItWorksSectionStyles>
    </>
  )
}

const HowItWorksSectionStyles = styled.section`
  padding: 9.6rem 0;
`

const HowItWorksContainer = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
`

const HowItWorksSpan = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--clr-subheading);
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
`

const HowItWorksH2 = styled.h2`
  font-size: 4.4rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;
  color: var(--clr-heading);
  margin-bottom: 9.6rem;

  @media (max-width: 44em) {
    margin-bottom: 4.8rem;
  }

  @media (max-width: 75em) {
    font-size: 3.6rem;
  }
`

const HowItWorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 6.4rem;
  row-gap: 9.6rem;
  margin-bottom: 9.6rem;
  align-items: center;

  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  @media (max-width: 34em) {
    grid-template-columns: 1fr;
    row-gap: 4.8rem;
  }

  @media (max-width: 75em) {
    column-gap: 4.8rem;
    row-gap: 6.4rem;
  }

  div:nth-of-type(1) {
    order: 1;
  }
  div:nth-of-type(2) {
    order: 2;
  }
  div:nth-of-type(3) {
    order: 4;
  }
  div:nth-of-type(4) {
    order: 3;
  }
  div:nth-of-type(5) {
    order: 5;
  }
  div:nth-of-type(6) {
    order: 6;
  }
`

const StepTextBox = styled.div`
  .step-number {
    font-size: 8.6rem;
    font-weight: 600;
    color: #ddd;
    margin-bottom: 1.2rem;
  }

  .heading-tertiary {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 3.2rem;
  }

  .step-description {
    font-size: 1.8rem;
    line-height: 1.8;
  }
`

const StepImgBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    width: 60%;
    height: 60%;
    padding-bottom: 60%;
    background-color: #fdf2e9;
    z-index: -2;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    width: 35%;
    /* z-index: 10; */
  }
`
