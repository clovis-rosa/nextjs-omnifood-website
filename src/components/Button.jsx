import styled from 'styled-components'

export default function Button({
  href,
  label,
  padding,
  fontWeight,
  fontSize,
  fontSizeMobile,
  color,
  background,
  hover,
  outline,
}) {
  return (
    <>
      <ButtonStyles
        fontWeight={fontWeight}
        fontSize={fontSize}
        fontSizeMobile={fontSizeMobile}
        href={href}
        padding={padding}
        color={color}
        background={background}
        hover={hover}
        outline={outline}
      >
        {label}
      </ButtonStyles>
    </>
  )
}

const ButtonStyles = styled.a`
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
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '1.8rem'};

  text-decoration: none;
  padding: ${(props) => props.padding || '1.2rem 2.4rem'};
  border-radius: 9px;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  transition: all 0.3s;

  &:visited {
    color: ${(props) => props.color};
    background: ${(props) => props.background};
  }

  &:hover,
  &:active {
    background: ${(props) => props.hover || 'var(--clr-link-hover)'};
    box-shadow: ${(props) => props.outline || 'none'};
  }

  @media (max-width: 59em) {
    margin-top: 3rem; //
    font-size: ${(props) => props.fontSizeMobile || '3rem'};
  }
`
