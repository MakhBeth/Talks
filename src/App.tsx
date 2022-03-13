/** @jsxImportSource @emotion/react */
import React from 'react';
import { ListItem, Deck, Slide, Heading, Progress, FlexBox, Box, FullScreen, Grid, Text, UnorderedList, Appear, OrderedList } from 'spectacle';
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
        <FlexBox height="100%" flexDirection="column">
          <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
          <Box>
            <Text color="secondary" textAlign='center'><img css={css`max-height: 50vh;`} src="images/me.svg" alt="me" /></Text>
          </Box>
          <Box>
            <Heading textAlign='left'>Chi sono</Heading>
            <UnorderedList>
              <ListItem>Frontend @Tot.money</ListItem>
              <ListItem>CSS enthusiast</ListItem>
              <ListItem>Father of one <Appear><small>(the best one)</small></Appear></ListItem>
            </UnorderedList>
          </Box> 
        </Grid>
        </FlexBox>
      </Slide>
      <Slide><FlexBox height="100%" flexDirection='column' justifyContent='center'><Text>Questo non è un talk su EmotionJS!</Text><Appear css={css`text-align: center;`}><img css={css`max-width: 40vw;`} src="images/cat.gif" alt="cat" /><Text>È un viaggio che include EmotionJS!</Text></Appear></FlexBox></Slide>
      <Slide>
        <Heading>Agenda</Heading>
        <OrderedList>
        <Appear><ListItem>Intro <small>- già fatta</small></ListItem></Appear>
        <Appear><ListItem>Come mai? <small>- ma soprattutto perché?</small></ListItem></Appear>
        <Appear><ListItem>Cos'è? <small>- oltre al readme c'è di più</small></ListItem></Appear>
        <Appear><ListItem>Lessons learned <small>- cosa mi è piaciuto, cosa no</small></ListItem></Appear>
        <Appear><ListItem>Cosa c'è lì fuori? <small>- il prossimo tool!</small></ListItem></Appear>
        </OrderedList>
      </Slide>
      <Slide><Heading>Let's start now!</Heading><Box css={css`text-align: center;`}><img css={css`max-height: 50vh;`} src="images/Dancing-cat.gif" alt ="start" /></Box></Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Come mai?</Heading>
          <Appear>Era il marzo del 2020!</Appear>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>E niente</Heading>
          <Appear css={css`text-align: center;`}>Stavo per diventare papà! <br /><br /><img alt="daddy" src="images/daddy.gif" /></Appear>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>La tua vita finirà</Heading>
        </FlexBox>
      </Slide>
      <Slide backgroundImage="url(/images/pgprstart.png)">
      </Slide>
    </Deck>
  );
}
export default App;
