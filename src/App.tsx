/* eslint-disable import/no-webpack-loader-syntax */
/** @jsxImportSource @emotion/react */
import React, { useContext, useState } from 'react';
import { DeckContext, ListItem, Deck, Slide, Heading, Progress, FlexBox, Box, FullScreen, Grid, Text, UnorderedList, Appear, OrderedList, CodePane, useMousetrap } from 'spectacle';
import { css, Global, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const friends = ['Bruce Wayne', 'Michele Brucia', 'Way Home', 'Michele Wayne', 'Bruce Banner', 'Bruce Lee']
const mkSearchable = (e: string) => e.replace(/\s/g, '').toLowerCase()
const Search = () => {
  const [s, setS] = useState('')
  return <div css={css`
    ul li[data-searchablefor*="${mkSearchable(s)}"] {color: pink; text-decoration: underline;}
  `}>
    <input placeholder="cerca" 
      type="search" 
      css={css`font-size: 2rem; border: 1px solid black; border-radius: 0.5rem; padding: 0.5rem;`} 
      onChange={({target}) => setS(target.value)} 
    />
    <UnorderedList>
      {friends.map(e => 
        <li key={e} data-searchablefor={mkSearchable(e)}>{e}</li>)
      }
    </UnorderedList>
  </div>
}

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

function App() {return <Deck template={template}><Pres /></Deck>}

function Pres() {
  const { regressSlide, stepForward } = useContext(DeckContext)
  useMousetrap({
      up: () => regressSlide(),
      down: () => stepForward()
    },
  []
  );
  return (
    <>
      <Global styles={css`* {box-sizing: border-box; max-width: 100%; code { font-size: 1.8rem; }}`} />
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
            <Text>Mi trovate ovunque col nick: @makhbeth</Text>
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
        <Appear><ListItem>È tutto oro quello che luccica?<small>- lessons learned</small></ListItem></Appear>
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
      <Slide backgroundImage="url(/images/pgprend.png)" css={css`position: fixed;`}>
        <iframe src="https://piccologuaioaportaromana.com/" title='piccolo' css={css`position: absolute; top: 0; left: 0; bottom: 0; right: 0; border: none; width: 100vw; height: 100vh;`} />
      </Slide>
      <Slide>
        <CodePane language="jsx">
          {`
export const neutral: Colors = {
  main: { 
    lowest: '#1FB8A1', low: '#70EEDB', neutral: '#28EBCD'
  },
  neutral: {
    lowest: '#202020', low: '#202020', neutral: '#DEDEDE', high: '#F7F7F7', highest: '#ffffff'
  },
  skin: {
    lowest: '#BA926F', low: '#F3DCBC', neutral: '#FFEEDC', accent: '#EDA6B4'
  },
  accent: { neutral: '#F6D65D', low: '#CCAA3E' }
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
          <Grid gridTemplateColumns="70% 30%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box >
              <CodePane language='js' highlightRanges={[1, 8]}>{`
                const style = css\`
                  color: pink;
                  padding: 1rem;
                  justify-content: center;
                  align-items: center;
                  font-weight: bold;
                  font-size: 3rem;
                \`
                const element = document.createElement("div")
                element.innerText = "CSS DAY!!!"
                element.classList.add(style)
                document.body.appendChild(element)
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
          <Grid gridTemplateColumns="70% 30%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
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
          <Grid gridTemplateColumns="70% 30%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
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
          <Grid gridTemplateColumns="70% 30%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
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
          <Text>Il senso non era non dare un nome alle cose?</Text>
          <Appear><Heading>Ma c'è un plugin per tutto!</Heading></Appear>
          <Appear css={css`text-align: center;`}>
            <div css={css`text-decoration: underline; margin-bottom: 1rem;`}>https://emotion.sh/docs/@emotion/babel-plugin#labelformat</div><br />
            <CodePane language='javascript' showLineNumbers={false}>{`const brownStyles = css({ color: 'brown' })`}</CodePane>
            <Text textAlign="center">⬇</Text>
            <CodePane language='javascript' showLineNumbers={false}>{`const brownStyles = css({ color: 'brown' }, 'label:brownStyles;')`}</CodePane>
          </Appear>
        </FlexBox>
      </Slide>

      <Slide>
        <Text css={css`text-align: center;`}>REACT!</Text>
        <FlexBox>
          <Grid gridTemplateColumns="70% 30%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
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
          <Grid gridTemplateColumns="70% 30%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
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
          <Grid gridTemplateColumns="70% 30%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
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
          <Grid gridTemplateColumns="70% 30%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
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
          <Grid gridTemplateColumns="70% 30%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box>
              <CodePane language='jsx'>{`
                const a = css\`color: red; border: 1px solid pink;\`
                const b = css\`color: pink; padding: 1rem;\`
                <div css={[a, b]}>CSSDAY</div>
                <div css={css\`💲{a}💲{b}\`}>CSSDAY</div>
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
          <Appear><Text>Classi ripetute? E le performance??!1!</Text></Appear>
        </FlexBox>
      </Slide>

      <Slide>
        <Heading>Pausa Gatto</Heading>
        <img src="/images/catback.gif" alt="pausa gatto" />
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Nesting & Parent selector</Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Grid gridTemplateColumns="70% 30%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
            <Box>
              <CodePane language='jsx' highlightRanges={[[1, 14], [11, 13],[5], [8]]}>{`
              <div css={css\`
                font-size: 2rem;
                text-align: center;
                color: pink;
                section, span { display: inline; }
                div {
                  color: white;
                  &:first-of-type { font-size: 1rem; }
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
          <Grid gridTemplateColumns="70% 30%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
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
          <Grid gridTemplateColumns="70% 30%" gridColumnGap={15} css={css`width: 100%; justify-content: center;`}>
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

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Trick AND Treats</Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Media Query Hook</Heading>
          * short version, for long one, ask me!
        </FlexBox>
      </Slide>
      
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <CodePane language='typescript'>
          {`
export const breakpoints = {
  min: 0,
  xxxs: 480,
  xxs: 600,
  xs: 720,
  sm: 840,
  md: 960,
  lg: 1024,
  xl: 1248,
  xxl: 1440,
  max: 1920
}
          `}
          </CodePane>
          https://github.com/MakhBeth/js-to-scss
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <CodePane language='typescript'>
          {`
export const emBreakpoints = Object.keys(breakpoints)
  .reduce((aggr, key) => {
      aggr[key] = emCalc(breakpoints[key])
      return aggr
  }, {}
)

// FP-TS version
export const emBreakpoints = pipe(breakpoints,
  R.map((value) => emCalc(value))
)

          `}
          </CodePane>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <CodePane language='typescript'>
          {`
<div css={css\`
  💲{mq.xs} {
    display: none;
  }
\`}/>
          `}
          </CodePane>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <CodePane language='typescript' highlightRanges={[5]}>
          {`
export function useMedia (query: string): boolean {
  const [matches, setMatches] = useState(false)
  const [media, setMedia] = useState<MediaQueryList | null>(null)
  useEffect(() => {
    const media = window.matchMedia(query)
    setMedia(media)
  }, [])
  useEffect(() => {
    if (!media || !media.addEventListener) return
    if (media.matches !== matches) setMatches(media.matches)
    const listener = () => { setMatches(media.matches) }
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query, media])
  return matches
}
          `}
          </CodePane>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <CodePane language='typescript'>
          {`
          import { mq, useMedia } from './previousSlide'
          
          export function useMediaQuery (bp: keyof typeof mq): boolean {
            const query = mq[bp].replace('@media ', '')
            return useMedia(query)
          }

          // use it like:
          const Component: VFC = () => {
            const mq = useMediaQuery('md')
            return <div>{mq ? 1 : 2}</div>
          }
          `}
          </CodePane>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>SearchBar</Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Search />
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <CodePane language='tsx' highlightRanges={[[1,2], [4], [11], [6]]}>
            {`
const friends = ['Bruce Wayne','Michele Brucia','Way Home','Michele Wayne','Bruce Banner','Bruco Lì']
const mkSearchable = (e: string) => e.replace(/s/g, '').toLowerCase()
const Search = () => {
  const [s, setS] = useState('')
  return (<div css={css\`
    ul li[data-searchablefor*="💲{mkSearchable(s)}"] {color: pink; text-decoration: underline;}
  \`}>
    <input type="search" onChange={({target}) => setS(target.value)}  />
    <UnorderedList>
      {friends.map(e => 
        <ListItem key={e} data-searchablefor={mkSearchable(e)}>
          {e}
        </ListItem>)}
    </UnorderedList>
  </div>)
}`}
          </CodePane>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>È tutto oro quello che luccica?</Heading>
          <Appear><Text>NO!</Text></Appear>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Cosa non mi è piaciuto?</Heading>
          <OrderedList>
            <Appear><ListItem>Runtime: veloce ma presente</ListItem></Appear>
            <Appear><ListItem>Updates: fragile</ListItem></Appear>
            <Appear><ListItem>Labels non sempre perfette</ListItem></Appear>
          </OrderedList>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Per cosa non lo userei?</Heading>
          <OrderedList>
            <Appear><ListItem>Siti editoriali con poche pagine mastro</ListItem></Appear>
            <Appear><ListItem>Design Systems generici</ListItem></Appear>
            <Appear><ListItem>Ambienti non JS centrici</ListItem></Appear>
          </OrderedList>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Ma allora perchè lo usi?</Heading>
          <OrderedList>
            <Appear><ListItem>Landing page (o slide)</ListItem></Appear>
            <Appear><ListItem>SSR/SSG (Next, Nuxt, Gatsby ecc...)</ListItem></Appear>
            <Appear><ListItem>React CRUD app con sezioni "atomiche"</ListItem></Appear>
          </OrderedList>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>NON ESISTE IL SILVER BULLET!</Heading>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Cosa voglio provare la prossima volta?</Heading>
        </FlexBox>
      </Slide>

      <Slide backgroundColor='white'>
        <FlexBox height="100%" flexDirection="column">
          <img src="/images/vanilla.png" alt="vanilla extract" />
        </FlexBox>
      </Slide>

      <Slide backgroundColor='white'>
        <FlexBox height="100%" flexDirection="column">
          <img src="/images/sprinkles.png" alt="sprinkles" />
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Uscire sempre dalla comfort zone!</Heading>
          <Appear><Text>Per crearne di nuove 😁</Text></Appear>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <img src="/images/thankyou.gif" alt="grazie" css={css`max-height: 10vw; margin-bottom: 0;`} />
          <Heading>Grazie</Heading>
          <UnorderedList css={css`margin-top: 0`}>
            <Appear><ListItem>Matteo <small>per avermi fatto uscire dalla comfort zone e tornare sul palco</small></ListItem></Appear>
            <Appear><ListItem>Claudia <small>per avermi fatto uscire dalla comfort zone e dato una figlia</small></ListItem></Appear>
            <Appear><ListItem>Gaia <small>per avermi fatto uscire dalle comfort zone, tutte le comfort zone</small></ListItem></Appear>
          </UnorderedList>
        </FlexBox>
        </Slide>
        </>
  );
}
export default App;
