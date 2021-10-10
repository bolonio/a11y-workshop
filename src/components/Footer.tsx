import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { LayoutContent } from "./content"
import Box from "./core/Box"
import Link from "next/link"

const FooterIcon = styled.img`
  fill: #ffffff;
  margin: 0;
  width: 25px;
  @media screen and (max-width: 700px) {
    width: 30px;
  }
`

const FooterLink = styled.a`
  color: #ffffff;
  margin-right: 20px;
  box-shadow: none;
  font-family: Mulish, -apple-system, BlinkMacSystemFont, Open Sans, sans-serif !important;

  :hover {
    box-shadow: 0 2px 0 0 #ffffff;
  }
  :focus {
    box-shadow: none;
    outline: 3px solid #ffffff;
    outline-offset: 0.5rem;
  }
  @media screen and (max-width: 700px) {
    margin-left: 0px;
  }
`

const FooterAnchorLink = styled.a`
  color: #ffffff;
  margin-right: 20px;
  box-shadow: none;
  :hover {
    box-shadow: 0 2px 0 0 #ffffff;
  }
  :focus {
    box-shadow: none;
    outline: 3px solid #ffffff;
    outline-offset: 0.5rem;
  }
  @media screen and (max-width: 700px) {
    margin-left: 0px;
  }
`

const FooterIconLink = styled.a`
  margin-left: 20px;
  display: flex;
  text-decoration: none;
  box-shadow: none;
  width: 25px;
  :hover,
  :focus {
    box-shadow: none;
    outline: 3px solid #ffffff;
    outline-offset: 0.5rem;
  }
`

const LogoImage = styled.img`
  fill: #ffffff;
  margin: 0;
  width: 100px;
  margin-right: 2rem;
  @media screen and (max-width: 700px) {
    width: 75px;
  }
`
export const Footer: FunctionComponent = () => {
  return (
    <Box background="#23333d" padding="15px 0">
      <LayoutContent>
        <Box
          display="flex"
          justifyContent={["space-between", "flex-start"]}
          alignItems={["center", "flex-start"]}
          flexDirection={["column", "row"]}
        >
          <Box
            display="flex"
            width="100%"
            alignItems="center"
            marginBottom={[2, 0]}
          >
            <LogoImage src="/images/logo_white.svg" alt="Logo" />
            <Link href="https://www.adrianbolonio.com/en/" passHref>
              <FooterLink>www.adrianbolonio.com</FooterLink>
            </Link>
          </Box>

          <Box
            display="flex"
            justifyContent={["space-between", "flex-end"]}
            alignItems="center"
            width="100%"
            height="50px"
          >
            <Link href="/" passHref>
              <FooterIconLink target="_blank" rel="noopener" aria-label="">
                <FooterIcon src="/images/twitter.svg" alt="Twitter logo" />
              </FooterIconLink>
            </Link>
            <Link href="/" passHref>
              <FooterIconLink target="_blank" rel="noopener" aria-label="">
                <FooterIcon src="/images/instagram.svg" alt="Instagram logo" />
              </FooterIconLink>
            </Link>
            <Link href="/" passHref>
              <FooterIconLink target="_blank" rel="noopener" aria-label="">
                <FooterIcon src="/images/github.svg" alt="GitHub logo" />
              </FooterIconLink>
            </Link>
            <Link href="/" passHref>
              <FooterIconLink target="_blank" rel="noopener" aria-label="">
                <FooterIcon src="/images/linkedin.svg" alt="Linkedin logo" />
              </FooterIconLink>
            </Link>
            <Link href={`mailto:bolonio85@gmail.com`} passHref>
              <FooterIconLink target="_blank" rel="noopener" aria-label="">
                <FooterIcon src="/images/email.svg" alt="Email logo" />
              </FooterIconLink>
            </Link>
          </Box>
        </Box>
      </LayoutContent>
    </Box>
  )
}
