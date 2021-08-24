import styled from 'styled-components'

export default function Button({
  href,
  label,
  padding,
  color,
  background,
  hover,
  outline,
}) {
  return (
    <>
      <ButtonStyles>
        <Anchor
          href={href}
          padding={padding}
          color={color}
          background={background}
          hover={hover}
          outline={outline}
        >
          {label}
        </Anchor>
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
  padding: 0;

  display: inline-block;
  text-decoration: none;
  color: var(--clr-white);
  font-family: var(--ff-primary);
  font-weight: 500;
  font-size: 1.8rem;
  transition: all 0.3s;

  @media (max-width: 75em) {
    margin-top: 3rem; //
    font-size: 3rem;
  }
`

const Anchor = styled.a`
  text-decoration: none;
  /* padding: 1.2rem 2.4rem; */
  padding: ${(props) => props.padding || '1.2rem 2.4rem'};
  border-radius: 9px;
  color: ${(props) => props.color};
  background: ${(props) => props.background};

  &:visited {
    color: ${(props) => props.color};
    background: ${(props) => props.background};
  }

  &:hover,
  &:active {
    background: ${(props) => props.hover || 'var(--clr-link-hover)'};
    box-shadow: ${(props) => props.outline || 'none'};
  }
`
