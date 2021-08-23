import styled from 'styled-components'

export default function Header() {
  return (
    <>
      <HeaderStyles>
        <h3>Header here</h3>
      </HeaderStyles>
    </>
  )
}

const HeaderStyles = styled.header`
  font-size: 50px;
  color: rgb(40, 40, 40);
`
