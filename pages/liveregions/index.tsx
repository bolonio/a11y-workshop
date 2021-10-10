import type { NextPage } from "next"
import React, { useState } from "react"
import { PageLayoutContent } from "../../src/components/content"
import { PageHeading } from "../../src/components/core/headings"
import Text from "../../src/components/core/Text"
import Box from "../../src/components/core/Box"
import styled from "styled-components"

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

const LiveRegions: NextPage = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  return (
    <PageLayoutContent>
      <PageHeading>Javascript - ARIA Live Regions</PageHeading>
      <section>
        <Text as="h2">aria-live=polite</Text>
        <Box marginBottom="4">
          <Button
            className="button"
            onClick={() => {
              setShowMessage(true)
            }}
          >
            Sending a message is important, so I will do it for you, so please
            click this button
          </Button>
          {showMessage && (
            <Box
              role="status"
              marginTop="2"
              border="2px solid #23333d"
              padding="3"
            >
              The message has been sent
            </Box>
          )}
        </Box>
      </section>
      <section>
        <Text as="h2">aria-live=assertive</Text>
        <Box marginBottom="4">
          <Button
            className="button"
            onClick={() => {
              setShowAlert(true)
            }}
          >
            Sending a message is important, so I will do it for you, so please
            click this button
          </Button>
          {showAlert && (
            <Box
              role="alert"
              marginTop="2"
              border="2px solid #23333d"
              padding="3"
            >
              There was an error, please try again later!
            </Box>
          )}
        </Box>
      </section>
    </PageLayoutContent>
  )
}

export default LiveRegions
