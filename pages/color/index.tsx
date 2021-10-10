import type { NextPage } from "next"
import React, { useState } from "react"
import { PageLayoutContent } from "../../src/components/content"
import { PageHeading } from "../../src/components/core/headings"
import Text from "../../src/components/core/Text"
import Box from "../../src/components/core/Box"
import styled from "styled-components"

const ColorArea = styled(Box)`
  margin-bottom: 16px;
  border: 2px solid #23333d;
  padding: 16px;
`

const ColorAreaGreenBad = styled(ColorArea)`
  background: green;
`

const ColorAreaGreenGood = styled(ColorArea)`
  background: green;
  color: white;
`

const ColorAreaRedGood = styled(ColorArea)`
  background: red;
  color: white;
`
const ColorAreaYellowGood = styled(ColorArea)`
  background: orange;
  color: white;
`

const Image = styled.img`
  width: 20px;
  margin-right: 10px;
`

const Button = styled.button`
  background-color: skyblue;
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

const GoodButton = styled(Button)`
  background-color: #23333d;
`

const ColorContrast: NextPage = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  return (
    <PageLayoutContent>
      <PageHeading>Color</PageHeading>
      <section>
        <Text as="h2">Color Contrast</Text>
        <ColorAreaGreenBad>The message has been sent</ColorAreaGreenBad>
        <ColorAreaGreenGood>The message has been sent</ColorAreaGreenGood>
        <Box marginBottom="4">
          <Button>Continue</Button>
          <GoodButton>Continue</GoodButton>
        </Box>
      </section>

      <section>
        <Text as="h2">Don't rely on color alone.</Text>
        <ColorAreaGreenGood display="flex">
          <Image src="/images/check.png" alt="" />
          <Text>The message has been sent</Text>
        </ColorAreaGreenGood>
        <ColorAreaYellowGood display="flex">
          <Image src="/images/danger.png" alt="" />
          Try again later
        </ColorAreaYellowGood>
        <ColorAreaRedGood display="flex">
          <Image src="/images/cancel.png" alt="" />
          There was an error
        </ColorAreaRedGood>
      </section>
    </PageLayoutContent>
  )
}

export default ColorContrast
