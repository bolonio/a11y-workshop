import styled from "styled-components"

export const AnchorLink = styled.a`
  text-decoration: none;
  box-shadow: 0 3px 0 0 #23333d;

  :focus {
    box-shadow: none;
    outline: 3px solid tomato;
    outline-offset: 0.5rem;
  }
`
