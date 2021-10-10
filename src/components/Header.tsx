import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { LayoutContent } from "./content"
import Link from "next/link"

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`

const StyledNav = styled.nav`
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
`

const MenuLink = styled.a`
  font-weight: 800;
  font-family: Mulish, -apple-system, BlinkMacSystemFont, Open Sans, sans-serif !important;
  letter-spacing: -1px;
  margin-right: 25px;
  font-size: 1.5rem;
  text-decoration: none;
  box-shadow: none;
  color: #23333d;

  @media screen and (max-width: 700px) {
    font-size: 1.25rem;
    margin-right: 15px;
  }

  :hover {
    box-shadow: 0 2px 0 0 #23333d;
  }
  :focus {
    outline: 3px solid tomato;
    outline-offset: 0.5rem;
  }
`

const Menu = styled.div`
  display: flex;
  @media screen and (max-width: 700px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`

const LogoImage = styled.img`
  fill: #23333d;
  margin: 0;
  width: 100px;
  @media screen and (max-width: 700px) {
    display: none;
    width: 30px;
  }
`

export const Header: FunctionComponent = () => {
  return (
    <HeaderContainer>
      <LayoutContent>
        <StyledNav>
          <LogoImage src="/images/logo.svg" alt="Adrian Bolonio Logo" />
          <Menu>
            <Link href="/lang" passHref>
              <MenuLink>Language</MenuLink>
            </Link>
            <Link href="/color" passHref>
              <MenuLink>Color</MenuLink>
            </Link>
            <Link href="/alt" passHref>
              <MenuLink>Alt text</MenuLink>
            </Link>
            <Link href="/aria" passHref>
              <MenuLink>ARIA</MenuLink>
            </Link>
            <Link href="/buttons" passHref>
              <MenuLink>Buttons</MenuLink>
            </Link>
            <Link href="/liveregions" passHref>
              <MenuLink>Live Regions</MenuLink>
            </Link>
          </Menu>
        </StyledNav>
      </LayoutContent>
    </HeaderContainer>
  )
}
