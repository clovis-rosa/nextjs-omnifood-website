import styled from 'styled-components'

export default function HowItWorks() {
  return (
    <>
      <HowItWorksSectionStyles>
        <HowItWorksContainer>
          <HowItWorksSpan>How it works</HowItWorksSpan>
          <HowItWorksH2>
            Your daily dose of health in 3 simple steps
          </HowItWorksH2>
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
