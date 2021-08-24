import styled from 'styled-components'

export default function Button({ href, label }) {
  return (
    <>
      <ButtonStyles>
        <Anchor href={href}>{label}</Anchor>
      </ButtonStyles>
    </>
  )
}

const ButtonStyles = styled.button`
  outline: none;
  border: none;
  border-radius: 6px;
  white-space: nowrap;
  cursor: pointer;

  display: inline-block;
  text-decoration: none;
  /* color: var(--clr-heading); */
  font-family: var(--ff-primary);
  font-weight: 500;
  font-size: 1.8rem;
  transition: all 0.3s;

  @media (max-width: 75em) {
    margin-top: 3rem; //
  }
`

const Anchor = styled.a`
  text-decoration: none;
  padding: 1.2rem 2.4rem;
  border-radius: 9px;
  color: var(--clr-white);
  background-color: var(--clr-link);

  @media (max-width: 59em) {
    /* font-size: 3rem; */
  }
`
