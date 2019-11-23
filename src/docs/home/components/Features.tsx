import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'docz'

import { Container } from '@components/ui'
import magicWand from '@images/icons/magic-wand.svg'
import reusable from '@images/icons/reusable.svg'
import settings from '@images/icons/settings.svg'
import plug from '@images/icons/plug.svg'
import watch from '@images/icons/watch.svg'
import protractor from '@images/icons/protractor.svg'

const ListItems = styled.div`
  display: grid;
  justify-content: center;

  ${p =>
    p.theme.mq({
      margin: ['30px 0', '60px 0'],
      gridGap: ['30px', '60px'],
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(1, 0.8fr)',
      ],
    })}
`

const FeatureItem = styled.div`
  display: flex;
  align-items: center;

  ${p =>
    p.theme.mq({
      padding: ['0 10px', '0 20px', '0 20px', '0 30px'],
      flexDirection: ['column', 'row'],
      textAlign: ['center', 'left'],
    })};
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  height: 100px;

  ${p =>
    p.theme.mq({
      margin: ['0 0 30px', '0 40px'],
    })}
`

const Title = styled.h3`
  padding: 0;
  margin: 0;
  font-family: 'Zilla Slab';
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.02em;
`

const Text = styled.p`
  padding: 0;
  margin: 0;
`

export const Features = () => (
  <Container>
    <ListItems>
      <FeatureItem>
        <Image src={reusable} />
        <Info>
          <Title>Reusable to the core</Title>
          <Text>
            Built ground up, Toucaan offers maximum reusability. Enjoy lightning fast development experience with benefits of
            separating critical CSS from everything else that's below-the-fold.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={magicWand} />
        <Info>
          <Title>Blockscoped typography</Title>
          <Text>
            Apply mathematically grounded <Link to="https://bubblin.io/blog/baseline-css">blockscoped typography</Link> on your content that scales with geometric precision. Never worry about text overflows again!
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={settings} />
        <Info>
          <Title>Easy to customize</Title>
          <Text>
            Using <b>component shadowing</b> you can create your own theme or
            customize the provided theme to make your documentation website
            stand out.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={watch} />
        <Info>
          <Title>WatchOS support</Title>
          <Text>
            MDX is <i>Markdown + JSX</i>, it brings the world of components to
            Markdown. MDX makes it possible to import and use your components in
            Markdown-style files. Docz fully leverages this, and provides many
            built-in components that augment and speed up your documentation
            workflow.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={plug} />
        <Info>
          <Title>Fully pluggable</Title>
          <Text>
            Plugins provide a great way to add functionality to your application
            without changing your code. With Docz, you can hook into the
            dataflow and build steps of your application using GatsbyJS and Docz
            plugins.
          </Text>
        </Info>
      </FeatureItem>
      <FeatureItem>
        <Image src={protractor} />
        <Info>
          <Title>Logical & mathematical</Title>
          <Text>
            Docz provides native TypeScript support for TSX components and can
            generate documentation from your prop types and comments in your
            code. All exported Docz components are built using TypeScript. Check
            out the <Link to="/docs/components-api">API section</Link> for more
            information.
          </Text>
        </Info>
      </FeatureItem>
    </ListItems>
  </Container>
)
