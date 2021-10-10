import type { NextPage } from "next"
import React from "react"
import { PageLayoutContent } from "../../src/components/content"
import { PageHeading } from "../../src/components/core/headings"
import Text from "../../src/components/core/Text"
import Box from "../../src/components/core/Box"
import styled from "styled-components"

const NoFocusButton = styled.button`
  background-color: #26d621;
  border-radius: 5px;
  color: #23333d;
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

const Buttons: NextPage = () => {
  const clickHandler = () => {
    alert("You clicked me!!!")
  }

  return (
    <PageLayoutContent>
      <PageHeading>Buttons vs Links</PageHeading>
      <section>
        <Text as="h2">focus-visible</Text>
        <Box marginBottom="4">
          <NoFocusButton>Continue</NoFocusButton>
          <FocusButton>Continue</FocusButton>
        </Box>
      </section>
      <section>
        <Text as="h2">Can you say which one is a real button?</Text>
        <Box marginBottom="4">
          <FakeButton className="button" onClick={clickHandler}>
            Continue
          </FakeButton>
          <FakeButton
            className="button"
            role="button"
            tabIndex={0}
            onClick={clickHandler}
          >
            Continue
          </FakeButton>
          <Button className="button" onClick={clickHandler}>
            Continue
          </Button>
        </Box>
      </section>
      <section>
        <Text as="h2">Disable buttons</Text>
        <Box marginBottom="4">
          <FakeDisabledButton
            className="button"
            onClick={clickHandler}
            disabled
          >
            Continue
          </FakeDisabledButton>
          <FakeDisabledButton
            className="button"
            role="button"
            tabIndex={0}
            onClick={clickHandler}
            disabled
          >
            Continue
          </FakeDisabledButton>
          <Button className="button" onClick={clickHandler} disabled>
            Continue
          </Button>
        </Box>
      </section>
    </PageLayoutContent>
  )
}

export default Buttons
