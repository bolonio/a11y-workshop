import type { NextPage } from "next"
import React from "react"
import { PageLayoutContent } from "../../src/components/content"
import { PageHeading } from "../../src/components/core/headings"
import Text from "../../src/components/core/Text"
import Box from "../../src/components/core/Box"
import styled from "styled-components"
import { AnchorLink } from "../../src/components/core/AnchorLink"

const NoFocusButton = styled.button`
  background-color: #23333d;
  border-radius: 5px;
  color: #fff;
  padding: 15px;
  font-size: 15px;
  border: 0;
  text-align: center;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 10px;
`

const FocusButton = styled(NoFocusButton)`
  :focus-visible {
    outline: 3px solid tomato;
  }
`

const Button = styled.button`
  background-color: #23333d;
  border-radius: 5px;
  color: #fff;
  padding: 15px;
  font-size: 15px;
  border: 0;
  text-align: center;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 10px;
  :focus {
    outline: 3px solid tomato;
  }
  &:disabled {
    background: #ccc;
    color: #333;
    cursor: not-allowed;
  }
`

const FakeButton = styled.a`
  background-color: #23333d;
  border-radius: 5px;
  color: #fff;
  padding: 15px;
  font-size: 15px;
  border: 0;
  text-align: center;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 10px;
  :focus {
    outline: 3px solid tomato;
  }
`

const FakeDisabledButton = styled.a`
  border-radius: 5px;
  padding: 15px;
  font-size: 15px;
  border: 0;
  text-align: center;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  margin-right: 10px;
  :focus {
    outline: 3px solid tomato;
  }
  background: #ccc;
  color: #333;
  cursor: not-allowed;
`

const LangImage = styled.img`
  width: 400px;
  margin-right: 32px;
`

const Alt: NextPage = () => {
  const clickHandler = () => {
    alert("You clicked me!!!")
  }

  return (
    <PageLayoutContent>
      <PageHeading>Every image must have an alt attribute.</PageHeading>
      <section>
        <Text as="h2">Image alt property</Text>
        <Box display="flex">
          <LangImage src="https://t3.ftcdn.net/jpg/02/97/29/06/360_F_297290656_2VreOHvYSCzMaFoItvVGLSOvfXJNR4XJ.jpg" />

          <LangImage
            src="https://t3.ftcdn.net/jpg/02/97/29/06/360_F_297290656_2VreOHvYSCzMaFoItvVGLSOvfXJNR4XJ.jpg"
            alt="A person using a computer"
          />
        </Box>
      </section>
      <section>
        <Text as="h2">Language in the Image alt property</Text>
        <Box display="flex">
          <AnchorLink href="#">
            <LangImage
              src="https://t3.ftcdn.net/jpg/02/97/29/06/360_F_297290656_2VreOHvYSCzMaFoItvVGLSOvfXJNR4XJ.jpg"
              alt="A person using a computer"
            />
          </AnchorLink>

          <AnchorLink lang="de" href="#">
            <LangImage
              src="https://t3.ftcdn.net/jpg/02/97/29/06/360_F_297290656_2VreOHvYSCzMaFoItvVGLSOvfXJNR4XJ.jpg"
              alt="Eine Person, die einen Computer benutzt"
            />
          </AnchorLink>
        </Box>
      </section>
    </PageLayoutContent>
  )
}

export default Alt
