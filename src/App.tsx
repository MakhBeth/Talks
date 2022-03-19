/* eslint-disable import/no-webpack-loader-syntax */
/** @jsxImportSource @emotion/react */
import React from 'react';
import { ListItem, Deck, Slide, Heading, Progress, FlexBox, Box, FullScreen, Grid, Text, UnorderedList, Appear, OrderedList, CodePane } from 'spectacle';
import { css, Global, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

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

const CSSDAY = css`
  color: pink;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 3rem;
`

const Styled = styled.div`
  color: pink;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 3rem;
`

const a = css`color: red; border: 1px solid pink;`
const b = css`color: pink; padding: 1rem;`

const rotate = keyframes`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(360deg);
  }
`

function App() {
  return (
    <Deck template={template}>
      <Global styles={css`* {box-sizing: border-box; max-width: 100%;}`} />
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
        <Appear><ListItem>Trick AND treats!</ListItem></Appear>
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
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>TEMPO PER UN SIDE PROJECT!!!1!</Heading>
        </FlexBox>
      </Slide>
      <Slide backgroundColor='white'>
        <FlexBox height="100%" flexDirection="column">
          <img src="/images/NextJS.png" alt="nextjs" />
        </FlexBox>
      </Slide>
      <Slide backgroundImage="url(/images/pgprstart.png)">
        <Appear><Heading color="black">Piccolo guaio a Porta Romana</Heading></Appear>
      </Slide>
      <Slide backgroundImage="url(/images/pgprmale.png)">
      </Slide>
      <Slide backgroundImage="url(/images/pgprend.png)">
      </Slide>
      <Slide>
        <CodePane language="jsx" highlightRanges={[[2, 6], [7, 13], [14, 19], [20, 23]]}>
          {`
export const neutral: Colors = {
  main: {
    lowest: '#1FB8A1',
    low: '#70EEDB',
    neutral: '#28EBCD',
  },
  neutral: {
    lowest: '#202020',
    low: '#202020',
    neutral: '#DEDEDE',
    high: '#F7F7F7',
    highest: '#ffffff',
  },
  skin: {
    lowest: '#BA926F',
    low: '#F3DCBC',
    neutral: '#FFEEDC',
    accent: '#EDA6B4',
  },
  accent: {
    neutral: '#F6D65D',
    low: '#CCAA3E',
  }
}`}
        </CodePane>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Questo è un lavoro per...</Heading>
          <Appear css={css`text-align: center;`}>Css in JS</Appear>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Perchè tra tutti EmotionJS?</Heading>
          <Appear css={css`text-align: center;`}><iframe width="560" height="315" src="https://www.youtube.com/embed/CkyANDeG1F0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></Appear>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Text textAlign='left'><cite css={css`font-weight: 300;`}>There are only two hard things in Computer Science: cache invalidation and <Appear css={css`display: inline; font-weight: 900;`}>naming things</Appear>.</cite></Text>
          <Text textAlign='right' css={css`width: 100%;`}>-- Phil Karlton</Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Cos'è?</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Grid gridTemplateColumns="50% 50%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box>
              <CodePane language='jsx' highlightRanges={[2]}>{`
                <div 
                  className={css\`
                    color: pink;
                    padding: 1rem;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    font-size: 3rem;
                \`}>
                  CSS DAY!!!
                </div>
              `}</CodePane>
            </Box>
            <Box css={css`justify-content: center; align-items: center; display: flex;`}>
                <div 
                  css={css`
                    color: pink;
                    padding: 1rem;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    font-size: 3rem;
                  `}>
                  CSS DAY!!!
                </div></Box>
          </Grid>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <img src="/images/inspect.png" alt="inspect" />
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Grid gridTemplateColumns="50% 50%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box>
              <CodePane language='jsx' highlightRanges={[3]}>{`
                <div 
                  className={css\`
                    label: CSSDAY;
                    color: pink;
                    padding: 1rem;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    font-size: 3rem;
                \`}>
                  CSS DAY!!!
                </div>
              `}</CodePane>
            </Box>
            <Box css={css`justify-content: center; align-items: center; display: flex;`}>
                <div 
                  css={css`
                    label: CSSDAY;
                    color: pink;
                    padding: 1rem;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    font-size: 3rem;
                  `}>
                  CSS DAY!!!
                </div></Box>
          </Grid>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <img src="/images/inspect2.png" alt="inspect" />
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Grid gridTemplateColumns="50% 50%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box>
              <CodePane language='jsx' highlightRanges={[3]}>{`
                const CSSDAY = css\`...\`
                <div 
                  className={CSSDAY}>
                  CSS DAY!!!
                </div>
              `}</CodePane>
            </Box>
            <Box css={css`justify-content: center; align-items: center; display: flex;`}>
                <div 
                  css={CSSDAY}>
                  CSS DAY!!!
                </div></Box>
          </Grid>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Ma c'è un plugin per tutto!</Heading>
          <Appear css={css`text-align: center;`}>
            <div css={css`text-decoration: underline; margin-bottom: 1rem;`}>https://emotion.sh/docs/@emotion/babel-plugin#labelformat</div><br />
            <CodePane language='javascript' showLineNumbers={false}>{`const brownStyles = css({ color: 'brown' })`}</CodePane>
            <Text textAlign="center">⬇</Text>
            <CodePane language='javascript' showLineNumbers={false}>{`const brownStyles = /*#__PURE__*/ css({ color: 'brown' }, 'label:brownStyles;')`}</CodePane>
          </Appear>
        </FlexBox>
      </Slide>

      <Slide>
        <Heading>REACT!</Heading>
        <FlexBox>
          <Grid gridTemplateColumns="50% 50%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box>
              <CodePane language='jsx' highlightRanges={[[1], [3]]}>{`
                /** @jsxImportSource @emotion/react */
                <div 
                  css={css\`
                    color: pink;
                    padding: 1rem;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    font-size: 3rem;
                \`}>
                  CSS DAY!!!
                </div>
              `}</CodePane>
            </Box>
            <Box css={css`justify-content: center; align-items: center; display: flex;`}>
                <div 
                  css={css`
                    color: pink;
                    padding: 1rem;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    font-size: 3rem;
                  `}>
                  CSS DAY!!!
                </div></Box>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Bene, abbiamo finito!</Heading>
          <img src="/images/bloated.jpg" alt="random cat" />
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Mucho Gusto</Heading>
          O dell'opinionismo prematurato a destra
        </FlexBox>
      </Slide>

      <Slide>
        <Heading>Object styles!</Heading>
        <FlexBox>
          <Grid gridTemplateColumns="50% 50%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box>
              <CodePane language='jsx'>{`
                  <div 
                    css={{
                      color: 'pink',
                      padding: '1rem',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      fontSize: '3rem',
                    }}>
                    CSS DAY!!!
                  </div>
              `}</CodePane>
            </Box>
            <Box css={css`justify-content: center; align-items: center; display: flex;`}>
              <div 
                css={{
                  color: 'pink',
                  padding: '1rem',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  fontSize: '3rem',
                }}>
                CSS DAY!!!
              </div>
            </Box>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide>
        <Heading>Styled components</Heading>
        <FlexBox>
          <Grid gridTemplateColumns="50% 50%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box>
              <CodePane language='jsx' highlightRanges={[[1], [9]]}>{`
                const Styled = styled.div\`
                  color: pink;
                  padding: 1rem;
                  justify-content: center;
                  align-items: center;
                  font-weight: bold;
                  font-size: 3rem;
                \`
                <Styled>CSS DAY</Styled>
              `}</CodePane>
            </Box>
            <Box css={css`justify-content: center; align-items: center; display: flex;`}>
              <Styled>CSS DAY!</Styled>
            </Box>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide>
        <Heading>Composition</Heading>
        <FlexBox>
          <Grid gridTemplateColumns="50% 50%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box>
              <CodePane language='jsx'>{`
              <Styled className='qualcosa' css={[
                css\`
                  💲{CSSDAY}
                  color: green;
                \`,
                css\`color: blue;\`,
                CSSDAY
              ]}>
                CSS DAY
              </Styled>
              `}</CodePane>
            </Box>
            <Box css={css`justify-content: center; align-items: center; display: flex;`}>
              <Styled className='qualcosa' css={[
                  css`
                    ${CSSDAY}
                    color: green;
                  `,
                  css`color: blue;`,
                  CSSDAY
                ]}
              >
                CSS DAY
              </Styled>
            </Box>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>What about... cascading?</Heading>
            <UnorderedList>
              <Appear><ListItem>Emotion className &gt; Emotion prop</ListItem></Appear>
              <Appear><ListItem>Le className fuori dall'ecosistema Emotion vengono semplicemente aggiunte</ListItem></Appear>
              <Appear><ListItem>Una nuova classe viene forgiata!</ListItem></Appear>
            </UnorderedList>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Grid gridTemplateColumns="50% 50%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box>
              <CodePane language='jsx'>{`
                const a = css\`color: red; border: 1px solid pink;\`
                const b = css\`color: pink; padding: 1rem;\`
                <div css={[a, b]}>CSSDAY</div>
                <div css={css\`${a}${b}\`}>CSSDAY</div>
              `}</CodePane>
            </Box>
            <Box css={css`justify-content: center; align-items: center; display: flex; transform: scale(2);`}>
              <div css={([a, b])}>CSSDAY</div>
              <div css={css`${a}${b}`}>CSSDAY</div>
            </Box>
          </Grid>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <img src="/images/inspect3.png" alt="inspect" />
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Nesting & Parent selector</Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Grid gridTemplateColumns="50% 50%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box>
              <CodePane language='jsx' highlightRanges={[[1, 18], [15, 17],[5, 7], [10, 12]]}>{`
              <div css={css\`
                font-size: 2rem;
                text-align: center;
                color: pink;
                section, span {
                  display: inline;
                }
                div {
                  color: white;
                  &:first-of-type {
                    font-size: 1rem;
                  }
                }
              \`}>
                <div>This is</div>
                <section>CSS</section>
                <span>DAY!!!</span>
              </div>
              `}</CodePane>
            </Box>
            <Box css={css`justify-content: center; align-items: center; display: flex; transform: scale(2);`}>
              <div css={css`
                font-size: 2rem;
                text-align: center;
                color: pink;
                
                section, span {
                  display: inline;
                }

                div {
                  color: white;
                  &:first-of-type {
                    font-size: 1rem;
                  }
                }
              `}>
                <div>This is</div>
                <section>CSS</section>
                <span>DAY!!!</span>
              </div>
            </Box>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide>
        <Heading>Animation</Heading>
        <FlexBox>
          <Grid gridTemplateColumns="50% 50%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box>
              <CodePane language='jsx' highlightRanges={[[1, 8], [10]]}>{`
                const rotate = keyframes\`
                  from {
                    transform: rotateX(0deg);
                  }
                  to {
                    transform: rotateX(360deg);
                  }
                \`
                <Styled css={css\`
                  animation: 💲{rotate} 2s linear infinite;
                \`}>CSS DAY!</Styled>
              `}</CodePane>
            </Box>
            <Box css={css`justify-content: center; align-items: center; display: flex;`}>
              <Styled css={css`
                animation: ${rotate} 2s linear infinite;
              `}>CSS DAY!</Styled>
            </Box>
          </Grid>
        </FlexBox>
      </Slide>

      <Slide>
        <Heading>Media Queries</Heading>
        <FlexBox>
          <Grid gridTemplateColumns="50% 50%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box>
              <CodePane language='jsx' highlightRanges={[3, 5]}>{`
                <Styled css={css\`
                  color: red;
                  @media (min-width: 20rem) {
                    color: white;
                  }
                \`}>CSS DAY!</Styled>
              `}</CodePane>
            </Box>
            <Box css={css`justify-content: center; align-items: center; display: flex;`}>
              <Styled css={css`
                color: red;
                @media (min-width: 20rem) {
                  color: white;
                }
              `}>CSS DAY!</Styled>
            </Box>
          </Grid>
        </FlexBox>
      </Slide>
      <Slide backgroundImage="url(/images/pgprend.png)">
        <FlexBox height="100%" flexDirection="column">
          <Appear><CodePane language='jsx'>{`
            const size = born ? 40 : 60
            export const Cockade: React.FunctionComponent = () => (
              <div
                css={css\`
                  max-height: 💲{size}vh;
                  max-width: 💲{size}vh;
                \`}
              />
            )
          `}</CodePane></Appear>
        </FlexBox>
      </Slide>
      <Slide backgroundImage="url(/images/pgprend.png)">
        <FlexBox height="100%" flexDirection="column">
          <CodePane language='jsx' highlightRanges={[3]}>{`
            const generateAppearCss = (delay: number, moreCss?: string) => css\`
              animation: 💲{appear} 0.5s;
              animation-delay: 💲{delay}ms;
              animation-fill-mode: backwards;
              animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
              transform-origin: center center;
              will-change: transform, opacity;
              💲{moreCss}
            \`

          `}</CodePane>
        </FlexBox>
      </Slide>
    </Deck>
  );
}
export default App;
