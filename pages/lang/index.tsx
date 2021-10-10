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

const Lang: NextPage = () => {
  return (
    <PageLayoutContent>
      <PageHeading>Example of language detection</PageHeading>
      <section>
        <Text as="h2">English lang="en"</Text>

        <Box marginBottom="4">
          EN:{" "}
          <AnchorLink href="#" lang="en">
            Use this link to go to a new page
          </AnchorLink>
        </Box>
      </section>
      <section>
        <Text as="h2">German lang="de"</Text>
        <Box marginBottom="4">
          DE:{" "}
          <AnchorLink href="#" lang="de">
            Use this link to go to a new page
          </AnchorLink>
        </Box>
        <Box marginBottom="4">
          DE:{" "}
          <AnchorLink href="#" lang="de">
            Über diesen Link gelangen Sie zu einer neuen Seite
          </AnchorLink>
        </Box>
        <Box marginBottom="4">
          EN:{" "}
          <AnchorLink href="#" lang="en">
            Über diesen Link gelangen Sie zu einer neuen Seite
          </AnchorLink>
        </Box>
      </section>
      <section>
        <Text as="h2">Language mix</Text>
        <Box marginBottom="4">
          I believe that in German, when you want to greet someone, you can say,{" "}
          <q>
            <b>Hallo, wie geht es dir?</b>
          </q>
        </Box>
        <Box marginBottom="4">
          I believe that in German, when you don't know the other person, you
          can say,{" "}
          <q lang="de">
            <b>Hallo, wie geht es dir?</b>
          </q>
        </Box>
      </section>
    </PageLayoutContent>
  )
}

export default Lang
