import type { NextPage } from "next"
import React from "react"
import { PageLayoutContent } from "../../src/components/content"
import { PageHeading } from "../../src/components/core/headings"
import Text from "../../src/components/core/Text"
import Box from "../../src/components/core/Box"
import { AnchorLink } from "../../src/components/core/AnchorLink"
import styled from "styled-components"

const LangImage = styled.img`
  width: 400px;
  margin-right: 32px;
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
`

const Input = styled.input`
  height: 30px;
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid #ccc;
  padding: 10px;
  margin-left: 10px;

  :focus {
    border: 0;
    outline: 3px solid tomato;
  }
`

const Aria: NextPage = () => {
  return (
    <PageLayoutContent>
      <PageHeading>ARIA - Accessible Rich Internet Applications</PageHeading>
      <section>
        <Text as="h2">aria-label vs title</Text>
        <Box marginBottom="4">
          <AnchorLink href="tel:+766612344321">+766612344321</AnchorLink>
        </Box>
        <Box marginBottom="4">
          <AnchorLink
            href="tel:+766612344321"
            aria-label="Call the support team"
          >
            +766612344321
          </AnchorLink>
        </Box>
      </section>
      <section>
        <Text as="h2">When to use aria-label?</Text>
        <Box marginBottom="4">
          <Button>X</Button>
          <Button aria-label="Close the current window">X</Button>
        </Box>
      </section>
      <section>
        <Text as="h2">When to use aria-labelledby?</Text>
        <Text id="contact" as="h3">
          Registration
        </Text>
        <Box border="2px solid #23333d" padding="3">
          <Box marginBottom="2">
            <label id="registrationName">Name</label>
            <Input type="text" aria-labelledby="contact registrationName" />
          </Box>
          <Box>
            <label id="registrationAddress">Address</label>
            <Input type="text" aria-labelledby="contact registrationAddress" />
          </Box>
        </Box>
      </section>
      <section>
        <Text id="color" as="h3">
          Car color
        </Text>
        <Box border="2px solid #23333d" padding="3">
          <Box marginBottom="2">
            <label id="blue">blue</label>
            <Input
              type="radio"
              value="blue"
              id="blue"
              name="color"
              aria-labelledby="color blue"
            />
          </Box>
          <Box>
            <label id="red">red</label>
            <Input
              type="radio"
              value="red"
              id="red"
              name="color"
              aria-labelledby="color red"
            />
          </Box>
        </Box>
      </section>
    </PageLayoutContent>
  )
}

export default Aria
