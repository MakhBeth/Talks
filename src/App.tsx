/** @jsxImportSource @emotion/react */
import React from 'react';
import { Deck, Slide, Heading, Progress, FlexBox, Box, FullScreen, Grid, Text } from 'spectacle';
import { css } from '@emotion/react'

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

function App() {
  return (
    <Deck template={template}>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Tu chiamalo se vuoi <em>EmotionJs</em></Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <Heading>Chi sono</Heading>
        <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box>
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box>
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      </Slide>
    </Deck>
  );
}
export default App;
