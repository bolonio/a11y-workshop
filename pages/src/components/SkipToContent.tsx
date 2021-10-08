import React, { FunctionComponent } from "react"
import styled from "styled-components"

const SkipContainer = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  padding: 27px 0;
  color: inherit;
  text-decoration: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #23333d;
  color: #ffffff;
  font-size: 1.25rem;
  outline: none;
  :not(:focus) {
    top: -200px;
  }
`
export const SkipToContent: FunctionComponent = () => (
  <SkipContainer href="#content">
    <span>Skip to content</span>
  </SkipContainer>
)
